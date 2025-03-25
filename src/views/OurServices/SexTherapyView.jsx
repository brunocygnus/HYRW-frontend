import React from "react";
import SexTherapy from "../../components/ServicesPage/SexTherapy";
import WeCanHelp from "../../components/ServicesPage/WeCanHelp";
import {getSexTherapyIssues} from "../../components/ServicesPage/sexIssues";

export default function SexTherapyView() {
  return (
    <div className='w-full mt-16'>
      <SexTherapy />
      <WeCanHelp issues={getSexTherapyIssues()} />
    </div>
  );
}
