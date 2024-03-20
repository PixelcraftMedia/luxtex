import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import CartIconmob from "./cart/CartIconmob";
import { useState } from 'react';
import profilePic from '../../public/logo.png'
import Image from 'next/image'
import { useAuth } from './login-function/hooks';
const Nav = () => {
	const { isLoggedIn } = useAuth();
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);
	
	const questionsAnswers = [
			
	  {
		id: 2,
		  title: "З БЯЗІ",
		  subone:"півтораспальні",
		  subtwo:"двоспальний",
		  subevro:"євро",
		  subfamily:"сімейний",
		linkhome:"/",
		linkprof:"",
		linkarticle:"/",
		linkhomepage:"/category/${'postilna-bilyzna-z-byazi'}"
	  },
	  {
		id: 3,
		title: "З РАНФОРСУ",
		subone:"півтораспальні",
		subtwo:"двоспальний",
		subevro:"євро",
		subfamily:"сімейний",
	  linkhome:"/",
	  linkprof:"",
	  linkarticle:"/",
	  linkhomepage:"/category/${'postilna-bilyzna-ranfors'}"
	  },
	  {
		id:4,
		  title: "З САТИНУ",
		  subone:"півтораспальні",
		  subtwo:"двоспальний",
		  subevro:"євро",
		  subfamily:"сімейний",
		linkhome:"/",
		linkprof:"",
		linkarticle:"/",
		linkhomepage:"/category/${'postilna-bilyzna-strayp-satyn'}"
	  },
	  {
		id:5,
		  title: "ДИТЯЧІ",
		  subone:"півтораспальні",
		
		linkhome:"/",
		linkprof:"",
		linkarticle:"/",
		linkhomepage:"/category/${'dytyacha-postilna-bilyzna'}"
	  },
	  {
		id: 6,
		  title: "ТЕКСТИЛЬ",
		  subone:"простирадла на резинці",
		  subtwo:"Покривала",
		  subevro:"Рушники",
		  subfamily:"Текстиль для готелів",
		linkhome:"/",
		linkprof:"",
		linkarticle:"/",
		linkhomepage:"/category/${'kovdry-ta-podushky'}"
	  },
	  
	  {
		id: 7,
		title: "ІНФОРМАЦІЯ",
		subone:"ДОСТАВКА І ОПЛАТА",
		subtwo:"ОБМІН ТА ПОВЕРНЕННЯ",
		subevro:"ПРО НАС",
	
	  linkhome:"/",
	  linkprof:"",
	  linkarticle:"/",
	  linkhomepage:"/category/${'kovdry-ta-podushky'}"
		
	  },
	  {
		id: 8,
		title: "ККОНТАКТИ",
		  linkhome:"",
		  linkprof:"",
		  linkarticle:"",
		  linkhomepage:"",
		  item:"",
		  linkhomepage:"/category/${'kovdry-ta-podushky'}"
	  }
	
	];
	const questionsAnswersLog = [
			
		{
			id: 2,
			  title: "З БЯЗІ",
			  subone:"півтораспальні",
			  subtwo:"двоспальний",
			  subevro:"євро",
			  subfamily:"сімейний",
			linkhome:"/",
			linkprof:"",
			linkarticle:"/",
			linkhomepage:"/category/${'postilna-bilyzna-z-byazi'}"
		  },
		  {
			id: 3,
			title: "З РАНФОРСУ",
			subone:"півтораспальні",
			subtwo:"двоспальний",
			subevro:"євро",
			subfamily:"сімейний",
		  linkhome:"/",
		  linkprof:"",
		  linkarticle:"/",
		  linkhomepage:"/category/${'postilna-bilyzna-ranfors'}"
		  },
		  {
			id:4,
			  title: "З САТИНУ",
			  subone:"півтораспальні",
			  subtwo:"двоспальний",
			  subevro:"євро",
			  subfamily:"сімейний",
			linkhome:"/",
			linkprof:"",
			linkarticle:"/",
			linkhomepage:"/category/${'postilna-bilyzna-strayp-satyn'}"
		  },
		  {
			id:5,
			  title: "ДИТЯЧІ",
			  subone:"півтораспальні",
			
			linkhome:"/",
			linkprof:"",
			linkarticle:"/",
			linkhomepage:"/category/${'dytyacha-postilna-bilyzna'}"
		  },
		  {
			id: 6,
			  title: "ТЕКСТИЛЬ",
			  subone:"простирадла на резинці",
			  subtwo:"Покривала",
			  subevro:"Рушники",
			  subfamily:"Текстиль для готелів",
			linkhome:"/",
			linkprof:"",
			linkarticle:"/",
			linkhomepage:"/category/${'kovdry-ta-podushky'}"
		  },
		  
		  {
			id: 7,
			title: "ІНФОРМАЦІЯ",
			subone:"ДОСТАВКА І ОПЛАТА",
			subtwo:"ОБМІН ТА ПОВЕРНЕННЯ",
			subevro:"ПРО НАС",
		
		  linkhome:"/",
		  linkprof:"",
		  linkarticle:"/",
		  linkhomepage:"/category/${'kovdry-ta-podushky'}"
			
		  },
		  {
			id: 8,
			  title: "ККОНТАКТИ",
			  linkhome:"",
			  linkprof:"",
			  linkarticle:"",
			  linkhomepage:"",
			  item:"",
			  linkhomepage:"/category/${'kovdry-ta-podushky'}"
		  }
	  
	  ];
	const Data = isLoggedIn ? questionsAnswersLog : questionsAnswers
	const renderedQuestionsAnswers = Data.map((item, index) => {
		const showDescription = index === activeIndex ? "show-description" : "";
		const fontWeightBold = index === activeIndex ? "font-light " : "";
		
		const ariaExpanded = index === activeIndex ? "false" : "true";
		return (
			
			
			
			<li  key={item.id}
					aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold} `}
	
		onClick={() => {
			setActiveIndex(index);
		  }}>
					<a className="block">
					{item.title	}<span className="caret ml-6"></span>
				</a>
				
					<ul id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className="">
						<li className="block">
						{item.subone && item.subone !== "" && (		<Link href={item.linkhomepage	}>
								<a className={`hidden ${showDescription}`}>
								{item.subone}
								</a>
							</Link>)}
						<Link href={item.linkprof	}>
								<a className={`${ item.linkprof === "" ? 'hidden' : `hidden ${showDescription}`}`}>
								{item.subtwo}
								</a>
							</Link>
							{item.subtwo && item.subtwo !== "" && (
							<Link href={item.linkhome	}>
								<a className={`${ item.linkhome === "" ? 'hidden' : `hidden ${showDescription}`}`}>
								{item.subtwo}
								</a>
							</Link>)}
							{item.subevro && item.subevro !== "" && (
							<Link  href={item.linkarticle	}>
								<a className={`${ item.linkarticle === "" ? 'hidden' : `hidden ${showDescription}`}`} >
							{item.subevro}
								</a>
							</Link>)}
							{item.subfamily && item.subfamily !== "" && (		<Link  href={item.linkarticle	}>
								<a className={`${ item.linkarticle === "" ? 'hidden' : `hidden ${showDescription}`}`} >
							{item.subfamily}
								</a>
							</Link>)}
						</li>
						
						
					</ul>
					
					</li>
			
			
				
				
			
		
		);
	  });
	  const renderedQuestionsAnswersDesctop = Data.map((item, index) => {
	
		return (
			
			
			<li className="nav-item relative   " key={item.id}>
					<Link  href={item.linkhomepage}>
						<a  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-blue hover:transition  delay-150 duration-300 ease-in-out ... hover:text-white transition-all cursor-pointer lead_hover px-3 py-5">
						{item.title	} <span className="caret"></span>
						</a>
						</Link>
						<ul className={`${ item.item === "" ? 'hidden' : 'dropdown-menus py-5 px-6 bg-blue mt-10  '}`}>
							<li>
							    <Link href={item.linkprof	}>
						            <a className={`${ item.linkprof=== "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-purple-200  hover:text-white '}`}>
								{item.subone}
									
						            </a>
					            </Link>
							</li>
							<li> 
								<Link href={item.linkhome	}>
						            <a className={`${ item.linkhome=== "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-purple-200  hover:text-white '}`}>
									{item.subone}
								
						            </a>
					            </Link>
							</li>
							<li> 
								<Link href={item.linkarticle	}>
						            <a className={`${ item.linkarticle === "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-purple-200  hover:text-white  '}`}>
						            
									{item.subtwo}
						            </a>
					            </Link>
							
							</li>
							<li> 
							
								<Link href={item.linkarticle	}>
						            <a className={`${ item.linkarticle === "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-purple-200  hover:text-white  '}`}>
						            
									{item.subevro}
						            </a>
					            </Link>
							</li>
							<li> 
							
							<Link href={item.linkarticle	}>
								<a className={`${ item.linkarticle === "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-purple-200  hover:text-white  '}`}>
								
								{item.subfamily}
								</a>
							</Link>
						</li>
							
						</ul>
						</li>
			
		
		);
	  });
	return (

		
		<nav className="mx-2 ">
			<div className="flex items-center justify-between container mx-auto">

				<div className="flex items-center flex-shrink-0 text-black mr-20 w-40">
					{/*<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
					<Link href="/">
					<Image  src={profilePic}  alt="Luxtex - постільна білизна від виробника logo"/>
					</Link>
					<span className="font-semibold text-xl tracking-tight">
					<Link href="/">
					<a className=""></a>
					</Link>
					</span>
				</div>
				<>
		
	
			</>
				{/*Menu button*/}
				{/*<div>
				<a href="/registration/register/" className="block  lg:hidden lg:mt-0 text-black hover:text-black  rounded-full p-2 bg-gray-200">
						<svg xmlns="http://www.w3.org/2000/svg" className=" lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="gray"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							
						</a></div>*/}
							
				<div className=" py-3 lg:hidden flex items-center">
				<CartIconmob/>
				<input id="hamburger" className="hamburger" type="checkbox"/>
				<label className=" hamburger" for="hamburger">
		  <i></i>
		{/*  <span>
			<span className="close">close</span>
			<span className="open">menu</span>
		  </span>*/}
		</label>
		<section className="drawer-list bg-blue ">
		<ul className="">
			
		{renderedQuestionsAnswers}
		</ul>
			</section>
				</div>

				{/*MMenu in mobile*/}
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					<ul className="text-sm font-medium  lg:flex-grow lg:flex h-full ">
					{renderedQuestionsAnswersDesctop}
					</ul>
					
					<div className="text-sm font-medium">
					{/*}	<a href="/registration/register/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Wishlist
		</a>*/}
						<CartIcon/>
					</div>
				</div>

			</div>
		</nav>
	
	)
};

export default Nav;