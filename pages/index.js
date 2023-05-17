import Layout from "../src/components/Layout";
import ProductHome from "../src/components/ProductHomePage";
import SarchProps from "../src/components/search";
import Post from "../src/components/Post";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import ParentProductBlock from "../src/components/products/PerentProducts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Accordion from "../src/components/Accordion";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
import { ApolloProvider } from "@apollo/client";
import Login from "../src/components/login";
import SignUp from '../src/components/signup/SignUp'
import { useState } from 'react';
import { useAuth } from '../src/components/login-function/hooks';
import Head from "next/head"
import AliceCarousel from 'react-alice-carousel';
import Navigation from "../src/components/navigation-chantarelle";
import categoryStripe from "../public/pattern_chant.jpg"
import Telegram from "../public/telegram.png"
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'


export default function Home (props) {

	const { isLoggedIn } = useAuth();
	
	
	<SarchProps isLoggedIn={isLoggedIn}/>
	const imageUrl = Telegram;

	const handleDownload = () => {
	  const link = document.createElement('a');
	  link.href = imageUrl;
	  link.download = 'telegram.png';
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link);
	};
	const questionsAnswers = [
	
        {
          id: 2,
            title: "CHANTARELLE",
            description: "Професійна і домашня косметика, косметологічні апарати (Франція, Польща)",
            linkarticle:"/chantarelle"
      
        },
        {
          id: 3,
            title: "ARKANA",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/arkana"
        },
        {
          id: 4,
            title: "NOREL Dr. Wilsz",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/norel"
           
        },
		{
			id: 2,
			  title: "MCCM",
			  description: "Одна з провідних компаній в індустрії краси",
			  linkarticle:"/mccm"
		
		  },
		  {
			id: 3,
			  title: "DERMAOXY",
			  description: "апарат кисневої Безін'єкційної мезотерапії (Данія)",
			  linkarticle:"/dermaoxy"
		  },
		  {
			id: 4,
			  title: "SITTARA",
			  description: "Професійні косметологічні апарати",
			  linkarticle:"/posts/chantarelle"
			 
		  }
	]
	
	const { products,  heroCarousel, posts, postsCategory,featuredproducts,news ,ret} = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:4 },
	};

	
	const items = [
	
		
	];
	
	
	
	 

	return (
		<>
	<Head>
<title>Lenjerie de pat de calitate, Premium și de lux - Descoperă cea mai bună lenjerie de pat</title>

	</Head>

			<Layout>
	<div className="main">
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				<div class="marquee text-5xl  lg:text-6xl font-playfair font-bold "><span>Avem cele mai bune prețuri - și o calitate excelentă </span></div>
				
			
				{/*<a href="myfile.pdf"  download>Download</a>*/}
			
				{/*Categories
				<div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="mai-title text-3xl text-center mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
</div>*/ }
			
			
			
			<div className="px-4">
				<div className="products container mx-auto   ">

				
				<div className="flex justify-center items-center flex-col lg:flex-row">
					<div className="w-full lg:w-6/12 m-3  relative "><Image   height={900}  objectPosition="center center" fill={true} objectFit={'cover'} src={categoryStripe}  />
						
					</div>
					<div className="w-full lg:w-6/12 m-3  relative "><Image  height={900}   objectPosition="center center" fill={true} objectFit={'cover'}  src={categoryStripe}  />
						
					</div>
				</div>
			
			
				
			
		
			</div>
					{/*Post
					<div className="products container  mx-auto my-32 px-4 ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">{postsCategory?.name}</span></h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
					</div>
				</div>*/ }
					{/*Star*/ }
			
					<div className="products container mx-auto mt-20  ">
				<h2 className="products-main-title main-title mb-5 text-5xl  lg:text-6xl text-center  font-bold">Dragi clienți Luxtex!</h2>
				
				<div className="flex justify-center items-center flex-col lg:flex-row">
					<div className="w-full lg:w-6/12 m-3  relative ">
					
						<p className="text-justify mb-3">Doriți să fiți la curent cu toate evenimentele din compania noastră? Doriți să primiți informații despre produsele noi, promoții și reduceri în 
							fiecare lună? Atunci alăturați-vă grupului nostru de Telegram prin intermediul codului QR!</p>
							<p className="mb-3 text-justify">Dacă întâmpinați probleme în conectarea sau scanarea codului QR, vă rugăm să contactați operatorul nostru în acest chat. Vă vom ajuta cu plăcere să vă alăturați grupului nostru de Telegram.</p>
							<p className="">Vă mulțumim că ați ales Luxtex!</p>
					</div>
					<div onClick={handleDownload} className="w-full lg:w-6/12 m-3  relative "><Image       src={Telegram}  />
						
					</div>
				</div>
			
			
				
			
		
			</div>
					
				{/*Products*/ }
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-10  text-center text-5xl  lg:text-6xl font-bold">Новинки</h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>
				{/*Prodduts*/ }
				<div className="mb-10">
					<h1 className="text-5xl  lg:text-6xl font-bold mb-10">Lenjerie de pat de calitate, Premium și de lux - Descoperă cea mai bună lenjerie de pat la Luxtex</h1>
					
					<p>Bine ați venit la Luxtex, destinația dumneavoastră de încredere pentru lenjeria de pat de cea mai înaltă calitate, cu un nivel Premium și luxuriant. Suntem mândri să vă oferim o gamă largă de lenjerii de pat, create cu atenție și atenție la detalii, pentru a vă oferi cea mai bună experiență de odihnă și confort.</p>
				<p>Indiferent dacă căutați o lenjerie de pat de calitate superioară, un design exclusiv sau materiale luxuriante, Luxtex vă întâmpină cu o selecție impresionantă. De la seturi de lenjerii de pat din bumbac moale și respirabil, până la lenjerii de pat din mătase fină sau satin delicat, veți găsi opțiuni care se potrivesc stilului și preferințelor dumneavoastră.</p>
				<p>Calitatea și durabilitatea sunt principii de bază pentru Luxtex. Utilizăm materiale premium și tehnici de fabricație de înaltă calitate pentru a vă oferi lenjerii de pat care rezistă în timp și oferă o senzație plăcută la atingere. Fiecare detaliu este atent studiat, de la cusături precise până la finisaje impecabile, pentru a vă asigura că aveți parte de produse de cea mai înaltă calitate.</p>
				<p>Experimentați confortul și rafinamentul pe care îl oferă lenjeriile de pat de lux de la Luxtex. Fie că doriți să transformați dormitorul într-un sanctuar de relaxare sau căutați o notă elegantă și sofisticată, gama noastră variată de modele și culori vă permite să alegeți ceea ce se potrivește cel mai bine stilului dumneavoastră.</p>
				<p>Calitatea superioară, luxul și atenția la detalii sunt caracteristicile care ne definesc. Încrederea clienților noștri este prioritatea noastră, de aceea ne străduim să oferim numai produse excepționale și servicii impecabile.</p>
				<p>Descoperiți cea mai bună lenjerie de pat la Luxtex și transformați dormitorul într-un spațiu de relaxare și rafinament. Vă așteptăm cu o selecție deosebită de lenjerii de pat de calitate superioară, Premium și de lux, care să vă ofere confortul și satisfacția deplină.</p>
				</div>
				</div>
				</div>
				
				
			</Layout>
			</>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
		questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			postsCategory: data?.category ? data.category : [],
			news: data?.news?.posts?.nodes ? data.news.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
