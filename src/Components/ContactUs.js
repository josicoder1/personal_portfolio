import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponents'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import AnchorComponent from '../subComponents/Anchor'
import emailjs from 'emailjs-com'

// ------------------- Styled Components (unchanged) -------------------
const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
`

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => `rgba(${props.theme.textRgba},0.8)`};
  }
`

const Footer = styled.footer`
  background-color: ${props => props.theme.text};
  color: white;
  text-align: center;
  padding: 5rem 0;
  position: relative;
  width: 100%;
  bottom: 0;
`
// ---------------------------------------------------------------------

const ContactPage = () => {
  const [numbers, setNumber] = useState(0)
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumber(parseInt(num))
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs.send(
        "service_1089", // Replace with your EmailJS Service ID
        "template_qm97vug", // Replace with your EmailJS Template ID
        formData,
        "sVZE9ZC-NXd-XEGEq" // Replace with your EmailJS Public Key / User ID
      )
    .then(() => {
      setStatus("✅ Message sent successfully!")
      setFormData({
        from_name: '',
        reply_to: '',
        subject: '',
        message: ''
      })
    })
    .catch((error) => {
      console.error("Email sending failed:", error)
      setStatus("❌ Failed to send message. Please try again.")
    })
  }

  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />

        <Center>
          <ContactForm onSubmit={handleSubmit}>
            <h2>Contact Us</h2>

            <Input
              type="text"
              placeholder="Your Name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <Input
              type="email"
              placeholder="Your Email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              required
            />

            <Input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <TextArea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <SubmitButton type="submit">Send Message</SubmitButton>
            {status && <p>{status}</p>}
          </ContactForm>
        </Center>
      </Container>

      <Footer>
        <p>Email: ytadesse72@gmail.com</p>
        <p>Phone: 0906504853</p>
        <p>Address: Addis Ababa, kality, Ethiopia</p>
      </Footer>
    </MainContainer>
  )
}

export default ContactPage
