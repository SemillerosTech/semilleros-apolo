import React from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import fichasTecnicas from "../../../public/fichas-tecnicas.jpg";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Fichas Técnicas" bannerImg={fichasTecnicas}>
      <ComingSoon />
    </SubModuleLayout>
  );
};

export default page;
