import React from "react";
import Modal from "@mui/material/Modal/Modal";
import Box from "@mui/material/Box";
import SectionHeader from "./SectionHeader";
const DetailModal = ({ modalDetail, open, handleClose }) => {
	modalDetail.desc = modalDetail.desc ? modalDetail.desc : "";
	modalDetail.challenges = modalDetail.challenges
		? modalDetail.challenges.map((c, i) => (
				<p key={i} className="text-[0.65rem] md:text-sm mt-4">
					{c}
				</p>
		  ))
		: "";
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			className="text-white"
		>
			<Box
				className="px-[10%] text-center w-[85%] bg-gray absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 overflow-x-hidden
        border-dark border-4 p-4 flex flex-col items-center overflow-y-scroll focus:outline-none h-[85vh]"
			>
				<SectionHeader>{modalDetail.title}</SectionHeader>
				<p className="mt-4 text-[0.65rem] md:text-sm">{modalDetail.desc}</p>

				<Links
					githubUrl={modalDetail.githubUrl}
					itchUrl={modalDetail.itchUrl}
					playstoreUrl={modalDetail.playstoreUrl}
				/>
				{modalDetail.youtubeUrl ? (
					<iframe
						className="w-full min-h-[30vw] mt-8"
						src={modalDetail.youtubeUrl}
						title="買辣椒也用券 - 起風了 (新版)【動態歌詞Lyrics】"
						frameborder="0"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
						allowFullScreen
					></iframe>
				) : (
					""
				)}

				<h2 className="mt-8 font-bold text-lg">Challenges</h2>
				{modalDetail.challenges}
				{modalDetail.code ? (
					<iframe
						src={modalDetail.code.url ? modalDetail.code.url : "#"}
						className={`w-full min-h-[25vw] mt-8`}
						sandbox="allow-scripts allow-same-origin"
						title="test"
					></iframe>
				) : (
					""
				)}

				<div className="w-full flex flex-wrap gap-8 justify-center mt-12">
					{modalDetail.snapshots
						? modalDetail.snapshots.map((s, i) => (
								<img className=" h-fit" key={i} src={s} alt="test" />
						  ))
						: ""}
				</div>
			</Box>
		</Modal>
	);
};

export default DetailModal;
const Links = ({ githubUrl, itchUrl, playstoreUrl }) => {
	const github = githubUrl ? (
		<li>
			<a className="underline" target="blank" href={githubUrl}>
				Github &rarr;{" "}
			</a>
		</li>
	) : (
		""
	);

	const itch = itchUrl ? (
		<li>
			<a className="underline" target="blank" href={itchUrl}>
				Itch.io &rarr;{" "}
			</a>
		</li>
	) : (
		""
	);

	const playstore = playstoreUrl ? (
		<li>
			<a className="underline" target="blank" href={playstoreUrl}>
				Playstore &rarr;{" "}
			</a>
		</li>
	) : (
		""
	);
	const noLinks = !playstore && !github && !itch;
	return (
		<div>
			{noLinks ? "" : <h2 className="mt-8 font-bold text-lg">Links</h2>}
			<ul>
				{itch}
				{playstore}
				{github}
			</ul>
		</div>
	);
};
