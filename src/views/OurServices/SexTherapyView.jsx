import React from "react";
import SexTherapy from "../../components/ServicesPage/SexTherapy";
import WeCanHelp from "../../components/ServicesPage/WeCanHelp";
import ServiceHero from "../../components/ServicesPage/ServiceHero";
import {getSexTherapyIssues} from "../../components/ServicesPage/sexIssues";
import ServicesCTA from "../../components/ServicesPage/ServicesCTA";

export default function SexTherapyView() {
  return (
    <div className='w-full mt-12'>
      <ServiceHero/>
      <SexTherapy />
      <WeCanHelp issues={getSexTherapyIssues()} />
      <ServicesCTA/>
    </div>
  );
}
