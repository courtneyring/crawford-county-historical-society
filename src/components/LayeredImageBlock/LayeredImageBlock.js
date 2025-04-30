"use client";

import Button from "../Button/Button";
import LayeredImage from "../LayeredImage/LayeredImage";
import styles from "./LayeredImageBlock.module.scss";
import variables from "@/styles/variables.module.scss";
import { isTablet, isSmallDesktop } from "@/utils/breakpoints";
import useResizeResponsive from "@/hooks/useResponsive";

const LayeredImageBlock = ({
  heading,
  body,
  layeredImage,
  cta,
  backgroundColor,
  color,
  reverse,
}) => {
  const isTabletWidth = useResizeResponsive(isTablet);
  const isSmallDesktopWidth = useResizeResponsive(isSmallDesktop);

  return (
    <div
      className={`${styles.lImageBlock} ${reverse && styles.reverse}`}
      style={{ backgroundColor, color }}
    >
      <div className={styles.lImageBlock__container}>
        <div className={styles.lImageBlock__image}>
          <LayeredImage
            {...layeredImage}
            customShift={isTabletWidth || isSmallDesktopWidth ? 0 : null}
          />
        </div>

        <div className={styles.lImageBlock__content}>
          <h2 className={styles.lImageBlock__title}>{heading}</h2>
          <p className={styles.lImageBlock__description}>{body}</p>
          <Button {...cta}></Button>
        </div>
      </div>
    </div>
  );
};

export default LayeredImageBlock;
