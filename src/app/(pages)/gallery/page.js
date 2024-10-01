'use client';
import { useMemo } from "react";
import { PageContainer, ImageGrid } from '@/components';

import copy from '../../../copy/gallery/copy.md';
import placeholder from '../../../placeholderCopy/gallery/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Gallery = () => {
    let { hero, pageTitle, images } = attributes;
    let imageArr = useMemo(() => images.map((image) => image.image), images)

    return (
        <PageContainer hero={hero} pageTitle={pageTitle}>
            <div className="container mx-auto px-3 md:px-0">
                <ImageGrid images={imageArr} />
            </div>
            
        </PageContainer>
    )
}

export default Gallery;