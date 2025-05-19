'use client';
import Gallery from "@/app/gallery/page";

const GalleryPreview = (props) => {
    const entry = props.entry;
    const hero = entry.getIn(['data', 'hero']);
    const images = props.widgetsFor('images').map((item) => {
        return {
            image: {
                file: item.getIn(['data', 'image']).toJS().file,
                alt: item.getIn(['data', 'image']).toJS().alt,
            },
        }
    })
    const data = {
        hero: {
            image: props.getAsset(hero.get('image')),
            pos: hero.get('pos')
        },
        pageTitle: entry.getIn(['data', 'pageTitle']),
        images
    }

    console.log(data)

    return (
        <Gallery data={data} />
    )
}

export default GalleryPreview;