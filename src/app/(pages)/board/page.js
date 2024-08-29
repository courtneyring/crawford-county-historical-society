'use client';

import { PageContainer } from "@/components";
import { Promo } from "@/components";
import ImagePromoBlock from "@/components/ImagePromoBlock/ImagePromoBlock";

import copy from '../../../copy/board/copy.md';
import placeholder from '../../../placeholderCopy/board/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Board = () => {
    let { heroImage, pageTitle, members, attend, contact } = attributes;


    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle} >
            <div className="mb-5 grid grid-cols-3">
                {members.map((pos, idx) => {
                    return <Promo header={pos.name} eyebrow={pos.position} key={`promo-${idx}`} alignment='left'/>
                })}
            </div>
            <hr className="border-t-2 my-10"/>
            <ImagePromoBlock
                header={attend.heading}
                body={attend.body}
                image={attend.image}
            />
            <div className="h-12"></div>
            <ImagePromoBlock
                header={contact.heading}
                body={contact.body}
                image={contact.image}
                cta={contact.cta}
                reverse
            />
            
        </PageContainer>

    )
}

export default Board;