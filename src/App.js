import "./App.css";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProfessionalProjects from "./Components/ProfessionalProjects";
import PersonalProjects from "./Components/PersonalProjects";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
function App() {
	return (
		<>
			<Helmet>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Helmet>
			<Navbar />
			<Banner />
			<ProfessionalProjects />
			<PersonalProjects />
			<ContactMe />
			<Footer />
		</>
	);
}

export default App;
