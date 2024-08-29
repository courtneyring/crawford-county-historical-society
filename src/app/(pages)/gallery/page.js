'use client';
import { useMemo } from "react";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import { PageContainer } from '@/components';

import copy from '../../../copy/gallery/copy.md';
import placeholder from '../../../placeholderCopy/gallery/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Gallery = () => {
    let { heroImage, pageTitle, images } = attributes;
    let imageArr = useMemo(() => images.map((image) => image.image), images)

    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle}>
            <ImageGrid images={imageArr} />
        </PageContainer>
    )
}

export default Gallery;