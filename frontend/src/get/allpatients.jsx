import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Allpatients() {
  const [clientdata, setClientdata] = useState([]);

  useEffect(() => {
    async function Getallpatients() {
      try {
        const response = await axios.get('http://localhost:5000/allpatients');
        if (response.data.message === 'found') {
          setClientdata(response.data.data);
        } else {
          setClientdata('Couldnt fetch all patients');
        }
      } catch (error) {
        setClientdata('Internal Server Error');
      }
    }

    Getallpatients();
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Secondname</th>
            <th>Phone Number</th>
            <th>Residence</th>
            <th>CreatedAt</th>
            <th>Age</th>
            <th>idNumber</th>
            <th>alternativephonenumber</th>
            <th>Symptom</th>
            <th>labtest</th>
            <th>labtestdesc</th>
            <th>Cause</th>
            <th>MedicineGiven</th>
            <th>Duration of sickness</th>
          </tr>
        </thead>

        <tbody>
          {clientdata.map((item) => (
            <tr>
              <td>{item.Firstname}</td>
              <td>{item.Secondname}</td>
              <td>{item.phonenumber}</td>
              <td>{item.residence}</td>
              <td>{item.createdAt}</td>
              <td>{item.age}</td>
              <td>{item.idNumber}</td>
              <td>{item.alternativephoneNumber}</td>
              
              <td>{item.treatments.symptom[0]}</td>
                
              <td>{item.treatments.labtest}</td>
              <td>{item.treatments.labtestdesc}</td>
              <td>{item.treatments.cause}</td>
              <td>{item.treatments.medicationOffered}</td>
                
              <td>{item.treatments.durationofSickness}</td>
                
          
                
             
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/navigation'>Back</Link>
    </div>
  );
}

export default Allpatients;
