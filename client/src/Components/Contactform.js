import React, { useEffect, useState } from 'react'
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem,MDBTextArea } from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import './Contact.css'
import Footer from './Footer';
import { Getmyprofile, queryDatas } from './Api';
import { useSelector } from 'react-redux';
const Contactform = () => {
  const [Profile, setProfile] = useState();
  const Datas = useSelector((state) => state.login.LoginInformation[0]);
  console.log("Datas", Datas);
  if (Datas) {
    var id = Datas.id;
  }
  useEffect(() => {
    async function getdata() {
      const profilData = await Getmyprofile(id);
      setProfile(profilData);
    }
    getdata();
  },[]);
  const [Username,setUsername]=useState('')
  const [Email,setEmail]=useState('')
  const [Subject,setSubject]=useState('')
  const [Message,setMessage]=useState('')
  async function submit(){
    queryDatas({Username,Email,Subject,Message})
}
  return (
    <div>
    <Navbar/>
    <h1 className='aboutus-head'>Contact Us</h1>
    <section className='contactform'>
    <div className="contactus">
    <h4 className='contacthead'>Send Your Querys</h4>
    <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
    <MDBValidationItem invalid feedback='Please provide your name.'>
      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' value={Profile && Profile.Username} onChange={(e)=>setUsername(e.target.value)} />
    </MDBValidationItem>
    <MDBValidationItem invalid feedback='Please provide your email.'>
      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' value={Profile && Profile.Email} onChange={(e)=>setEmail(e.target.value)} />
    </MDBValidationItem>
    <MDBValidationItem invalid feedback='Please provide mail subject.'>
      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' onChange={(e)=>setSubject(e.target.value)} required />
    </MDBValidationItem>
    <MDBValidationItem invalid feedback='Please provide a message text.'>
      <MDBTextArea wrapperClass='mb-4' label='Message' onChange={(e)=>setMessage(e.target.value)}  required />
    </MDBValidationItem>
    <MDBValidationItem feedback=''>
      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
    </MDBValidationItem>
    <MDBBtn type='submit' color='dark' block className='my-4' onClick={submit}>
      Send
    </MDBBtn>
  </MDBValidation>
  </div>
  </section>
  <Footer/>
    </div>
  )
}
export default Contactform