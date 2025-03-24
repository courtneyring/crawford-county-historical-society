import LayeredImage from "./LayeredImage";
import variables from '../../styles/variables.module.scss';

export default {
    title: 'Components/LayeredImage',
    component: LayeredImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};



export const TopLeft = {
    render: () => {
        return (
            <div style={{ width: '200px', height: '200px' }}>
                <LayeredImage
                    image={`assets/images/gallery_michigan-ave.png`}
                    backgroundColor={variables.secondary}
                    positionX='left'
                    positionY='top'
                />
            </div>
           
        )
    }
}




export const BottomRight = {
    render: () => {
        return (
            <div style={{ width: '200px', height: '200px' }}>
                <LayeredImage
                    image={`assets/images/gallery_michigan-ave.png`}
                    backgroundColor={variables.primary}
                    positionX='right'
                    positionY='bottom'
                />
            </div>

        )
    }
}


