import React from "react";
import HeaderV3 from "../components/section-components/Header-v4";
import Layouts from "../components/global-components/Layouts";
import { sectionData } from "../data/section.json";
import AboutV2 from "../components/section-components/About-v2";
import Modifica from "../components/section-components/Modifica";

export default function UpdateProfile() {
  let data = sectionData.sectionTitle;
  return (
    <>
      <p> Ciao</p>
      <Layouts pageTitle="Team Details">
        <HeaderV3 background={data.teamDetails.background} />
        <Modifica></Modifica>

        {/*   <Team /> */}
        {/*     <Connect />
        <Footer /> */}
      </Layouts>
    </>
  );
}
