import React,{useState, useEffect} from 'react';
import "./Profile.css" 
import CopyIcon from './copy.png';

const Profile = () => {
    const playerId = "13w2iebdsoi9";
    const [copy,setCopy] = useState(false);

    function copyControlFunction() {
        const timer = setTimeout(() => setCopy(false), 3000);
        return () => clearTimeout(timer);
    }

        
      

    return(
        <div className="profile">
            <div className="playerIdContainer">
                <p className="playerIDText">Player  ID:</p>
                <div className="playerId">
                    <p>{playerId}</p>
                    <img onClick={() => {
                        navigator.clipboard.writeText(playerId);
                        setCopy(true);
                        copyControlFunction();
                        }} src={CopyIcon} className="copyIcon" alt="copy" />
                    <div className="copyText" >
                        { !copy && <p>Copy</p> }
                        { copy && <p>Copied</p> }
                    </div>
                </div>
            </div>
            <div className="myEventsText">
                <p>My Events</p>
            </div>
            <div className="registeredEventsWrapper">
              <div className="registeredEvents">
                <div className="eventCard">
                    <img src="https://techfest.org/2021/workshops/cyberethical.jpg" alt="" />
                    <div className="eventInfo">
                        <h2>EventName</h2>
                    </div>
                </div>

                <div className="eventCard">
                    <img src="https://techfest.org/2021/workshops/cyberethical.jpg" alt="" />
                    <div className="eventInfo">
                        <h2>EventName</h2>
                    </div>
                </div>

                <div className="eventCard">
                    <img src="https://techfest.org/2021/workshops/cyberethical.jpg" alt="" />
                    <div className="eventInfo">
                        <h2>EventName</h2>
                    </div>
                </div>

                <div className="eventCard">
                    <img src="https://techfest.org/2021/workshops/cyberethical.jpg" alt="" />
                    <div className="eventInfo">
                        <h2>EventName</h2>
                    </div>
                </div>

                <div className="eventCard">
                    <img src="https://techfest.org/2021/workshops/cyberethical.jpg" alt="" />
                    <div className="eventInfo">
                        <h2>EventName</h2>
                    </div>
                </div>
                
            </div>
           </div>
        </div>
    );
}

export default Profile;