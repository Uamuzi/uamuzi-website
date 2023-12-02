import React, { useEffect, useState} from 'react'

function VolunteerForm() {
    const [counties, setCounties] = useState([])
    // const [countyId, setCountyId] = useState(null);
    const [constituencies, setConstituencies] = useState([]);
    const [wards, setWards] = useState([])
    const [chars, setChars] = useState(500);
    const localURL = "http://localhost:3000"
    const prodURL = "https://www.uamuzi.online"

    fetch(`${localURL}/api/v1/counties`)
    .then(res => res.json())
    .then(data => setCounties(data))

    function handleCounties(e){
        const selectedCountyName = e.target.value
        const countyId = counties.find(county => county.name === selectedCountyName)?.id;
        fetch(`${localURL}/api/v1/constituencies/${countyId}`)
        .then(res => res.json())
        .then(data => setConstituencies(data))
    }

    function handleConstituencies(e){
        const selectedConstituencyName = e.target.value
        const constituencyId = constituencies.find(constituency => constituency.name === selectedConstituencyName)?.id;
        fetch(`${localURL}/api/v1/wards/${constituencyId}`)
        .then(res => res.json())
        .then(data => setWards(data))
    }
    function handleBio(e){
        setChars(500 - e.target.value.length)
    }

  return (
    <form className="container justify-content-center vol-form">
        <h2 className="event">JOIN US</h2>
        <p className="h3 text-center event-title">Be Part Of Uamuzi Foundation Volunteers (UFV)</p>
        <p className="p">It starts by filling the form below</p>
        <div className="d-flex gap-2 py-4">
            <div className="text-start name1">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
            </div>
            <div className="text-start name2">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
            </div>
        </div>
        <div className="text-start">
            <label>Email</label>
            <input type="email" placeholder="you@company.com" />
        </div>
        <div className="text-start py-4">
            <label>Phone Number</label>
            <input type="email" placeholder="Enter your phone number" />
        </div>
        <div className="d-flex justify-content-start gap-5 text-start text_input py-4 location-selects">
            <div className='form-group'>
                <label htmlFor='country'>Country</label>
                <select className='form-control' id="country" name="country">
                    <option className="form-item" value="Kenya">Kenya</option>                    
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='county'>County</label>
                <select className='form-control' id="county" name="County" onChange={e => handleCounties(e)}>
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
                <select className='form-control' id="constituency" name="constituency" onChange={e => handleConstituencies(e)}>
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
                <select className='form-control' id="ward" name="ward">
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
            <textarea rows={6} cols={200} className="px-2 py-3" maxLength={500} onChange={(e) => handleBio(e)}/>
        </div>
        <button className='join' type="submit">Join UFV</button>
    </form>
  )
}

export default VolunteerForm