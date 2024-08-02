
import ImageGrid from './ImageGrid';


const images = [
    '/assets/images/gallery/army-air-field.jpg',
    '/assets/images/gallery/band-mill.jpg',
    '/assets/images/gallery/boiler-explosion.jpg',
    '/assets/images/gallery/browns-restaurant.jpg',
    '/assets/images/gallery/camp-abbey.jpg',
    '/assets/images/gallery/court-house-1.jpg',
]

export default {
    title: 'Components/ImageGrid',
    component: ImageGrid,
    parameters: {
        layout: 'full',
    },
    tags: ['autodocs'],
};



export const Primary = {
    args: {
        images: images
    }

}
