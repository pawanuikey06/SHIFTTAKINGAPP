import './Myshifts.css'
import { FaArrowLeft } from "react-icons/fa";

const Myshifts = () => {
  
  return (
    <div className="myshifts">
      <span className="myshift_back">
        <FaArrowLeft />
        Back
      </span>
      <div className="myshifts_top">
        <span className="myshifts_header">Name :Pawan Uikey</span>
        <span className="myshifts_header">All/PastShifts</span>
      </div>
      
        
      
    </div>
  );
};

export default Myshifts;
