import { ProjectsLayout, Project } from "./Project";
import SectionHeader from "./SectionHeader";
import BOOM from "../images/logo_boom.png";
import SamsulEscape from "../images/logo_samsul_escape.png";
import Diving from "../images/logo_diving.png";
import VR from "../images/logo_vr.png";
import React from "react";
import projects from "../ProfessionalProjects.json";
import DetailModal from "./DetailModal";
const ProfessionalProjects = () => {
	const [open, setOpen] = React.useState(false);
	const [modalDetail, setModalDetail] = React.useState(
		projects.SamsulEscape.modal,
	);
	const handleOpen = (modalDetail) => {
		setOpen(true);
		setModalDetail(modalDetail);
	};
	const handleClose = () => setOpen(false);
	return (
		<section id="projects" className="bg-dark py-12">
			<SectionHeader>Professional Projects</SectionHeader>
			<ProjectsLayout>
				<Project
					src={VR}
					title="VR Arcade Game (Unreleased)"
					contributions={projects.vrArcade.contributions}
					onClick={handleOpen.bind(this, projects.vrArcade.modal)}
					overview="Players can play arcade game such as basketball, bowling, ring tossing,
					etc. in VR"
				/>
				<Project
					src={SamsulEscape}
					title="Samsul Escape (Android)"
					contributions={projects.SamsulEscape.contributions}
					onClick={handleOpen.bind(this, projects.SamsulEscape.modal)}
					overview="Find the hidden key and escape from the house. Don't get caught by the guard"
				/>
				<Project
					src={BOOM}
					title="BOOM (Android)"
					contributions={projects.BOOM.contributions}
					onClick={handleOpen.bind(this, projects.BOOM.modal)}
					overview="3D Top down shooter. Kill all enemies and unlock new level"
				/>
				<Project
					src={Diving}
					title="Project Diving (Android)"
					contributions={projects.diving.contributions}
					onClick={handleOpen.bind(this, projects.diving.modal)}
					overview="2D casual game. Find 5 toxic barrels located under the sea. 
					Collect trashes for money and use money for upgrade"
				/>
			</ProjectsLayout>
			<DetailModal
				open={open}
				handleClose={handleClose}
				modalDetail={modalDetail}
			/>
		</section>
	);
};

export default ProfessionalProjects;
