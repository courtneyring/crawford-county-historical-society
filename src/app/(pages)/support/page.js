import { PageContainer, ImagePromoBlock, Body, TextBlock } from "@/components";

import copy from '../../../copy/support/copy.md';
import placeholder from '../../../placeholderCopy/support/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Support = () => {
    let { hero, pageTitle, imagePromos, intro, textBlocks } = attributes;

    return(
        <PageContainer hero={hero} pageTitle={pageTitle}>
            <Body>{intro}</Body>
            {textBlocks.map((textBlock) => {
                return <div className="my-36">
                    <TextBlock heading={textBlock.heading} cta={textBlock.cta}>{textBlock.body}</TextBlock>
                </div>
            })}
            
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