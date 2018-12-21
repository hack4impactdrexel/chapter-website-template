import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Banner from "../components/homepage/banner";
import OurWorkSection from "../components/homepage/ourWork";
import InvolveSection from "../components/homepage/involveSection";
import ClientSlider from "../components/homepage/clientSlider";
import PartnerSection from "../components/homepage/partnerSection";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Banner />
    <OurWorkSection />
    <ClientSlider />
    <InvolveSection />
    <PartnerSection />
    <Footer />
  </div>
);

export default Home;
