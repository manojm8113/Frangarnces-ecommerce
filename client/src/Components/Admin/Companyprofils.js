import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Getcompanydetails } from '../Api';
import Table from 'react-bootstrap/esm/Table';
const Companyprofils = () => {
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState([]);
  useEffect(() => {
    async function getdata() {
      try{
      const profilData = await Getcompanydetails();
      setProfile(profilData);
      }catch(error){
        console.log('Error fetching company details:', error);
      }
    }
    getdata();
  }, []);
  // function deleteuser(id) {
  //   deleteMydata(id);
  // }
  return (
    <div>
    <Sidebar/>
    <div className="row">
    <div className="col-9 m-auto">
    <div className="users">
    <Table responsive="sm">
    <thead>
      <tr>
        <th>Sl.No</th>
        <th>Company Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    {Profile && Profile.length > 0 ? (
      Profile.map((item, index) => (
        <tbody key={index}>
          <tr>
            <td>{index + 1}</td>
            <td>{item.Companyname}</td>
            <td>{item.Email}</td>
            <td>Delete</td>
            <td><button className='btn btn-danger'>Delete</button></td>
          </tr>
        </tbody>
      ))
    ) : (
      <p>Loading....</p>
    )}
        </Table>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Companyprofils