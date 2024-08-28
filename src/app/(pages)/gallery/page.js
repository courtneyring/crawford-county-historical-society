'use client';

import { attributes } from '../../../copy/gallery/copy.md'
import { useMemo } from "react";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import { PageContainer } from '@/components';

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