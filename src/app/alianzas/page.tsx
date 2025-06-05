import React from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import alianzas from "../../../public/alianzas.jpg";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Alianzas" bannerImg={alianzas}>
      <ComingSoon />
    </SubModuleLayout>
  );
};

export default page;
