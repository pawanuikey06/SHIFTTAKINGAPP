import {FaArrowLeft} from 'react-icons/fa'
import { useState } from 'react';
import './report.css'

const Report = () => {
  const [other, setOther] = useState(false);
  const handleOther = () => {
    setOther(!other);
  };
  return (
    <div className='report'>
      <span className="myshifts_back">
        <FaArrowLeft/> Back
      </span>
      <h2 className="report-header">Report Incidence</h2>
      <label htmlFor="">Date of Incidence</label>
      <input type="text" placeholder='01/01/2024' name='date'/>
      <label htmlFor="">Time of Incidence</label>
      <input type="text" placeholder='08:00 AM' name='time' />
      <label htmlFor="">Location(e.g, Kitchen ,Lounge etc)</label>
      <input type="text" placeholder='Kitchen' name='loction' />
      <label htmlFor="">Person completing this form</label>
      <input type="text" placeholder='Pawan Uikey' name="personCompletingForm"  />
      <label htmlFor="">Address of Location</label>
      <input type="text" placeholder='indore,M.P.' name='addressOfLocation' />
      <label htmlFor="">Person Affected in the incidence</label>
      <input type="text" placeholder='John Doe' name='personAffected' />
      <label htmlFor="">
        Were there other person(s) present(witness) at this time of incident?
        Yes, or No ?
      </label>
      <span>Yes</span>
      <input type="checkbox" onClick={handleOther}/>
      <span>No</span>
      <input type="checkbox" />
      <span>If you ticked Yes for the above question,please provide</span>
      <span>Name(s) and contact number(s)</span>
      {other && <div className="other-people">
        <label htmlFor="">Person 1</label>
        <input type="text " placeholder='Ravi Bhatt' name='person1'/>
        <input type="text" placeholder='22432354664' name='phon1' />
        <label htmlFor="">Person 2</label>
        <input type="text " placeholder='Kartik Singh' name='person2'/>
        <input type="text" placeholder='6756334784' name='phon2' />
        <label htmlFor="">Person 3</label>
        <input type="text " placeholder='Jamuna Bai' name='person3'/>
        <input type="text" placeholder='45456435566' name='phon3' />
        </div>}
        <label htmlFor="">Who was injured(if anyone)</label>
      <input
        type="text"
        placeholder="James Rock"
        name="personInjured"
        
      />
      <label htmlFor="">Type of incident:</label>
      <span>Act of violence</span>
      <input
        type="checkbox"
        
      />
      <span>Property Damage</span>
      <input
        type="checkbox"
       
      />
      <span>Accident</span>
      <input type="checkbox"  />
      <span>Behavioural</span>
      <input
        type="checkbox"
      
      />
      <span>Other</span>
      <input type="checkbox"   />
      <label htmlFor="">Details of Incident</label>
      <textarea
        id=""
        cols="30"
        rows="10"
        placeholder="Describe what happened before the incident."
        name="whatHappened"
      
      ></textarea>
      <textarea
        name="actualIncident"
   
        id=""
        cols="30"
        rows="10"
        placeholder="Describe actual Incident/ Behaviour/ Event"
      ></textarea>
      <textarea
        name="afterIncident"
        
        id=""
        cols="30"
        rows="10"
        placeholder="What happened after incident, detail your actions?"
      ></textarea>
      <label htmlFor="">Report by:</label>
      <input type="text" name="reportBy"  />
      <label htmlFor="">Date of report:</label>
      <input type="text" name="dateOfReport"  />
      <label htmlFor="">Title/ Role of person reporting:</label>
      <input type="text" name="roleOfPerson"  />
      <button className="report_btn" >
        Submit
      </button>
  
      
    </div>
  )
}

export default Report