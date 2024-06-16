import { useState } from "react";
import "./Account.css";
import { FaArrowLeft } from "react-icons/fa";

const Account = () => {
  const [showPassword ,setShowPassword] =useState(false);

  const handleTogglePassword =()=>{
        setShowPassword(!showPassword);
  }
  return (
    <div className="myaccount">
      <span className="myshifts_back">
        <FaArrowLeft />
        Back
      </span>
      <h2>My Account</h2>
      <hr />
      <div className="myaccount-container">
        <div className="myaccount-left">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="" />
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder=""/>
          <label htmlFor="">Phone</label>
          <input type="text" placeholder=""/>
          <label htmlFor="">Address</label>
          <input type="text" placeholder="" />
          <label htmlFor="">Gender</label>
          <input type="text" placeholder="" />
          <label htmlFor="">Staff ID</label>
          <input type="text" placeholder="" />

          <button className="logout-myAccount" >
            Logout
          </button>
        </div>
        <div className="myaccount-right">
          <label htmlFor="">Change Password</label>
          <input
            type={showPassword ? "text" : "password"}
            
            
            placeholder="**************"
          />

          <span
            style={{
              display: "inline",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={handleTogglePassword}
          >
            {showPassword ? "🔒" : "👁️"}
          </span>
          <button className="update-myaccount" onClick=''>
            Submit
          </button>
          <p style={{ color: "red", width: "200px" }}></p>
         
            <p style={{ color: "green", width: "200px" }}></p>
        
        </div>
     
      </div>
    </div>
  );
};

export default Account;
