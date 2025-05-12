'use client';
import { Hero, Banner, Button, FiftyFifty } from "@/components";
import variables from '@/styles/variables.module.scss';
import Home from "@/app/(pages)/page";


const HomePreview = (props) => {
    const entry = props.entry;
    const hero = entry.getIn(['data', 'hero']);
    const intro = entry.getIn(['data', 'intro']);

    const data = {
        hero: {
            image: props.getAsset(hero.get('image')),
            pos: hero.get('pos')
        },
        intro: {
            backgroundColor: variables.neutralDark,
            color: variables.white,
            body: intro.get('body'),
        }
    }




    const introCta = { value: intro.get('cta').get('value'), label: intro.get('cta').get('label') }
    props.widgetsFor('fiftyFifties').map((item) => {
        console.log(item.getIn(['data']).toJS().image)
    })

    let imageFile = hero.get('image');
    let image = props.getAsset(imageFile);


    return (
        <Home data={data} />
    )
}

export default HomePreview;