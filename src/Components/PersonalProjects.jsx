import { ProjectsLayout, Project } from "./Project";
import SectionHeader from "./SectionHeader";
import Farmers from "../images/logo_farmers.png";
import TenkSeconds from "../images/logo_tenk_seconds.png";
import Deballs from "../images/logo_deballs.png";
import projects from "../PersonalProjects.json";
import React from "react";
import DetailModal from "./DetailModal";
const PersonalProjects = () => {
	const [open, setOpen] = React.useState(false);
	const [modalDetail, setModalDetail] = React.useState(projects.farmers.modal);
	const handleOpen = (modalDetail) => {
		setOpen(true);
		setModalDetail(modalDetail);
	};
	const handleClose = () => setOpen(false);

	return (
		<section className="bg-gray py-12">
			<SectionHeader>Personal Projects</SectionHeader>
			<ProjectsLayout>
				<Project
					src={Farmers}
					bgColor="bg-dark"
					title="Farmer's Restaurant Simulator (Desktop)"
					contributions={projects.farmers.contributions}
					overview="You'll play as farmer who manage a restaurant. 
					Do some farming to get ingredients that is required by restaurant to make food for NPC.
					Customize and expand your restaurant, go unlock all recipes"
					onClick={handleOpen.bind(this, projects.farmers.modal)}
				/>
				<Project
					src={TenkSeconds}
					bgColor="bg-dark"
					title="Tenk Seconds (Desktop)"
					contributions={projects.tenk.contributions}
					onClick={handleOpen.bind(this, projects.tenk.modal)}
					overview="Participated in 3 days bullet hell jam. Theme was 10 seconds, tank can only equip a range weapon for 10 seconds and will change to melee weapon if expired. Destroy enemy to get variety of range weapon and survive as long as you can."
				/>
				<Project
					src={Deballs}
					bgColor="bg-dark"
					title="De'balls (WebGL)"
					contributions={projects.deballs.contributions}
					onClick={handleOpen.bind(this, projects.deballs.modal)}
					overview="Shoot incoming balls and don't let it reach the bottom. You can't shoot if there is a ball  inside your shooting range. Be careful of what you shoot, there are trap balls."
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

export default PersonalProjects;
