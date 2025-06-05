import React from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import materialDidactico from "../../../public/material-didactico.jpg";

const page = () => {
  return (
    <SubModuleLayout
      sectionTitle="Material didáctico"
      bannerImg={materialDidactico}
    >
      <ComingSoon />
    </SubModuleLayout>
  );
};

export default page;
