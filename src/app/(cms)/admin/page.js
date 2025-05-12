'use client'

import { Hero } from '@/components';
import HomePreview from '@/previews/Home.preview';

import React, {useEffect, useState} from 'react';


class PostPreview extends React.Component{
    render () {
        var entry = this.props.entry;
        console.log('entry',entry)
        var hero = entry.getIn(['data', 'hero']);
        let image = hero.get('image');
        var bg = this.props.getAsset(image);
        let pos = hero.get('pos');
        return <Hero image={bg} pos={pos} />
    }
}

const Admin = () => {

    useEffect(() => {

        if (typeof window !== "undefined") {
            window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/layout.css')
            window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/page.css')
            window.CMS.registerPreviewStyle('/styles.css')

            
            CMS.registerPreviewTemplate("test", PostPreview);
            CMS.registerPreviewTemplate("home", HomePreview);
        }
    }, [])

}

export default Admin;