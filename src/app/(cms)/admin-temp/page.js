'use client'

import { Widget as uuid } from '@/widgets/uuid/index';
import { Widget as hero } from '@/components/Hero/Hero.widget';
import {EditorComponent} from '@/components/Hero/Hero.editor';

import React, {useEffect, useState} from 'react';
import { renderToString } from 'react-dom/server';
// import CMS from 'netlify-cms-app';

const TravelQuote = (props) => {
    const authorIsAnonymous = authorName && authorName.toLowerCase() === 'anonymous';
    const authorImg = props.authorPic ? props.authorPic : ""; // src needs to exist *
    // * the React components automatically removes the src attr if 
    // its attribute is undefined when it creates it.
    // With no src though, the component structur won't match the regex.

    return (
        `<div class="travel-quote">
        <p class="travel-quote__copy">{props.quote}</p>
        <span class="travel-quote__author">{props.authorName}</span>
        <img class="travel-quote__author-pic" src={authorImg} alt={props.authorName} />
      </div>`
    )
}

// create string from component to create the regex 
// for CMS.registerEditorComponent 'pattern'
const patternString = renderToString(
    `
<TravelQuote 
    quote='(.*)'
    authorName='(.*)' 
    authorPic='(.*)'/>
`
);

// create the regex
const travelQuoteRegex = new RegExp(patternString.replace(/\//g, '\\/'));


const Admin = () => {
    const [created, updateCreated] = useState(false);

    useEffect(() => {

        if (typeof window !== "undefined") {
            window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/layout.css')
            window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/preview.css')
            // window.CMS.registEditorComponent
            // window.CMS.registerWidget(uuid);
            // window.CMS.registerWidget(hero);
            window.CMS.registerEditorComponent({
                id: "travelQuote",
                label: "Travel quote",
                fields: [
                    { name: 'quote', label: 'Quote', widget: 'string' },
                    { name: 'authorName', label: 'Author name', widget: 'string' },
                    { name: 'authorPic', label: 'Author picture', widget: 'image' },
                ],
                pattern: travelQuoteRegex,
                fromBlock: function (match) {
                    return {
                        quote: match[1],
                        authorName: match[2],
                        authorPic: match[3],
                    };
                },
                toBlock: function (obj) {
                    return renderToString(
                        `<TravelQuote 
                    quote={obj.quote} 
                    authorName={obj.authorName} 
                    authorPic={obj.authorPic} />`
                    )
                },
                toPreview: function (obj) {
                    return renderToString(
                        `<TravelQuote 
                    quote={obj.quote} 
                    authorName={obj.authorName} 
                    authorPic={obj.authorPic} />`
                    )
                },
            });

            console.log(CMS.getEditorComponents())
        }

    }, [])

    return (
        <></>

    )
}

export default Admin;