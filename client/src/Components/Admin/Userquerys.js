import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Table from 'react-bootstrap/esm/Table'
import { useDispatch } from 'react-redux';
import { Getuserdetails, Getuserquerys } from '../Api';
const Userquerys = () => {
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState([]);
  useEffect(() => {
    async function getdata() {
      const profilData = await Getuserquerys();
      setProfile(profilData);
    }
    getdata();
  }, []);
  return (
    <div>
    <Sidebar/>
    <div className="users">
    <Table responsive="sm">
    <thead>
      <tr>
        <th>Sl.No</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Subject</th>
        <th>Message</th>
      </tr>
    </thead>
    {Profile && Profile.length > 0 ? (
      Profile.map((item, index) => (
        <tbody key={index}>
          <tr>
            <td>{index + 1}</td>
            <td>{item.Username}</td>
            <td>{item.Email}</td>
            <td>{item.Subject}</td>
            <td>{item.Message}</td>
          </tr>
        </tbody>
      ))
    ) : (
      <tbody>
        <tr>
          <td colSpan="5">Loading.....</td>
        </tr>
      </tbody>
    )}
    
        </Table>
    </div>
    </div>
  )
}
export default Userquerys