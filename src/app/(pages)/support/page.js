"use client";

import { PageContainer, LayeredImageBlock } from "@/components";
import variables from "../../../styles/variables.module.scss";
import { attributes, react as IntroCopy } from "../../../copy/support/copy.md";
import { useState } from "react";
import DonateModal from "@/app/modals/Donate/Donate";

const Support = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let { hero, pageTitle, lImageBlocks } = attributes;

  const clickHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <PageContainer hero={hero} pageTitle={pageTitle} copy={<IntroCopy />}>
        <div className="flex flex-col ">
          {lImageBlocks.map((block, idx) => {
            return (
              <LayeredImageBlock
                key={`lImageBlock-${block.heading}`}
                layeredImage={{
                  ...block.layeredImage,
                  backgroundColor:
                    variables[block.layeredImage.backgroundColor],
                }}
                heading={block.heading}
                body={block.body}
                backgroundColor={variables[block.backgroundColor]}
                color={variables[block.color]}
                cta={{
                  ...block.cta,
                  children: block.cta.label,
                  fn: block.cta.fn ? clickHandler : null,
                }}
                reverse={idx % 2 !== 0}
              />
            );
          })}
        </div>
      </PageContainer>
      <DonateModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default Support;
