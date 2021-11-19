import Temp from '../verticalCarousal/tempFile';
import data from './data.json';
import './ContactUs.css';
import contact from './Contact us.png';

const ContactUs = () => {
	return (
		<div className='contactUs' id='contactUs'>
			<img src={contact} className='heading_c'/>
			<Temp images={data.images} />
		</div>
	);
};

export default ContactUs;
