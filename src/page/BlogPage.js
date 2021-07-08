import React, { useEffect } from "react";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import BlogCarouselv2 from "../components/section-components/BlogCarouselv2";
import Connect from "../components/section-components/Connect";
import HeaderV3 from "../components/section-components/Header-v3";
import ProjectV2 from "../components/section-components/Project-v2";
import { sectionData } from "./../data/section.json";

const BlogPage = () => {
  let data = sectionData.sectionTitle;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layouts pageTitle="Blog">
        <HeaderV3
          background={data.project.background}
          title={"Blog"}
          pageName={"blog"}
        />

        <BlogCarouselv2></BlogCarouselv2>
        <Connect />
        <Footer />
      </Layouts>
    </>
  );
};

export default BlogPage;
