import React, { useEffect, useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import './Contact.css';
import Footer from './Footer';
import { Getmyprofile, queryDatas } from './Api';
import { useSelector } from 'react-redux';

const Contactform = () => {
  const [Profile, setProfile] = useState();
  const Datas = useSelector((state) => state.login.LoginInformation[0]);
  const id = Datas?.id;

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');

  useEffect(() => {
    async function getdata() {
      if (id) {
        const profilData = await Getmyprofile(id);
        setProfile(profilData);
        setUsername(profilData.Username);
        setEmail(profilData.Email);
      }
    }
    getdata();
  }, [id]);

  async function submit(e) {
    e.preventDefault(); // Prevent the default form submission
    try {
      await queryDatas({ Username, Email, Subject, Message });
      alert('Your query has been sent successfully!');
    } catch (error) {
      console.error('Error sending query:', error);
      alert('Failed to send your query.');
    }
  }

  return (
    <div>
      <Navbar />
      <h1 className='aboutus-head'>Contact Us</h1>
      <section className='contactform'>
        <div className="contactus">
          <h4 className='contacthead'>Send Your Queries</h4>
          <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
            <MDBValidationItem invalid feedback='Please provide your name.'>
              <MDBInput
                label='Name'
                wrapperClass='mb-4'
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </MDBValidationItem>
            <MDBValidationItem invalid feedback='Please provide your email.'>
              <MDBInput
                type='email'
                label='Email address'
                wrapperClass='mb-4'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </MDBValidationItem>
            <MDBValidationItem invalid feedback='Please provide mail subject.'>
              <MDBInput
                label='Subject'
                wrapperClass='mb-4'
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </MDBValidationItem>
            <MDBValidationItem invalid feedback='Please provide a message text.'>
              <MDBTextArea
                wrapperClass='mb-4'
                label='Message'
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
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
      <Footer />
    </div>
  );
};

export default Contactform;
