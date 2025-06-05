import React from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import redFrankl from "../../../public/red-frankl.jpg";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Quienes somos" bannerImg={redFrankl}>
      <ComingSoon />
    </SubModuleLayout>
  );
};

export default page;
