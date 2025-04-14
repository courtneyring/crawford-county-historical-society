
import LayeredImageBlock from './LayeredImageBlock';
import variables from '../../styles/variables.module.scss';

export default {
    title: 'Components/LayeredImageBlock',
    component: LayeredImageBlock,
    parameters: {
        layout: 'full',
    },
    tags: ['autodocs'],
};



export const Default = {
    render: () => {
        return (
            <LayeredImageBlock
                layeredImage={{
                    image: 'https://placehold.co/600x600/png',
                    backgroundColor: variables.secondary,
                    positionX: 'left',
                    positionY: 'top',
                }}
                heading='Museum Events'
                body='The Crawford County Historical Society Foundation Fund, established in 2009, ensures the long-term preservation of the museum and its mission. Managed by the Community Foundation for Northeast Michigan, donations to the fund are invested for lasting impact.'
                backgroundColor={variables.primary}
                color={variables.white}
                cta={{
                    variation: 'white',
                    hollow: true,
                    children: 'Button',
                    fn: () => fn(),
                }}
            />
        )
    }

}

