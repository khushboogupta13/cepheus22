import React, { useEffect, useState } from 'react';
import './FAQ.css';
import FAQ_LOGO_SVG from './assets/Faq.svg';
import FAQ_BOX from './assets/box.png';
import FAQ_BOTTOM_BOX from './assets/bottom_box.png';
import jQuery from 'jquery';

const Card = ({ que, ans }) => {
	return (
		<div className='_card'>
			<div className='_card-content'>
				<p className="que">{que}</p>
				<p className="ans">{ans}</p>
			</div>
		</div>
	);
};
/* eslint-disable */
const q1 = 'Q1. How to Become a Mechatronics Engineer? Which degree to pursue?';
const a1 = `Many mechatronics engineers start their careers by earning a bachelor’s degree in either mechanical or electrical engineering. They gain knowledge of other engineering disciplines throughout their careers, moving serendipitously toward mechatronics along the way. Though this is a viable path, it isn’t the most efficient way of breaking into the field. You can also start with a bachelor's degree in mechatronics to gain the specific knowledge and skills employers look for when hiring mechatronics engineers. Earning a specialized degree can make it much easier to start your career.`;

const q2 = 'Q2. Is a mechatronics degree worth it or we should go for a focussed program?';
const a2 = `Mechatronics is a multifaceted field. You have to learn about motors, control systems, software development for making things autonomous, sensors and how to use them, electronic components and embedded hardware, along with various other things.  It depends on you, you the type who would be interested in learning a bit about the many fields and choosing one of these to be your 'core'? Or do you want to focus your career on improving the problems available in one field of engineering, without bothering about how a completely unrelated field would perform? 
But mostly companies in India prefer a focussed program more than mechatronics, there are more opportunities for those with focussed degrees.`;

const q3 = 'Q3. Will a mechatronic engineer have a good future in the upcoming 5-10 years?';
const a3 = `Mechatronics leading to robotics and automation is indeed a hot field these days and will surely be one of the top fields in the upcoming years.
Things change quickly in technology, but being a mechatronics engineer gives you a versatile skillset to help adapt. 
`;

const q4 = 'Q4. How to Become a Mechatronics Engineer? Which degree to pursue?';
const a4 = `Many mechatronics engineers start their careers by earning a bachelor’s degree in either mechanical or electrical engineering. They gain knowledge of other engineering disciplines throughout their careers, moving serendipitously toward mechatronics along the way. Though this is a viable path, it isn’t the most efficient way of breaking into the field. You can also start with a bachelor's degree in mechatronics to gain the specific knowledge and skills employers look for when hiring mechatronics engineers. Earning a specialized degree can make it much easier to start your career.`;

const q5 = 'Q5. Can I use the open-source code of someone to enhance my program/model?';
const a5 = `Yes, You can use the open-source code(only the libraries/module), you can not copy past the whole code and you have to clearly mention the source
and also explain the working of the code. Also it is mandatory to include the libraries and functions used in the workshop.`;

const q6 = 'Q6. How I am supposed to submit the code ?';
const a6 = `You have to submit the whole project folder which include the code file's in .ipynb format, along with the images(template), a ReadMe/AboutMe file and game(if possible).`;

const q7 = 'Q7. is it necessary to use Jupyter notebook or can we use other editors also?';
const a7 = `Yes, it is mandatory to use Jupyter Notebook for the submission of your code(file in .ipynb format) for the hackathon.
you can use anaconda navigator, vs-code(Jupyter Notebook extension), google Colab etc...`;

const q8 = 'Q8. Can we use this to play any game we give it?';
const a8 = 'No, as the complexity of the game increases you have to use more advance libraries and code for the same.';

const q9 = 'Q9. What other important applications are there in this field?';
const a9 = `It is currently used in micro biology to detect different patterns in the proteins and genes.`;

const q10 = 'Q10. Is it necessary to watch Squid Game to be able to contest?';
const a10 = `Since all content is being provided, you don't need to watch Squid Game for making a good design, but it will definitely help you make one that's relevant to the theme.`;

const q11 = 'Q11. Can we add content of our own?';
const a11 = 'You must add the content that is already provided. You may improvise when it comes to the optional features part.';

const q12 = 'Q12. Can a person with a basic understanding of Arduino Uno participate?';
const a12 = `Yes, one who is familiar with basic concepts of Arduino, Sensors and communication protocols of arduino can participate.`;

const q13 = 'Q13. Do we have to use any online simulator for designing the circuits?';
const a13 = 'There is no need of any online simulator but if you require then you can use circuitverse, EDA playground or other online/offline VHDL based simulator or any online circuit design simulator.';

const q14 = `Q14. What is FizzBuzz's plagiarism policy?`;
const a14 = 'All the submissions will be checked for plagiarism using a high end plag checker. If any kind of conspiracy is found then it will lead to direct disqualification.';

const q15 = 'Q15. Can we skip one level and go to the next level?';
const a15 = 'No. The next level can be unlocked only when all of the previous levels have been successfully completed. There would be five levels in total.';

const q16 = 'Q16. Name some resources, references and  some softwares for CTF ';
const a16 = `Try to watch Cybermentor videos for web or pwn challenges. Also you can try some pentesting on Tryhackme. You may need debian OS for some questions too. The best option is to do a google search on your queries as Google surfing can provide easiest solutions to all problems. `;

const q17 = "Q17. Do we need any hardware for the workshop?";
const a17 = `No, we’ll be doing it on an online simulation. If you wish to do it on the hardware, you can purchase a micro:bit.`;

const q18 = 'Q18. What tech stacks are allowed in Hackoverflow?';
const a18 = `MERN, MEAN, Flask, Django, React Native, Flutter, Java, Kotlin`;

const faqList = [
	<Card que={q1} ans={a1} />,
	<Card que={q2} ans={a2} />,
	<Card que={q3} ans={a3} />,
	<Card que={q4} ans={a4} />,
	<Card que={q5} ans={a5} />,
	<Card que={q6} ans={a6} />,
	<Card que={q7} ans={a7} />,
	<Card que={q8} ans={a8} />,
	<Card que={q9} ans={a9} />,
	<Card que={q10} ans={a10} />,
	<Card que={q11} ans={a11} />,
	<Card que={q12} ans={a12} />,
	<Card que={q13} ans={a13} />,
	<Card que={q14} ans={a14} />,
	<Card que={q15} ans={a15} />,
];

const Columns = ({ c }) => {
	const cols = [];
	var cd_no = 1;
	let cd = 0;
	if (c == 5) {
		cd = 3;
	} else if (c == 4) {
		cd = 4;
	} else if (c == 3) {
		cd = 5;
	} else if (c == 2) {
		cd = 8;
	} else if (c == 1) {
		cd = 15;
	}
	for (let i = 1; i <= c; i++) {
		const col = [];
		for (let j = 1; j <= cd; j++) {
			if (cd_no > 15) {
				break;
			}
			col.push(faqList[cd_no - 1]);
			cd_no = cd_no + 1;
		}
		cols.push(
			<div className='_column_container' id={'example' + i}>
				<div className='column1' id='col'>
					<div className='_c'>{col}</div>
				</div>
			</div>
		);
	}

	return <React.Fragment>{cols}</React.Fragment>;
};

const FAQ_center = ({ c }) => {
	return (
		<div className='FAQ_center'>
			<div className='_container'>
				<Columns c={c} />
			</div>
		</div>
	);
};
const FAQ = () => {
	const mediaMobileMatch = window.matchMedia('(max-width: 450px)');
	const [mobile, setMobile] = useState(mediaMobileMatch.matches);

	const mediaTab2Match = window.matchMedia('(max-width: 768px)');
	const [tab2, setTab2] = useState(mediaTab2Match.matches);

	const mediaTab3Match = window.matchMedia('(max-width: 1024px)');
	const [tab3, setTab3] = useState(mediaTab3Match.matches);

	const mediaDesk4Match = window.matchMedia('(max-width: 1500px)');
	const [desk4, setDesk4] = useState(mediaDesk4Match.matches);


	useEffect(() => {
		const handlerMobile = (e) => setMobile(e.matches);
		const handlerTab2 = (e) => setTab2(e.matches);
		const handlerTab3 = (e) => setTab3(e.matches);
		const handlerDesk4 = (e) => setDesk4(e.matches);

		mediaMobileMatch.addListener(handlerMobile);
		mediaTab2Match.addListener(handlerTab2);
		mediaTab3Match.addListener(handlerTab3);
		mediaDesk4Match.addListener(handlerDesk4);
		return () => {
			mediaMobileMatch.removeListener(handlerMobile);
			mediaTab2Match.removeListener(handlerTab2);
			mediaTab3Match.removeListener(handlerTab3);
			mediaDesk4Match.removeListener(handlerDesk4);
		};
	}, []);

	useEffect(() => {
		(function ($, undefined) {
			$.fn.loopScroll = function (p_options) {
				var options = $.extend(
					{
						direction: 'upwards',
						speed: 60,
					},
					p_options
				);

				return this.each(function () {
					var obj = $(this).find('.column1');
					var text_height = obj.find('._c').height();
					var start_y, end_y;
					if (options.direction == 'downwards') {
						start_y = -text_height;
						end_y = 0;
					} else if (options.direction == 'upwards') {
						start_y = 0;
						end_y = -text_height;
					}

					var animate = function () {
						// setup animation of specified block "obj"
						// calculate distance of animation
						var distance = Math.abs(end_y - parseInt(obj.css('top')));

						//alert("animate " + obj.css("top") + "-> " + end_y + " " + distance);

						//duration will be distance / speed
						obj.animate(
							{ top: end_y }, //scroll upwards
							(1000 * distance) / options.speed,
							'linear',
							function () {
								// scroll to start position
								obj.css('top', start_y);
								animate();
							}
						);
					};

					obj.find('._c').clone().appendTo(obj);

					if (!desk4) {
						$(this)
							.on('mouseover', function () {
								obj.stop();
							})
							.on('mouseout', function () {
								animate(); // resume animation
							});
					}

					if (desk4) {
						$(this).bind('touchstart', function () {
							obj.stop();
						});
						$(this).bind('touchend', function () {
							animate(); // resume animation
						});
					}
					console.log('obj hobver');
					obj.css('top', start_y);
					animate(); // start animation
				});
			};
		})(jQuery);

		 jQuery('#example1').loopScroll();
		jQuery('#example2').loopScroll({ direction: 'downwards', speed: 120 });
		jQuery('#example3').loopScroll();
		jQuery('#example4').loopScroll({ direction: 'downwards', speed: 120 });
		jQuery('#example5').loopScroll();
	});

	function handler() {
		if (desk4 && !tab3 && !tab2 && !mobile) {
			return <FAQ_center c={4} />;
		}
		if (desk4 && tab3 && !tab2 && !mobile) {
			return <FAQ_center c={3} />;
		}
		if (desk4 && tab3 && tab2 && !mobile) {
			return <FAQ_center c={2} />;
		}
		if (desk4 && tab3 && tab2 && mobile) {
			return <FAQ_center c={1} />;
		}
		if (!desk4 && !tab3 && !tab2 && !mobile) {
			return <FAQ_center c={5} />;
		}
		console.log(desk4, tab3, tab2, mobile);
	}
	return (
		//     <div class="news_container" id="example3">
		// <div class="column1">
		//        <Card />
		//     </div>
		//   </div>
		<div className='FAQ' id='faq'>
			<div className='FAQ_top'>
				<div className='top_wrap'>
					<img
						src={FAQ_LOGO_SVG}
						style={{ width: mobile ? '95%' : '', display: mobile ? 'none' : 'block' }}
						alt='FAQ'
						className='Faq_logo'
					/>
					<img src={FAQ_BOX} alt='FAQ' className='Faq_box' />
				</div>
			</div>

			{handler()}

			<div className='FAQ_bottom'>
				<img src={FAQ_BOTTOM_BOX} alt='FAQ' className='Faq_bottom_box' />
			</div>
		</div>
	);
};

export default FAQ;
