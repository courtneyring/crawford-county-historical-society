'use client';
import { useMemo } from "react";
import { PageContainer, ImageGrid, Body } from '@/components';
import styles from './gallery.module.scss';

import copy from '../../../copy/gallery/copy.md';
import placeholder from '../../../placeholderCopy/gallery/copy.md';

const { attributes, react: BodyCopy } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Gallery = () => {
    let { hero, pageTitle, images } = attributes;
    let imageArr = useMemo(() => images.map((image) => image.image), images)

    return (
        <PageContainer hero={hero} pageTitle={pageTitle}>
                <Body><BodyCopy/></Body>
                <ImageGrid images={imageArr} />
            
        </PageContainer>
    )
}

export default Gallery;