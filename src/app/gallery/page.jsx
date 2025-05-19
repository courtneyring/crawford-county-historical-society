"use client";
import {useEffect} from "react";
import { PageContainer, ImageGrid } from "@/components";

import { attributes, html } from "@/copy/gallery/copy.md";

const Gallery = ({data}) => {
  let { hero, pageTitle, images } = data ? data : attributes;
  console.log(images)
  let imageArr = images.map((image) => image.image) // this should have usememo but doesn't work with vite build

  useEffect(() => {
    console.log('tst')
  }, [])

  return (
    <PageContainer hero={hero} pageTitle={pageTitle} copy={html}>
      <div>
        <ImageGrid images={imageArr} />
      </div>
    </PageContainer>
  );
};

export default Gallery;
