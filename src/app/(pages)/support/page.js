import { PageContainer, ImagePromoBlock, Body, Promo } from "@/components";

import copy from '../../../copy/support/copy.md';
import placeholder from '../../../placeholderCopy/support/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Support = () => {
    let { hero, pageTitle, imagePromos, intro, textBlocks } = attributes;

    return (
        <PageContainer hero={hero} pageTitle={pageTitle}>
            <Body>{intro}


                <div className="flex flex-col">
                    {textBlocks.map((textBlock, idx) => {
                        return <div >
                            <ImagePromoBlock heading={textBlock.heading} body={textBlock.body} cta={textBlock.cta} icon={textBlock.icon} reverse={idx%2 === 0} uneven={true}/>
                            <div className="bg-gray-200 h-1 w-full my-20"></div>
                            {/* <TextBlock heading={textBlock.heading} cta={textBlock.cta}>{textBlock.body}</TextBlock> */}
                        </div>
                    })}

                </div>


            </Body>
            

            {/* <div >
                {imagePromos.map((promo, idx) => {
                    return (
                        <ImagePromoBlock heading={promo.header} body={promo.body} cta={promo.cta} image={promo.image} key={`promo-${idx}`} reverse={idx % 2 != 0} imageAlignment={promo.imageAlignment} />
                    )
                })}

            </div> */}

        </PageContainer>
    )

}


export default Support;