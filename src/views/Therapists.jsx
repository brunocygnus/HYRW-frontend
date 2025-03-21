import React from "react";
import TherapistsHero from "../components/Therapists/TheraphistsHero";
import TherapistsGrid from "../components/Therapists/TherapistsGrid";
import TherapyProviderSteps from "../components/Therapists/TherapyProviderSteps";

export default function Therapists() {
  return (
    <div className='w-full flex flex-col'>
      <TherapistsHero />
      <TherapistsGrid />
      <TherapyProviderSteps />
    </div>
  );
}
