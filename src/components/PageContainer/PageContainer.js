import Hero from "../Hero/Hero";

const PageContainer = ({ heroImage, pageTitle, children, hero }) => {
    return (
        <main className="flex flex-col items-center">
            <Hero variation='skinny' image={hero ? hero.image : heroImage} pos={hero?.pos} />
            <div className='w-full'>
                <h1 className="my-10 px-3 md:px-0 container mx-auto">{pageTitle}</h1>
                {children}
            </div>

        </main>


    )
}

export default PageContainer;