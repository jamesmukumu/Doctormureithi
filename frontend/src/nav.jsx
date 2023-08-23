import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBars } from "react-icons/fa";

import { AiOutlinePlus } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
 import { useAuth } from "./authorization";
import {FiDelete}  from "react-icons/fi"
import "./nav.css"; 
 import { Link } from "react-router-dom";
 import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()
   const { isAuthenticated } = useAuth();  
  const [imagesdata, setImagesdata] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [loading,setLoading] = useState(true)

  if (!isAuthenticated) {
    navigate('/'); 
     
  }





  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get("http://localhost:5000/allimages");
        if (response.data.message === "All images Found") {
          setImagesdata(response.data.data);
        } else {
          alert("Error");
        }
      } catch (error) {
        setImagesdata([]);
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesdata.length);
    }, 12000);

    return () => {
      clearInterval(timer);
    };
  }, [imagesdata]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  function hidenav(){

    setIsNavOpen(false)
  }

  return (
  <div>   <div>
  {imagesdata.length > 0 && (
    <div className={`image-container ${isNavOpen ? "active" : ""}`}>
      <div className="nav-toggle">
        <FaBars  onClick={toggleNav} className="bars"/>
      
      </div>
      <div className={`nav-container ${isNavOpen ? "active" : ""}`}>
        <ul>
        <FiDelete onClick={hidenav} className="back"/>
          <li>
            <i>
              <AiOutlinePlus />
            </i>
            <Link to='/newpatient' className="t">Add a New patient</Link>
          </li>

          <li>
            <i>
              <AiOutlinePlus />
            </i>
               <Link to='/treatment' className="t">Add a New Treatment</Link>
          </li>
          

          <li>
            <i>
              <FcSearch />
            
            </i>
            <Link to='/firstname' className="t">Find Patient By Firstname:</Link>
          </li>
          <li>
            <i>
              <FcSearch />
              
            </i>
            <Link to='/secondname' className="t">Find Patient By Secondname:</Link>
          </li>

          <li>
            <i>
              <FcSearch />
              
            </i>
            <Link to='/idnumber' className="t">Find Patient By idnumber</Link>
          </li>


          <li>
            <i>
              <FcSearch />
              
            </i>
            <Link to='/allpatients' className="t">See all patients</Link>
          </li>





          <li>
            <i>
              <FcSearch />
              
            </i>
            <Link to='/phonenumber' className="t">Find Patient By Phonenumber</Link>
          </li>












        </ul>
      </div>
      <img
        src={imagesdata[currentIndex].imageUrl}
        alt="Image"
        className="image"
      />
      <p className="image-description">
        {imagesdata[currentIndex].imageDescription}
      </p>
    </div>
  )}
</div></div>
  );
}

export default Navbar;
