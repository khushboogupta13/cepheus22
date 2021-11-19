import React, {useEffect, useState, useRef} from "react"
import "./SchedulePage.css"
import Sche from "./assets/Sche.svg"
import Dule from "./assets/Dule.svg"
import talkIcon from "./assets/Talk icon.svg"
import competeIcon from "./assets/Compitition icon.svg"
import workshopIcon from "./assets/workshop icon.svg"

const events = [
{name: "event1", icon: talkIcon, date: 3, start_time: "9:00 PM", end_time: "11:00 PM", id: 1},
{name: "event1", icon: competeIcon, date: 3, start_time: "9:00 PM", end_time: "11:00 PM", id: 2},
{name: "event1", icon: workshopIcon, date: 3, start_time: "9:00 PM", end_time: "11:00 PM", id: 3},
{name: "event1", icon: competeIcon, date: 3, start_time: "9:00 PM", end_time: "11:00 PM", id: 4},
{name: "event1", icon: workshopIcon, date: 3, start_time: "9:00 PM", end_time: "11:00 PM", id: 5}]

const SchedulePage = () => {
  const [date, setDate] = useState(3)
  const [animate, setAnimate] = useState(false)
  const targetRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries
      setAnimate(entry.isIntersecting)
    }, {root: null, rootMargin: '0px'})
    const target = targetRef.current
    if(target)
      observer.observe(target)
    return () => {
      if(target)
        observer.unobserve(target)
    }
  }, [targetRef])

  return (
    <div className="schedule" id="schedule" ref={targetRef}>
      <div className="menubar_space"></div>
      <div className="sch_body">
        <div className="sch_left">
          <img src={Sche} alt="Sche" className="sche" />
          <div className="sch_calander">
            <div className="cal_title">
              January 2022
            </div>
            <div className="cal_dates">
              S &nbsp; &nbsp;M &nbsp; &nbsp;T &nbsp;&nbsp; W &nbsp;&nbsp; T &nbsp; &nbsp; F &nbsp;&nbsp; S <br /><br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 <br /><br />
              2 &nbsp;&nbsp;
              <span className="cepheus_dates">
                <span onClick={() => setDate(3)} className={date === 3 ? "active" : null}>&nbsp;3&nbsp;</span> &nbsp; 
                <span onClick={() => setDate(4)} className={date === 4 ? "active" : null}>&nbsp;4&nbsp;</span> &nbsp;&nbsp;
                <span onClick={() => setDate(5)} className={date === 5 ? "active" : null}>&nbsp;5&nbsp;</span> 
              </span>
              &nbsp; &nbsp;6 &nbsp; &nbsp;7  &nbsp; &nbsp;8 <br /><br />
              9 &nbsp; &nbsp;10 &nbsp; &nbsp; 11 &nbsp; &nbsp;12 &nbsp; &nbsp;13 &nbsp; &nbsp;14 &nbsp; 15 <br /><br />
              16 &nbsp; &nbsp;17 &nbsp; &nbsp;18 &nbsp; &nbsp;19 &nbsp; 20 &nbsp; 21 &nbsp; 22 <br /><br />
              23 &nbsp;24 &nbsp;25 &nbsp;26 &nbsp;27 &nbsp;28 &nbsp; 29 <br /><br />
              30 &nbsp; 31
            </div>
          </div>
        </div>
        <div className={animate ? "sch_right animate" : "sch_right"}>
          <img src={Dule} alt="dche" className="dule" />
          <div className="sch_events">
            {events.filter(event => event.date === date).map(event => 
              <div className="sch_event" key={event.id}>
                <img src={event.icon} alt="event" />
                {event.name} &nbsp; &nbsp; &nbsp; &nbsp;
                {event.start_time} &nbsp; &nbsp; &nbsp; &nbsp;
                {event.end_time} 
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage;