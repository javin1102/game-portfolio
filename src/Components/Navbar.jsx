const Navbar = () => {
	return (
		<nav
			className="w-full h-14 bg-dark flex items-center px-4 text-white text-xs font-bold 
         md:h-16 md:text-base lg:h-20 lg:px-14 sticky top-0 z-20 shadow-md"
		>
			<NavLogo />
			<h1 className="hidden sm:inline-block sm:ml-2 lg:ml-4 ">
				Javin Rionardi
			</h1>
			<ul className="flex items-center ml-auto">
				<NavLink href="#">Home</NavLink>
				<NavLink href="#projects">Projects</NavLink>
				<NavLink
					target="blank"
					href="https://drive.google.com/file/d/1bH6WzxOqI09dOgGQXfYtXhikGrMi7pO4/view?usp=share_link"
				>
					Resume
				</NavLink>
				<NavLink href="#contact-me">Contact Me</NavLink>
			</ul>
		</nav>
	);
};

const NavLogo = () => {
	return (
		<div
			className="rounded-full w-8 h-8 bg-dark-blue  flex justify-center items-center
        md:h-10 md:w-10"
		>
			<h1 className="h-fit ">JR</h1>
		</div>
	);
};

const NavLink = ({ href, target, children }) => {
	return (
		<li className="mr-4 last:mr-0 lg:mr-14">
			<a href={href} target={target}>
				{children}
			</a>
		</li>
	);
};

export default Navbar;
