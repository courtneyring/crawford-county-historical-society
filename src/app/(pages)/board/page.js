'use client';

import { PageContainer, Promo, TextBlock, Hero, } from "@/components";

import copy from '../../../copy/board/copy.md';
import placeholder from '../../../placeholderCopy/board/copy.md';
import ImageBlock from "@/components/ImageBlock/ImageBlock";

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Board = () => {
    let { hero, pageTitle, members, attend, contact } = attributes;


    return (
        <PageContainer hero={hero} pageTitle={pageTitle} >
            <div className="mb-10 px-5 md:px-0 md:mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                {members.map((pos, idx) => {
                    return <Promo header={pos.name} eyebrow={pos.position} key={`promo-${idx}`} alignment='left'/>
                })}
            </div>
            {/* <Hero image='/assets/images/caboose-2.jpg' variation='skinny'/> */}
            {/* <div className="mb-16 md:mb-28">
                <ImageBlock image='/assets/images/caboose-2.jpg' />
            </div> */}
            
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