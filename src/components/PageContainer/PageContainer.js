import Hero from "../Hero/Hero";

const PageContainer = ({ heroImage, pageTitle, children }) => {
    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={heroImage} />
            <div className='max-w-7xl w-full px-2'>
                <h1 className="my-10">{pageTitle}</h1>
                {children}
            </div>

        </main>


    )
}

export default PageContainer;