import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import SectionContactUs from "../../components/SectionContacUs/SectionContactUs";
import SectionLocation from "../../components/SectionLocation/SectionLocation";
import SectionMaps from "../../components/SectionMaps/SectionMaps";
import SectionSchedule from "../../components/SectionSchedule/SectionSchedule";
import SectionSocial from "../../components/SectionSocial/SectionSocial";
import SectionSpeakers from "../../components/SectionSpeakers/SectionSpeakers";
import SectionSponsor from "../../components/SectionSponsor/SectionSponsor";
import { fetchPonentes } from '../../slices/ponentes.slice';
import { useSelector } from "react-redux";

const Home = () => {
  const [mainHeader, setMainHeader] = useState(false)
  const { status } = useSelector((state) => state.auth);
  const loginState = true
  useEffect(() => {
    setMainHeader(true)
  }, [])

  return (
    <>
      <Header state={mainHeader} login={loginState} />
      <main className="main">
        <SectionBanner />
        <SectionSocial />
        <SectionSpeakers />
        <SectionSchedule />
        <SectionLocation />
        <SectionSponsor />
        {status === "authenticated" ? null : <SectionContactUs />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
