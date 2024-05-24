import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Userquerys = () => {
  const [Profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Getuserquerys = async () => {
    try {
      const Getprofile = await axios.get('http://localhost:5000/userquerys/Getquery');
      console.log("User profile information", Getprofile);
      return Getprofile.data;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  };

  useEffect(() => {
    async function getdata() {
      try {
        const profilData = await Getuserquerys();
        setProfile(profilData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getdata();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Sidebar />
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
          <tbody>
            {Profile && Profile.length > 0 ? (
              Profile.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.Username}</td>
                  <td>{item.Email}</td>
                  <td>{item.Subject}</td>
                  <td>{item.Message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No queries found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Userquerys;
