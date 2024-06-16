import "./Shift.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const Shift = () => {
  return (
    <div className="shift-container">
      <div className="shift">
        <span className="myshifts_back">
          <FaArrowLeft />
          Back
        </span>

        <div className="shift_details">
          <ul>
            <li>
              <strong>ID:</strong>
              2i92349jnjncj
            </li>
            <li>
              <strong>Location:</strong>
              Raipur CG
            </li>
            <li>
              <strong>Date and Time :</strong>
              12 March 2023, 10pm
            </li>
            <li>
              <strong>Type:</strong>
              AM
            </li>
            <li>
              <strong>Duration:</strong> 3 hours
            </li>
            <li>
              <strong>Client :</strong>
              Kirti
            </li>
            <li>
              <strong>Status:</strong>
              Pending
            </li>
            <li>
              <strong>Notes:</strong>
              Make sure to clean the room.
            </li>
          </ul>
          <div className="distance">
            <strong>Distance Covered</strong>
            <input type="number" placeholder="10" />
            <div className="distance-update">
              <span>km</span>
              <button className="update-distance">Update</button>
            </div>
          </div>
        </div>
        <div className="shift_casenotes">
          <table>
              <tr>
                <th>Date/Time</th>
                <th>Case</th>
                <th>Notes</th>
              </tr>
              <tr>
                <td>3/27/2024, 3:30:13</td>
                <td>Violence</td>
                <td>Violence occurred between the client</td>
              </tr>
          </table>
          <div className="add_casenotes">
            <span>ADD CASE NOTES</span>
            <FaPlus className="add_casenotes_icon"/>
          </div>
          <div className="casenotes_inputs">
            <label>Case</label>
            <input type="text" />
            <label>Notes</label>
            <textarea cols="30" rows="10"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="shift_report_btn">Report</button>
        <div className="clockin_out">
          <button className="shift_clockin_btn">Clockin</button>
          <button className="shift_clockout_btn">ClockOut</button>
        </div>
      </div>
    </div>
  );
};

export default Shift;
