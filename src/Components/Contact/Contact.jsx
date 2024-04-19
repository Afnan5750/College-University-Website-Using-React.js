import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "adf49c41-3714-4e66-b74a-baa0e4963143");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cum totam? Ipsa aliquid cum non necessitatibus voluptatem suscipit dicta numquam nesciunt, commodi quia obcaecati nobis odit corrupti tempora iure rem quis beatae debitis repellat labore nostrum distinctio? Dolore, vitae temporibus?</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> mafnankhadim74@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> +92 333 3395115</li>
                    <li><img src={location_icon} alt="" /> Awin-e-Iqbal Lahore <br /> Pakistan</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter your phone number' required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message...' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
