import Logo from '../../../public/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import searchIcon from '../../../public/ei-search-inactive.svg'
// import homeImage from '../../../public/homeImage.jpg'

// import Login from '../login/page'

export default function Header () {
      return (
	<>
	<header className="flex justify-between">
		<Image src={Logo} alt='Logo'/>
		<ul className='flex justify-around items-center'>
			<li>HOME</li>
			<li>SHOPS</li>
			<li>COLLECTION</li>
			<li>BLOG</li>
			<li>PAGES</li>
			<li>CONTACT</li>
		</ul>
		<div className='flex justify-center items-center'>
			<Image src={searchIcon} alt='icon'/>
			<Image src={searchIcon} alt='icon'/>
			<Image src={searchIcon} alt='icon'/>
		</div>
		</header></>

      )
}


{/* <>
            <header className=" d-flex bg-success ms-0 ">
				<Image
					src={Logo}
					className="border bg-danger border-primary w-10 h-10"
					alt="Chiton Logo"
				></Image>

				<nav className="container row align-items-center text-center">
					<h5 className="border col border-primary ">
						<Link href={'/login'}>login</Link>
					</h5>
					<h5 className="border col border-primary ">
						<Link href={'/productPage'}>product Pages</Link>
					</h5>
					<h5 className="border col border-primary ">
					<Link href={'/register'}>Register</Link>	
					</h5>

					<h5>
						<Link href={"/login"}>Login</Link>
					</h5>
				</nav>
			</header>
			<section className="d-flex justify-content-center">
				<input
					placeholder="Search Here"
					className=""
					type="text"
					id="home_search"
				/>
				<label htmlFor="home_search" className=" ms-2">
					{" "}
					Search
				</label>{" "}
	</section></> */}