import React from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import quienesSomos from "../../../public/quienes-somos.jpg";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Quienes somos" bannerImg={quienesSomos}>
      <ComingSoon />
    </SubModuleLayout>
  );
};

export default page;
