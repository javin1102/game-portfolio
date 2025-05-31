import { ProjectsLayout, Project } from "./Project";
import SectionHeader from "./SectionHeader";
import BOOM from "../images/logo_boom.png";
import SamsulEscape from "../images/logo_samsul_escape.png";
import CircleSort from "../images/logo_circle_sort.webp";
import BlockUp from "../images/logo-blockup.png";
import FindMatch from "../images/logo-findmatch.png";
import Duet from "../images/logo-duet.webp";
import VR from "../images/logo_vr.png";
import StickerBookPuzzle from "../images/logo_sticker.png";
import React from "react";
import projects from "../ProfessionalProjects.json";
import DetailModal from "./DetailModal";
const ProfessionalProjects = () => {
    const [open, setOpen] = React.useState(false);
    const [modalDetail, setModalDetail] = React.useState(
        projects.SamsulEscape.modal
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
                    src={CircleSort}
                    title="Circle Sort"
                    contributions={projects.circleSort.contributions}
                    onClick={handleOpen.bind(this, projects.circleSort.modal)}
                    overview="Physics based hyper casual game. Match color and clear rings"
                />
                <Project
                    src={StickerBookPuzzle}
                    title="Sticker Book Puzzle"
                    contributions={projects.stickerBookPuzzle.contributions}
                    onClick={handleOpen.bind(
                        this,
                        projects.stickerBookPuzzle.modal
                    )}
                    overview="A hyper casual game about placing stickers with lots of level type"
                />
                <Project
                    src={BlockUp}
                    title="Block Up"
                    contributions={projects.blockup.contributions}
                    onClick={handleOpen.bind(this, projects.blockup.modal)}
                    overview="Drag the block into the hole and clear it. Remove all blocks from the level"
                />
                <Project
                    src={FindMatch}
                    title="Find & Match"
                    contributions={projects.findMatch.contributions}
                    onClick={handleOpen.bind(this, projects.findMatch.modal)}
                    overview="A match 3 puzzle"
                />
                <Project
                    src={Duet}
                    title="Duet"
                    contributions={projects.duet.contributions}
                    overview="A puzzle game inspired from tango"
                    url="https://play.google.com/store/apps/details?id=com.game5mobile.duet&hl=in&gl=US"
                />
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
