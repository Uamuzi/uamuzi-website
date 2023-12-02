import React, { useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VolunteerForm() {
    const [counties, setCounties] = useState([])
    const [county, setCounty] = useState("");
    const [constituencies, setConstituencies] = useState([]);
    const [constituency, setConstituency] = useState("");
    const [wards, setWards] = useState([])
    const [country, setCountry] = useState("")
    const [bio, setBio] = useState("")
    const [ward, setWard] = useState(null)
    const [chars, setChars] = useState(500);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const localURL = "http://localhost:3000"
    const prodURL = "https://www.uamuzi.online"
    const localMailerURL = "http://localhost:8001"
    const prodMailerURL = "https://uamuzi.site/mails/volunteers"

    fetch(`${prodURL}/api/v1/counties`)
    .then(res => res.json())
    .then(data => setCounties(data))

    function handleCounties(e){
        const selectedCountyName = e.target.value
        setCounty(selectedCountyName)
        const countyId = counties.find(county => county.name === selectedCountyName)?.id;
        fetch(`${prodURL}/api/v1/constituencies/${countyId}`)
        .then(res => res.json())
        .then(data => setConstituencies(data))
    }

    function handleConstituencies(e){
        const selectedConstituencyName = e.target.value
        setConstituency(selectedConstituencyName)
        const constituencyId = constituencies.find(constituency => constituency.name === selectedConstituencyName)?.id;
        fetch(`${prodURL}/api/v1/wards/${constituencyId}`)
        .then(res => res.json())
        .then(data => setWards(data))
    }

    function handleBio(e){
        setChars(500 - e.target.value.length)
        setBio(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const payload = {
            "first_name": firstName, 
            "last_name": lastName, 
            email, 
            "phone_number": phoneNumber, country, county, constituency, ward, bio
        }
        console.log(JSON.stringify(payload))
        fetch(`${localMailerURL}/mails/volunteers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
            else if(res.status == 400){
                res.json().then(error => {
                    console.log(error.email)
                    toast.error(`${error.email[0]}`, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    toast.error(`${error.phone_number[0]}`, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                })
            }
        })
        .then(data => {
            toast.success(`Success! Thank you for volunteering, ${data.first_name}`, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        .catch(error => {
            console.log(error.status)
            toast.error(`An unexpected error occured. Please try again later`, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }

  return (
    <form className="container justify-content-center vol-form" onSubmit={e => handleSubmit(e)}>
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
            <input type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required/>
        </div>
        <div className="text-start py-4">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required/>
        </div>
        <div className="d-flex justify-content-start gap-5 text-start text_input py-4 location-selects">
            <div className='form-group'>
                <label htmlFor='country'>Country</label>
                <select className='form-control' id="country" name="country" required onChange={e => setCountry(e.target.value)}>
                    <option value=''>Select</option>
                    <option className="form-item" value="Kenya">Kenya</option>                    
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='county'>County</label>
                <select className='form-control' id="county" name="County" onChange={e => handleCounties(e)} required >
                    <option value=''>Select</option>
                    {   counties &&
                        counties.map(county => {
                            return <option key={county.id} className="form-item" value={county.name}>{county.name}</option>;
                        })
                    }
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='constituency'>Constituency</label>
                <select className='form-control' id="constituency" required name="constituency" onChange={e => handleConstituencies(e)}>
                    <option value=''>Select</option>
                    {
                        constituencies &&
                        constituencies.map(constituency => {
                            return <option key={constituency.id} value={constituency.name}>{constituency.name}</option>
                        })
                    }
                    
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='ward'>Ward</label>
                <select className='form-control' id="ward" required name="ward" onChange={e => setWard(e.target.value)}>
                    <option value=''>Select</option>
                    {
                        wards &&
                        wards.map(ward => {
                            return <option key={ward.id} value={ward.name}>{ward.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
        <div className="text">
            <label>A little bit about yourself <span className='ml-auto text-danger'>*{chars}</span></label>
            <textarea rows={6} cols={200} required className="px-2 py-3" maxLength={500} onChange={(e) => handleBio(e)}/>
        </div>
        <button className='join' type="submit">Join UFV</button>
    </form>
  )
}

export default VolunteerForm