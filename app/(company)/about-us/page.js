import Expertise from "../../components/aboutpage/expertise/expertise";
import Intro from "../../components/aboutpage/Intro/Intro";
import OurStrength from "../../components/aboutpage/OurStrength/OurStrength";
import PageBanner from "../../components/aboutpage/PageBanner/PageBanner";
import Timeline from "../../components/aboutpage/timeline/timeline";
import WhychooseUs from "../../components/aboutpage/WhychooseUs/WhychooseUs";
import Style from "./about.module.css";
export default function About() {
  return (
    <>
    <PageBanner/>
    <Intro/>
    <Timeline/>
    <Expertise/>
    <OurStrength/>
    <WhychooseUs/>
    </>
  );
}