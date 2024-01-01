import Logo from '../../../public/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
      return (
            <>
            <header className=" d-flex bg-success ms-0 ">
				<Image
					src={Logo}
					className="border bg-danger border-primary w-10 h-10"
					alt="Chiton Logo"
				></Image>

				<nav className="container row align-items-center text-center">
					<h5 className="border col border-primary ">
						Men
					</h5>
					<h5 className="border col border-primary ">
						Women
					</h5>
					<h5 className="border col border-primary ">
						Children
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
			</section></>
      )
}