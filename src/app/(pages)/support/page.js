import { PageContainer, ImagePromoBlock, Body, Promo, LayeredImageBlock } from "@/components";
import variables from '../../../styles/variables.module.scss';
import styles from './support.module.scss';
import { attributes } from '../../../copy/support/copy.md';

const Support = () => {
    let { hero, pageTitle, intro, lImageBlocks } = attributes;

    return (
        <PageContainer hero={hero} pageTitle={pageTitle} copy={intro}>
            <div className="flex flex-col ">
                {lImageBlocks.map((block, idx) => {
                    return <LayeredImageBlock
                        layeredImage={{...block.layeredImage, backgroundColor: variables[block.layeredImage.backgroundColor]}}
                        heading={block.heading}
                        body={block.body}
                        backgroundColor={variables[block.backgroundColor]}
                        color={variables[block.color]}
                        cta={{...block.cta, children: block.cta.label}}
                        reverse={idx % 2 === 0}
                    />
                })}

            </div>

        </PageContainer>
    )

}


export default Support;