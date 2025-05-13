'use client';
import { Hero, Banner, Button, FiftyFifty } from "@/components";
import variables from '@/styles/variables.module.scss';
import Home from "@/app/(pages)/page";


const HomePreview = (props) => {
    const entry = props.entry;
    const hero = entry.getIn(['data', 'hero']);
    const intro = entry.getIn(['data', 'intro']);
    const banner = entry.getIn(['data', 'banner']);
    const promoGroup = entry.getIn(['data', 'promoGroup']);
    const fiftyFifties = props.widgetsFor('fiftyFifties').map((item) => {
        return {
            heading: item.getIn(['data', 'heading']),
            body: item.getIn(['data', 'body']),
            backgroundColor: item.getIn(['data', 'backgroundColor']),
            color: item.getIn(['data', 'color']),
            image: {
                file: item.getIn(['data', 'image']).toJS().file,
                alt: item.getIn(['data', 'image']).toJS().alt,
            },
            reverse: item.getIn(['data', 'reverse']),
            cta: {
                label: item.getIn(['data', 'cta']).toJS().label,
                value: item.getIn(['data', 'cta']).toJS().value,    
            }
        }
    });
    const promos = promoGroup.toJS().promos


    const data = {
        hero: {
            image: props.getAsset(hero.get('image')),
            pos: hero.get('pos')
        },
        intro: {
            body: intro.get('body'),
            cta: {
                label: intro.get('cta').get('label'),
                value: intro.get('cta').get('value'),
            }
        },
        fiftyFifties,
        promoGroup: {
            heading: promoGroup.get('heading'),
            cta: {
                label: promoGroup.get('cta').get('label'),
                value: promoGroup.get('cta').get('value'),
            },
            promos
        },
        banner: {
            backgroundImage: props.getAsset(banner.get('backgroundImage')),
            backgroundColor: banner.get('backgroundColor'),
            color: banner.get('color'),
            text: banner.get('text'),
            cta: {
                label: banner.get('cta').get('label'),
                value: banner.get('cta').get('value'),
            }
        }
    }




    // const introCta = { value: intro.get('cta').get('value'), label: intro.get('cta').get('label') }
    // props.widgetsFor('fiftyFifties').map((item) => {
    //     console.log(item.getIn(['data']).toJS().image)
    // })

    // let imageFile = hero.get('image');
    // let image = props.getAsset(imageFile);


    return (
        <Home data={data} />
    )
}

export default HomePreview;