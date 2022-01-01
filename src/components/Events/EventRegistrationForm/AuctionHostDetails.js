import axios from "axios";
import React,{ useState} from "react";
import toast from "react-hot-toast";

import classes from "./AuctionHostDetails.module.css";


const AuctionHostDetails = (props) => {
  const teamSize = props.teamSize;
  const event_id = props.eventId;
  const [member1, setMember1] = useState('');
  const [member2, setMember2] = useState('');
  const [member3, setMember3] = useState('');

  const playerIdInput = [
    <div className={classes.input}>
        <label htmlFor={`playerid2`}> <p>Player</p> <p>ID 2:</p> </label>
        <input id={`playerid2`} type="text" placeholder="88888888" value={member1} onChange={(e) => setMember1(e.target.value)} />
    </div>,
    <div className={classes.input}>
      <label htmlFor={`playerid3`}> <p>Player</p> <p>ID 3:</p> </label>
      <input id={`playerid3`} type="text" placeholder="88888888" value={member2} onChange={(e) => setMember2(e.target.value)} />
    </div>,
    <div className={classes.input}>
      <label htmlFor={`playerid4`}>  <p>Player</p> <p>ID 4:</p> </label>
      <input id={`playerid4`} type="text" placeholder="88888888" value={member3} onChange={(e) => setMember3(e.target.value)} />
    </div>,
  ];
  const playersDetails = [];
  for (var i = 0; i < teamSize-1; i++) {    
    playersDetails.push(playerIdInput[i]);
  }
  const myPlayerId = localStorage.getItem("id");
  const [teamName, setTeamName] = useState('');

  const registerEventHandler = async() => {

    console.log("teamName: " + teamName);
    console.log('member1', member1);
    console.log('member2', member2);
    console.log('member3', member3);

      
    if(teamSize == 1){
      await axios.post(process.env.React_App_Backend_url+"solo/register",
      {
        event_id: event_id
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: myPlayerId,
        },
      }
      ).then((res) => {
        if(res.status === 201){
          console.log("successfully solo registration");
          toast.success("Successfully registered!!")
        }
      }).catch((err) => {
        if(!err.response){
          return toast.error("Network error");
        }
          toast.error(err.response.data.message? err.response.data.message : "Error! Try again")
      });
    } 
    else if(teamSize > 1){
      var members = [myPlayerId];

      if(teamSize === 2){
        if(member1){
          members.push(member1);
        }
      } else if(teamSize === 3){
          if(member1){
            members.push(member1);
          }
          if(member2){
            members.push(member2);
          }
      } else if(teamSize === 4){
          if(member1){
            members.push(member1);
          }
          if(member2){
            members.push(member2);
          }
          if(member3){
            members.push(member3);
          }
      } 

      if(!teamName){
        return toast.error("Please enter a team name!")
      }
      console.log("members: " ,members)

      axios.post(process.env.React_App_Backend_url+"team/register",
        {
            team_name: teamName,
            event_id: event_id,
            leader_id: myPlayerId,
            members: members
        },
        {
          headers: {
            "content-type": "application/json",
             Authorization: myPlayerId,             
          }
        }
      ).then((res) => {
        if(res.status === 201) {
          console.log("success team register");
          toast.success("successfully registerd!!")
        }
      }).catch((err) => {
        if(!err.response){
          return toast.error("Network error");
        }
        toast.error(err.response.data.message? err.response.data.message : "Error! Try again");
      });
      
    }
  }
  return (
    <div className={classes.form_container}>
      <form>
        <h2 className={classes.event_title}>{`${props.eventName}`}</h2>
        <h2 className={classes.event_title}>Registration Form</h2>
        <hr className={classes.bline} />
        {teamSize > 1 ? 
          <div>
              <div className={classes.input}>
                <label htmlFor="teamName">Team Name:</label>
                <input id="teamName" type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)}/>
              </div>
          </div>
           : 
          <></>
        }
        <div className={classes.input}>
          <label htmlFor="playerid1">Player ID 1:</label>
          <input id="playerid1" type="text" value={myPlayerId} readOnly />
        </div>
        {playersDetails}
        <hr className={classes.bline} />
        <h5 className={classes.confmsg}>Are you sure you want to register?</h5>
        <div className={classes.btn_container}>
          <div className={classes.yes_btn}  onClick={registerEventHandler}>
            O
          </div>
          <div className={classes.no_btn} onClick={props.onCloseForm}>
            X
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuctionHostDetails;
