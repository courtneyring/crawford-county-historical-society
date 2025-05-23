"use client";
import { useMemo } from "react";
import { PageContainer, ImageGrid } from "@/components";

import { attributes, react as BodyCopy } from "../../../copy/gallery/copy.md";

const Gallery = () => {
  let { hero, pageTitle, images } = attributes;
  let imageArr = useMemo(() => images.map((image) => image.image), images);

  return (
    <PageContainer hero={hero} pageTitle={pageTitle} copy={<BodyCopy />}>
      <div>
        <ImageGrid images={imageArr} />
      </div>
    </PageContainer>
  );
};

export default Gallery;
