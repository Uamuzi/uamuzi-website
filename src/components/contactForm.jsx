import React, {useState} from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ContactForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const BASE_URL = "https://uamuzi.site"

    function handleSubmit(e){
        e.preventDefault()
        const payload = {
            "full_name": fullName,
            email,
            message
        }

        fetch(`${BASE_URL}/mails/contacts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => {
            if(res.ok){
                toast.success(`Thank you for getting in touch with us. A representative will respond as soon as possible.`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }else{
                toast.error(`An unexpected error occured. Please try again later.`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
        .catch(error => {
            toast.error(`An unexpected error occured. Please try again later.`, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }
  return (
    <form className="contact_form" onSubmit={e => handleSubmit(e)}>
        <ToastContainer />
      <p className="h3 text-start event-title">Get In Touch</p>
      <p className="p">Our friendly team would love to hear from you</p>
      <div className="text-start py-4">
        <label>Your Name</label>
        <input type="text" placeholder="Eg, John Doe" value={fullName} onChange={e => setFullName(e.target.value)} />
      </div>
      <div className="text-start py-4">
        <label>Email</label>
        <input type="email" placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="text">
        <label>Message</label>
        <textarea className="p-1" value={message} onChange={e => setMessage(e.target.value)} />
      </div>
      <button className="join">Send Mesage</button>
    </form>
  )
}

export default ContactForm
