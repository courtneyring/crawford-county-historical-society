import styles from './PageContainer.module.scss';
import Hero from "../Hero/Hero";

const PageContainer = ({ heroImage, pageTitle, children, hero, copy }) => {
    return (
        <main>
            <Hero  variation='skinny' image={hero ? hero.image : heroImage} pos={hero?.pos} />
            <div className={styles.container__inner}>
                <h1>{pageTitle}</h1>
                {copy && <div className={styles.container__body}>{copy}</div>}
            </div>
            {children}

        </main>


    )
}

export default PageContainer;