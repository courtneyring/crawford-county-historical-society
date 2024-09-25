'use client';

import { PageContainer } from "@/components";
import { Promo } from "@/components";
import ImagePromoBlock from "@/components/ImagePromoBlock/ImagePromoBlock";

import copy from '../../../copy/board/copy.md';
import placeholder from '../../../placeholderCopy/board/copy.md';
import TextBlock from "@/components/TextBlock/TextBlock";

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Board = () => {
    let { heroImage, pageTitle, members, attend, contact } = attributes;


    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle} >
            <div className="mb-10 md:mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto">
                {members.map((pos, idx) => {
                    return <Promo header={pos.name} eyebrow={pos.position} key={`promo-${idx}`} alignment='left'/>
                })}
            </div>
            <hr className="border-t-2 my-10 container mx-auto mb-16 md:mb-28 "/>
            <div className="mb-16 md:mb-28">
                <TextBlock heading={attend.heading}>{attend.body}</TextBlock>
            </div>
            <div className="mb-16 md:mb-28">
                <TextBlock heading={contact.heading}>{contact.body}</TextBlock>
            </div>

            
        </PageContainer>

    )
}

export default Board;