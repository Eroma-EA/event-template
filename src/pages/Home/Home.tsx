import Header from "../../components/Header/Header";
import InviteCard from "../../components/inviteCard/inviteCard";
import InvitationText from "../../components/InvitationText/InvitationText";
import RSVPForm from "../../components/RSVPForm/RSVPForm";
import Venue from "../../components/Venue/Venue";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <section className="container home fade-in">
      <Header />
      <InviteCard />
      <InvitationText />
      <main>
        <RSVPForm />
        <Venue />
      </main>
      <Footer />
    </section>
  );
};

export default Home;
