import React from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import recursos from "../../../public/recursos.jpg";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Recursos" bannerImg={recursos}>
      <ComingSoon />
    </SubModuleLayout>
  );
};

export default page;
