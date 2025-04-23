import styles from './PageContainer.module.scss';
import Hero from "../Hero/Hero";

const PageContainer = ({ heroImage, pageTitle, children, hero, copy, excludePadding=[] }) => {

    const getPaddingExlusion = () => {
        let style = {};
        for (let direction of excludePadding) {
            style[`padding-${direction}`] = 0;
        }
        return style
    }

    return (
        <main>
            <Hero  variation='skinny' image={hero ? hero.image : heroImage} pos={hero?.pos} />
            <div className={`${styles.container__inner} ${!pageTitle && !copy && styles.removePadding}`} style={getPaddingExlusion()}>
                <div className={styles.container__copy}>
                    <h1>{pageTitle}</h1>
                    {copy && <div className={styles.container__body}>{copy}</div>}
                </div>

            </div>
            {children}

        </main>


    )
}

export default PageContainer;