'use client';
import { Hero, Banner, Button, FiftyFifty } from "@/components";
import variables from '@/styles/variables.module.scss';
import About from "@/app/(pages)/about/page";


const AboutPreview = (props) => {
    const entry = props.entry;
    const hero = entry.getIn(['data', 'hero']);
    const banner = entry.getIn(['data', 'banner']);
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
                label: item.getIn(['data', 'cta'])?.toJS().label,
                value: item.getIn(['data', 'cta'])?.toJS().value,    
            }
        }
    });

    const data = {
        hero: {
            image: props.getAsset(hero.get('image')),
            pos: hero.get('pos')
        },
        pageTitle: entry.getIn(['data', 'pageTitle']),
        banner: {
            backgroundImage: props.getAsset(banner.get('backgroundImage')),
            backgroundColor: banner.get('backgroundColor'),
            color: banner.get('color'),
            text: banner.get('text'),
            attribution: banner.get('attribution')
        },
        membersTitle: entry.getIn(['data', 'membersTitle']),
        members: props.widgetsFor('members').map((item) => {
            return {label: item.getIn(['data', 'label']), value: item.getIn(['data', 'value'])}
        }),
        fiftyFifties,
        // intro: {
        //     body: intro.get('body'),
        //     cta: {
        //         label: intro.get('cta').get('label'),
        //         value: intro.get('cta').get('value'),
        //     }
        // },
        
        // promoGroup: {
        //     heading: promoGroup.get('heading'),
        //     cta: {
        //         label: promoGroup.get('cta').get('label'),
        //         value: promoGroup.get('cta').get('value'),
        //     },
        //     promos
        // },
       
    }

    return (
        <About data={data} />
    )
}

export default AboutPreview;