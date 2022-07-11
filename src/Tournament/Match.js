import React from "react";
import "./Match.css";
import { useState } from "react";
import teamx from "../asset/Teamx.svg";
import upbtn from "../asset/upbtn.svg";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const [show, setShow] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          My Team
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          My Match
        </button>
      </div>

      <div className="content-tabs">
        
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
        
          <div className="prize-pool">
            <div className="flex-row">
              <img src={teamx} alt="" />
              <div className="data_align">
                <small>Prize Pool</small>
                <strong>25000</strong>
              </div>
            </div>
            <div className="slot-joined">
              <div className="data_align">
                <small>Slots</small>
                <strong>744</strong>
              </div>
              <div className="data_align">
                <small>Joined</small>
                <strong>Rs 45</strong>
              </div>
            </div>
          </div>

          <div className="team_wrapper">
            <div className="data_align">
              <img src={teamx} alt="" />
              <span>₹35 Lakh</span>
            </div>

            <div className="data_align">
              <img src={teamx} alt="" />
              <span>40 Winner</span>
            </div>
            <div className="data_align">
              <img src={teamx} alt="" />
              <span>Upto 6</span>
            </div>
          </div>
        </div>

    
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
        
          <div className="prize-pool">
            <div className="flex-row">
              <img src={teamx} alt="" />
              <div className="data_align">
                <small>Prize Pool</small>
                <strong>₹35 Lakh</strong>
              </div>
            </div>
            <div className="slot-joined">
              <div className="data_align">
                <small>Slots</small>
                <strong>744</strong>
              </div>
              <div className="data_align">
                <small>Joined</small>
                <strong>Rs 45</strong>
              </div>
            </div>
          </div>

          <div className="team_wrapper">
            <div className="data_align">
              <img src={teamx} alt="" />
              <span>₹35 Lakh</span>
            </div>

            <div className="data_align">
              <img src={teamx} alt="" />
              <span>40 Winner</span>
            </div>
            <div className="data_align">
              <img src={teamx} alt="" />
              <span>Upto 6</span>
            </div>
          </div>

          {show ? (
            <table>
              <tr>
                <th>Winnings</th>
                <th>Team</th>
                <th>Score</th>
                <th>Rank</th>
              </tr>
              <tr>
                <td>500</td>
                <td>Ostro</td>
                <td>250</td>
                <td>1</td>
              </tr>
              <tr>
                <td>500</td>
                <td>Ostro</td>
                <td>211</td>
                <td>5</td>
              </tr>
              <tr>
                <td>-</td>
                <td>Ostro</td>
                <td>205</td>
                <td>11</td>
              </tr>
            </table>
          ) : null}
          <button onClick={() => setShow(!show)} className="hide_form-btn">
            You Won 100 <span>Team Joined </span>
            <img src={upbtn} alt="" />
          </button>

          {/* <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
