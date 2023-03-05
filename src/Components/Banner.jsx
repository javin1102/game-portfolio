import { ReactComponent as BannerLeft } from "../images/banner-left.svg";
import { ReactComponent as BannerRight } from "../images/banner-right.svg";

const Banner = () => {
	return (
		<div className="bg-gray  w-full h-80 relative flex justify-center items-center lg:h-96">
			<BannerLeft className="w-36 h-fit absolute top-0 left-0 md:w-56 lg:w-96" />
			<BannerRight className="w-36 h-fit absolute bottom-0 right-0 md:w-56 lg:w-96" />
			<div className="text-center w-[65%] z-10 md:w-[40%]">
				<h2 className="font-bold text-white uppercase text-lg leading-4 md:text-3xl">
					Javin Rionardi
				</h2>
				<p className="text-[.65rem] text-light-gray md:text-sm">
					Junior Game Programmer
				</p>
				<div className="w-full h-[.15rem] bg-light-gray rounded-full my-2"></div>
				<p className="text-[.6rem] text-[#ededed] font-light lg:text-sm">
					Hi there, I’m Javin from Indonesia. Learned game development in Binus
					University. The program I took was Game Application and Technology.
					Also, while internships i was able to develop and published some games
					in playstore. I have high curiousity in a lot of things and always
					strive to expand my skills in game programming
				</p>
			</div>
		</div>
	);
};
export default Banner;
