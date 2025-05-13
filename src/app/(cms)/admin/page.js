'use client'

import {HomePreview, AboutPreview} from '@/previews';

import  {useEffect} from 'react';

const Admin = () => {

    useEffect(() => {

        if (typeof window !== "undefined") {
            window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/layout.css')
            window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/page.css')
            window.CMS.registerPreviewStyle('/styles.css')

            CMS.registerPreviewTemplate("home", HomePreview);
            CMS.registerPreviewTemplate("about", AboutPreview);
        }
    }, [])

}

export default Admin;