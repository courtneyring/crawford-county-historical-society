
import GraylingDepot from "./grayling-depo";


export function generateStaticParams() {
    return [{ id: 'grayling-depot-fundraiser' }]
}

const EventPage = () => {




    return (
        <main>
            <GraylingDepot />

        </main>
    )
}

export default EventPage;