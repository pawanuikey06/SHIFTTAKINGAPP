import { useState } from "react";
import "./Staff.css";
import { FaUser } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Staff = () => {
  const [profile, setProfile] = useState(false);
  const handleProfile = () => {
    setProfile(!profile);
  };
  return (
    <div className="staff">
      <div className="stafftop">
        <span className="staff_shifts">All Shifts</span>
        <div className="staff_profile">
          <FaUser className="profile_icon" />
          <span className="staff_name" onClick={handleProfile}>
            Bhagat Singh
          </span>
          {profile && (
            <div className="staff_account">
              <Link to="/myaccount"><span>My Account</span></Link>
              
              <span>My Statements</span>
              <Link to='/myshifts'><span>My Shifts</span></Link>
              <span>Report Incidence</span>
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
      <div className="staff_main">
        <h3 className="shift_header">My shifts</h3>
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>17 Friday</span>
          </div>
          <div className="staff_main_card_info">
            <span className="shift-location-time">jchdjhBDyyk nkljhhuh</span>
            <span>Duration : 10hours</span>
          </div>
          <div className="shift_status">
            <span>Pending</span>
          </div>
          <div className="staff_main_card_options">
            <AiOutlineEye size={25} />
          </div>
        </div>
        <h3 className="shift_header">Bid Shifts</h3>
        <div className="staff_main_card_unassigned">
          <div className="staff_main_card_date">
            <span>FRI 12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
