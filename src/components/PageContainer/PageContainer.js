import styles from './PageContainer.module.scss';
import Hero from "../Hero/Hero";

const PageContainer = ({ heroImage, pageTitle, children, hero }) => {
    return (
        <main>
            <Hero variation='skinny' image={hero ? hero.image : heroImage} pos={hero?.pos} />
            <div className={styles.page__body}>
                <h1>{pageTitle}</h1>
                {children}
            </div>

        </main>


    )
}

export default PageContainer;