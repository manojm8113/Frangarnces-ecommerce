import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, Getmyprofile, Getuserdetails, deleteMydata } from '../Api';
import './Usersprofile.css'
const Usersprofile = () => {
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState([]);
  useEffect(() => {
    async function getdata() {
      const profilData = await Getuserdetails();
      setProfile(profilData);
    }
    getdata();
  }, []);
  function deleteuser(id) {
    DeleteUser(id);
  }
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
        <th>Phone</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Actions</th>
      </tr>
    </thead>
    {Profile.length > 0 ?(Profile.map((item,index)=>(
    <tbody>
      <tr>
        <td>{index+1}</td>
          <td>{item.Username}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Address}</td>
          <td>{item.Pincode}</td>
          <td><button className='btn btn-danger' onClick={deleteuser}>Delete</button></td>
          </tr>
          </tbody>
        ))):(<p>Loading.....</p>)}
        </Table>
    </div>
    </div>
  )
}
export default Usersprofile