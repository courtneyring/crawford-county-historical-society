
import ImagePromoBlock from './ImagePromoBlock';



export default {
    title: 'Blocks/ImagePromoBlock',
    component: ImagePromoBlock,
    parameters: {
        layout: 'full',
    },
    tags: ['autodocs'],
};



export const Default = {
    render: () => {
        return (
            <div className='max-w-7xl p-2 mx-auto'>
                <ImagePromoBlock 
                    header="Crawford County History"
                    body='Learn more about Crawford County through historical photographs and information.'
                    cta={{label: 'Learn More', url: '/about'}}
                image='https://images.squarespace-cdn.com/content/v1/624b503d11269629b387b9c3/1649102910495-TNRUPY6VYTRMUGH1P4IU/image-asset.jpeg?format=2500w' />
            </div>

        )
    }

}

export const UnevenWithIcons = {
    render: () => {
        return (
            <div className='max-w-7xl p-2 mx-auto'>
                <ImagePromoBlock
                    uneven={true}
                    heading="Crawford County History"
                    body='A donation to the Crawford County Historical Society is a donation that helps to keep the museum up and running. Your donation helps to pay the bills and continue to preserve the history of the county. A donation to the Crawford County Historical Society is a donation that helps to keep the museum up and r'
                    cta={{ label: 'Learn More', url: '/about' }}
                    icon='people' />
            </div>

        )
    }

}


