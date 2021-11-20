import React, { useEffect, useState, useRef } from 'react';
import './SchedulePage.css';
import Sche from './assets/Sche.svg';
import Dule from './assets/Dule.svg';
import talkIcon from './assets/Talk icon.svg';
import competeIcon from './assets/Compitition icon.svg';
import workshopIcon from './assets/workshop icon.svg';

const events = [
	{ name: 'event1', icon: talkIcon, date: 7, start_time: '9:00 PM', end_time: '11:00 PM', id: 1 },
	{ name: 'event1', icon: competeIcon, date: 7, start_time: '9:00 PM', end_time: '11:00 PM', id: 2 },
	{ name: 'event1', icon: workshopIcon, date: 7, start_time: '9:00 PM', end_time: '11:00 PM', id: 3 },
	{ name: 'event1', icon: competeIcon, date: 7, start_time: '9:00 PM', end_time: '11:00 PM', id: 4 },
	{ name: 'event1', icon: workshopIcon, date: 7, start_time: '9:00 PM', end_time: '11:00 PM', id: 5 },
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
  <div className='sch_events'>
    {events
      .filter((event) => event.date === date)
      .map((event) => (
        <div className='sch_event' key={event.id}>
          <img src={event.icon} alt='' />
          {event.name} &nbsp; &nbsp; 
          {event.start_time} &nbsp; &nbsp; &nbsp; &nbsp;
          {event.end_time}
        </div>
      ))}
  </div>
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
			{ root: null, rootMargin: '0px' }
		);
		const target = targetRef.current;
		if (target) observer.observe(target);
		return () => {
			if (target) observer.unobserve(target);
		};
	}, [targetRef]);

	return (
    <div className="schedule" id="schedule">
      <div className="sch_desktop" ref={targetRef}>
        <div className='menubar_space'></div>
        <div className='sch_body'>
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
        <div className="schm_title">
          Schedule
        </div>
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
