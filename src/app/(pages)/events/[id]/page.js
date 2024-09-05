
import GraylingDepot from "./grayling-depot";
import { Urbanist } from "next/font/google";


const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', weight: '400' })


export function generateStaticParams() {
    return [{ id: 'grayling-depot-fundraiser' }]
}

const EventPage = () => {




    return (
        <main className={urbanist.className}>
            <GraylingDepot />

        </main>
    )
}

export default EventPage;