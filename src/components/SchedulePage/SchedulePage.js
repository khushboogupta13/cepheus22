import React, { useEffect, useState, useRef } from 'react';
import './SchedulePage.css';
import Sche from './assets/Sche.svg';
import Dule from './assets/Dule.svg';
import talkIcon from './assets/Talk icon.svg';
import competeIcon from './assets/Compitition icon.svg';
import workshopIcon from './assets/workshop icon.svg';

const events = [
	{ name: 'CTF', icon: competeIcon, date: 7, start_time: '10:00 AM', end_time: '9:00 PM', id: 1 },
	{ name: 'Bridge Builder', icon: competeIcon, date: 7, start_time: '10:00 AM', end_time: '9:00 PM', id: 2 },
	{ name: 'DSC Template', icon: workshopIcon, date: 7, start_time: '11:00 AM', end_time: '1:00 PM', id: 3 },
	{ name: 'Treasure Hunt', icon: competeIcon, date: 7, start_time: '1:00 PM', end_time: '9:00 PM', id: 4 },
  { name: 'Arduino\'s Trail', icon: competeIcon, date: 7, start_time: '2:00 PM', end_time: '4:00 PM', id: 5 },
	{ name: 'Hackoverflow', icon: competeIcon, date: 7, start_time: '3:00 PM', end_time: '9:00 PM', id: 6 },
  { name: 'Opening Ceremony', icon: talkIcon, date: 7, start_time: '5:00 PM', end_time: '7:00 PM', id: 7 },
  { name: 'Fizzbuzz', icon: competeIcon, date: 7, start_time: '7:00 PM', end_time: '9:00 PM', id: 8 },
  { name: 'CTF', icon: competeIcon, date: 8, start_time: '10:00 AM', end_time: '9:00 PM', id: 9 },
	{ name: 'Bridge Builder', icon: competeIcon, date: 8, start_time: '10:00 AM', end_time: '9:00 PM', id: 10 },
  { name: 'Hackoverflow', icon: competeIcon, date: 8, start_time: '10:00 AM', end_time: '1:00 PM', id: 11 },
  { name: 'Treasure Hunt', icon: competeIcon, date: 7, start_time: '10:00 AM', end_time: '3:00 PM', id: 12 },
  { name: 'Circuital Dilemma', icon: competeIcon, date: 8, start_time: '10:00 AM', end_time: '9:00 PM', id: 13 },
  { name: 'Arduino\'s Trail', icon: competeIcon, date: 8, start_time: '10:00 AM', end_time: '9:00 PM', id: 14 },
  { name: 'EnR Talk', icon: talkIcon, date: 8, start_time: '12:00 PM', end_time: '1:00 PM', id: 15 },
  { name: 'IEEE', icon: workshopIcon, date: 8, start_time: '1:00 PM', end_time: '3:00 PM', id: 16 },
  { name: 'DSC Template', icon: workshopIcon, date: 8, start_time: '1:00 PM', end_time: '9:00 PM', id: 17 },
  { name: 'Design Event', icon: competeIcon, date: 8, start_time: '3:00 PM', end_time: '7:00 PM', id: 18 },
  { name: 'Fizzbuzz', icon: competeIcon, date: 8, start_time: '7:00 PM', end_time: '9:00 PM', id: 19 },
  { name: 'CTF', icon: competeIcon, date: 9, start_time: '10:00 AM', end_time: '9:00 PM', id: 20 },
  { name: 'Bridge Builder', icon: competeIcon, date: 9, start_time: '10:00 AM', end_time: '9:00 PM', id: 21 },
  { name: 'Circuital Dilemma', icon: competeIcon, date: 9, start_time: '10:00 AM', end_time: '12:00 PM', id: 22 },
  { name: 'DSC Template', icon: workshopIcon, date: 9, start_time: '10:00 AM', end_time: '1:00 PM', id: 23 },
  { name: 'DTU', icon: workshopIcon, date: 9, start_time: '10:00 AM', end_time: '1:00 PM', id: 24 },
  { name: 'Infosec Talk', icon: talkIcon, date: 9, start_time: '1:00 PM', end_time: '2:00 PM', id: 25 },
  { name: 'Bash', icon: workshopIcon, date: 9, start_time: '2:00 PM', end_time: '4:00 PM', id: 26 },
  { name: 'Fizzbuzz', icon: competeIcon, date: 9, start_time: '4:00 PM', end_time: '7:00 PM', id: 27 },
  { name: 'MDash Talk', icon: talkIcon, date: 9, start_time: '5:00 PM', end_time: '7:00 PM', id: 28 },
];

const Calander = ({callback, date}) => (
  <div className='sch_calander'>
    <div className='cal_title'>January 2022</div>
    <div className='cal_dates'>
      M &nbsp; &nbsp;T &nbsp;&nbsp; W &nbsp;&nbsp; T &nbsp; &nbsp; F &nbsp;&nbsp; S &nbsp; &nbsp;S <br /><br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; 1 &nbsp; &nbsp; 2 <br /><br />
      3&nbsp; &nbsp; 4 &nbsp; &nbsp; 5 &nbsp; &nbsp;6 &nbsp; &nbsp;
      <span className='cepheus_dates'>
        <span onClick={() => callback(7)} className={date === 7 ? 'active' : null}>
          &nbsp;7&nbsp;
        </span>
        &nbsp;&nbsp;
        <span onClick={() => callback(8)} className={date === 8 ? 'active' : null}>
          &nbsp;8&nbsp;
        </span>
        &nbsp;&nbsp;
        <span onClick={() => callback(9)} className={date === 9 ? 'active' : null}>
          &nbsp;9&nbsp;
        </span>
      </span>
      <br /><br />
      10 &nbsp; &nbsp;11 &nbsp; &nbsp;12 &nbsp; &nbsp;13 &nbsp; &nbsp;14 &nbsp;&nbsp; 15 &nbsp; &nbsp;16 <br /><br />
      17 &nbsp; &nbsp;18 &nbsp; 19 &nbsp; 20 &nbsp; 21 &nbsp; 22 &nbsp; 23 <br /><br />
      24 &nbsp;25&nbsp;26 &nbsp;27 &nbsp;28 &nbsp; 29 &nbsp; 30 <br /><br />
      31
    </div>
  </div>
) 

const EventList = ({date}) => (
  <table className="sch_events">
    {events.filter(event => event.date == date).map(event => (
      <tr className="sch_event">
        <td><img src={event.icon} alt='' /></td>
        <td className="sch_event_name">{event.name}</td>
        <td className="sch_event_start">{event.start_time}</td>
        <td className="sch_timeline"></td>
        <td className="sch_event_end">{event.end_time}</td>
      </tr>
    ))}
  </table>
) 

const SchedulePage = () => {
	const [date, setDate] = useState(7);
	const [animate, setAnimate] = useState(false);
	const targetRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				setAnimate(entry.isIntersecting);
			},
			{ root: null, rootMargin: '0px', threshold: 0.1 }
		);
		const target = targetRef.current;
		if (target) observer.observe(target);
		return () => {
			if (target) observer.unobserve(target);
		};
	}, [targetRef]);

	return (
    <div className="schedule" id="schedule">
      <div className="sch_desktop">
        <div className='menubar_space'></div>
        <div className='sch_body' ref={targetRef}>
          <div className='sch_left'>
            <img src={Sche} alt='Sche' className='sche' />
            <Calander callback={x => setDate(x)} date={date} />
          </div>
          <div className={animate ? 'sch_right animate' : 'sch_right'}>
            <img src={Dule} alt='dche' className='dule' />
            <EventList date={date} />
          </div>
        </div>
      </div>
      <div className="sch_mobile">
        <div className="schm_calander">
          <Calander callback={x => setDate(x)} date={date} />
        </div>
        <div className="schm_events">
          <EventList date={date} />
        </div>
      </div>
    </div>
	);
};

export default SchedulePage;
