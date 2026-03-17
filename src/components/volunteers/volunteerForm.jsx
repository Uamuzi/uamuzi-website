import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Fallback data for Kenyan administrative units
const FALLBACK_COUNTIES = [
    { id: 'f1', name: 'Nairobi' },
    { id: 'f2', name: 'Mombasa' },
    { id: 'f3', name: 'Kisumu' },
    { id: 'f4', name: 'Nakuru' },
    { id: 'f5', name: 'Kiambu' },
    { id: 'f6', name: 'Uasin Gishu' },
    { id: 'f7', name: 'Machakos' }
];

const FALLBACK_CONSTITUENCIES = {
    'Nairobi': [
        { id: 'c1', name: 'Westlands' },
        { id: 'c2', name: 'Dagoretti' },
        { id: 'c3', name: 'Kibra' },
        { id: 'c4', name: 'Roysambu' },
        { id: 'c5', name: 'Kasarani' }
    ],
    'Mombasa': [
        { id: 'c10', name: 'Mvita' },
        { id: 'c11', name: 'Nyali' },
        { id: 'c12', name: 'Likoni' }
    ]
};

const FALLBACK_WARDS = {
    'Westlands': [
        { id: 'w1', name: 'Kitisuru' },
        { id: 'w2', name: 'Parklands' },
        { id: 'w3', name: 'Karura' }
    ]
};

function VolunteerForm() {
    const [counties, setCounties] = useState([])
    const [county, setCounty] = useState("");
    const [constituencies, setConstituencies] = useState([]);
    const [constituency, setConstituency] = useState("");
    const [wards, setWards] = useState([])
    const [country, setCountry] = useState("")
    const [bio, setBio] = useState("")
    const [ward, setWard] = useState("")
    const [chars, setChars] = useState(500);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    
//     const prodURL = "https://uamuzi.online"
    const prodURL = "https://uamuzi.site"
    const prodMailerURL = "https://uamuzi.site"

    // Fetch Counties on Mount
    useEffect(() => {
        fetch(`${prodURL}/api/v1/counties`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setCounties(data);
                } else {
                    setCounties(FALLBACK_COUNTIES);
                }
            })
            .catch(() => {
                console.warn("API unreachable, using fallback counties.");
                setCounties(FALLBACK_COUNTIES);
            });
    }, []);

    // Fetch Constituencies when County changes
    useEffect(() => {
        if (!county) {
            setConstituencies([]);
            return;
        }

        const selectedCounty = counties.find(c => c.name === county);
        if (selectedCounty && !selectedCounty.id.toString().startsWith('f')) {
            fetch(`${prodURL}/api/v1/constituencies/${selectedCounty.id}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setConstituencies(data);
                    } else {
                        setConstituencies(FALLBACK_CONSTITUENCIES[county] || []);
                    }
                })
                .catch(() => {
                    setConstituencies(FALLBACK_CONSTITUENCIES[county] || []);
                });
        } else {
            setConstituencies(FALLBACK_CONSTITUENCIES[county] || []);
        }
        
        // Reset dependent fields
        setConstituency("");
        setWards([]);
        setWard("");
    }, [county, counties]);

    // Fetch Wards when Constituency changes
    useEffect(() => {
        if (!constituency) {
            setWards([]);
            return;
        }

        const selectedConstituency = constituencies.find(c => c.name === constituency);
        if (selectedConstituency && !selectedConstituency.id.toString().startsWith('c')) {
            fetch(`${prodURL}/api/v1/wards/${selectedConstituency.id}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setWards(data);
                    } else {
                        setWards(FALLBACK_WARDS[constituency] || []);
                    }
                })
                .catch(() => {
                    setWards(FALLBACK_WARDS[constituency] || []);
                });
        } else {
            setWards(FALLBACK_WARDS[constituency] || []);
        }

        setWard("");
    }, [constituency, constituencies]);

    function handleBio(e) {
        setChars(500 - e.target.value.length)
        setBio(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            "first_name": firstName,
            "last_name": lastName,
            email,
            "phone_number": phoneNumber, 
            country, 
            county, 
            constituency, 
            ward, 
            bio
        }
        
        fetch(`${prodMailerURL}/mails/volunteers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then(async res => {
            if (res.ok) {
                return res.json()
            } else if (res.status === 400) {
                const error = await res.json();
                if (error.email) toast.error(error.email[0]);
                if (error.phone_number) toast.error(error.phone_number[0]);
                throw new Error("Validation error");
            } else {
                throw new Error("Submission failed");
            }
        })
        .then(data => {
            toast.success(`Success! Thank you for volunteering, ${data.first_name || firstName}`);
            // Optional: reset form
        })
        .catch(error => {
            if (error.message !== "Validation error") {
                toast.error("An unexpected error occurred. Please try again later.");
            }
        });
    }

    return (
        <form className="container justify-content-center vol-form" onSubmit={handleSubmit}>
            <ToastContainer />
            <h2 className="event">JOIN US</h2>
            <p className="h3 text-center event-title">Be Part Of Uamuzi Foundation Volunteers (UFV)</p>
            <p className="p">It starts by filling the form below</p>
            
            <div className="d-flex gap-2 py-4">
                <div className="text-start name1">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                </div>
                <div className="text-start name2">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
                </div>
            </div>

            <div className="text-start">
                <label>Email</label>
                <input type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>

            <div className="text-start py-4">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
            </div>

            <div className="d-flex justify-content-start gap-5 text-start text_input py-4 location-selects">
                <div className='form-group'>
                    <label htmlFor='country'>Country</label>
                    <select className='form-control' id="country" value={country} name="country" required onChange={e => setCountry(e.target.value)}>
                        <option value=''>Select</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='county'>County</label>
                    <select className='form-control' id="county" value={county} name="County" onChange={e => setCounty(e.target.value)} required >
                        <option value=''>Select</option>
                        {counties.map(c => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='constituency'>Constituency</label>
                    <select className='form-control' id="constituency" value={constituency} required name="constituency" onChange={e => setConstituency(e.target.value)}>
                        <option value=''>Select</option>
                        {constituencies.map(c => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='ward'>Ward</label>
                    <select className='form-control' id="ward" value={ward} required name="ward" onChange={e => setWard(e.target.value)}>
                        <option value=''>Select</option>
                        {wards.map(w => (
                            <option key={w.id} value={w.name}>{w.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="text">
                <label>A little bit about yourself <span className='ml-auto text-danger'>*{chars}</span></label>
                <textarea rows={6} cols={200} required className="px-2 py-3" maxLength={500} value={bio} onChange={handleBio} />
            </div>

            <button className='join' type="submit">Join UFV</button>
        </form>
    )
}

export default VolunteerForm