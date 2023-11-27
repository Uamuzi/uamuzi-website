import React, { useEffect, useState } from "react"
import UamuziLogo from "../../images/uamuzi-favlogo.png"
import playstore from "../../images/playstore-dark.png"
import phone from "../../images/phone22.png"
import parse from 'html-react-parser'

function Mobile() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [leader, setLeader] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState('')

//   useEffect(() => {
//     if(error === 'true'){
        
//       }
//     else if(error === 'false'){
//     }
//   }, [setError])

  

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      leader,
    }

    fetch("http://localhost:8000/mails/testers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
            setMessage(`<p className="beta-message text-success">Success! Keep an eye out in your email for details on how to engage</p>`)
        }
        else{
            response.json().then(data => {
              const resMessage = data.email[0]
              console.log(data.email[0])
              setMessage(`<p className="beta-error text-danger">${resMessage}</p>`)
            })
        }
      })
      .catch(error => {
        setMessage(`<p className="beta-error text-danger">Error submitting your details. Please try again</p>`)
      })
  }

  return (
    <section className="container py-5 px-5 mobile-section position-relative">
      <div className="vector-wave position-absolute d-none d-md-block d-lg-block"></div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 col-sm-12 mobile-text-col">
          <img src={UamuziLogo} alt="uamuzi logo" width={70} height={80} />
          <p className="h3 fw-bold py-3">Uamuzi mobile app</p>
          <p>
            Get connected with your leaders and friends and create a community
            where everyone matters. Anywhere, anytime on your phone. The app
            features include:
          </p>
          <ul className="landing-goals m-0 p-0">
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                {" "}
                <b>Uongozi</b> (leadership)
              </p>
            </li>
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                <b>Baraza</b> (assembly)
              </p>
            </li>
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                <b>Tubonge</b> (private chat)
              </p>
            </li>
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                <b>Mulika</b> (peacebuilding)
              </p>
            </li>
            <img
              className=""
              src={playstore}
              alt="Uamuzi-playstore-logo"
              width={130}
              height={45}
            />
            <form className="py-5" onSubmit={handleSubmit}>
              <h3 className="py-4">Join the beta test</h3>
              {parse(message)}
              <div className="form-group pb-3">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="firstName"
                  placeholder="Enter first name"
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </div>
              <div className="form-group pb-3">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="lastName"
                  placeholder="Enter last name"
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </div>
              <div className="form-group pb-3">
                <label for="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-check pb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkLeader"
                  checked={leader}
                  onChange={() => setLeader(!leader)}
                  style={{border: "2px solid black"}}
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check this if you're am elected or aspiring leader
                </label>
              </div>
              <button type="submit" className="btn btn-primary px-4">
                Apply
              </button>
            </form>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center position-relative">
          <div className="big-purple-mobile-circle position-absolute"></div>
          <img
            src={phone}
            className="phone-mobile"
            alt="mobile phone"
            height={500}
          />
          <div className="strokes stroke-1 position-absolute "></div>
          <div className="strokes stroke-2 position-absolute "></div>
          <div className="strokes stroke-3 position-absolute "></div>
        </div>
      </div>
    </section>
  )
}

export default Mobile
