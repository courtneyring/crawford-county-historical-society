'use client';

import Hero from "@/components/Hero/Hero";
import { attributes } from '../../../copy/gallery/copy.md'
import { useMemo } from "react";
import ImageGrid from "@/components/ImageGrid/ImageGrid";

const Gallery = () => {
    let { heroImage, pageTitle, images } = attributes;
    let imageArr = useMemo(() => images.map((image) => image.image), images)

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={heroImage} />
            <div className='max-w-7xl w-full px-2'>
                <h1 className="my-10">{pageTitle}</h1>
                <ImageGrid images={imageArr} />
            </div>

        </main>
    )
}

export default Gallery;