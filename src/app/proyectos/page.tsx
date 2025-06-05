import React from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import proyectos from "../../../public/proyectos.jpg";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Proyectos" bannerImg={proyectos}>
      <ComingSoon />
    </SubModuleLayout>
  );
};

export default page;
