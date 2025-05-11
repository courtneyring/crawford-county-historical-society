'use client'

import { Widget as uuid } from '@/widgets/uuid/index';
import { Widget as hero } from '@/components/Hero/Hero.widget';
import {EditorComponent} from '@/components/Hero/Hero.editor';

const Admin = () => {
    if (typeof window !== "undefined") {
        window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/layout.css')
        window.CMS.registerPreviewStyle('/_next/static/css/app/(pages)/preview.css')
        // window.CMS.registEditorComponent
        // window.CMS.registerWidget(uuid);
        // window.CMS.registerWidget(hero);
        CMS.registerEditorComponent({
            id: "gist",
            label: "Gist",
            fields: [{
                name: "username",
                label: "GitHub Username",
                widget: "string"
            },
            {
                name: "gid",
                label: "Gist ID",
                widget: "string"
            },
            ],
            pattern: /^{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
            fromBlock: function (match) {
                return {
                    username: match[1],
                    gid: match[2],
                };
            },
            toBlock: function (obj) {
                return `{{< gist ${obj.username} ${obj.gid} >}}`;
            },
            toPreview: function (obj) {
                return '<a href="https://gist.github.com/' + obj.username + '/' + obj.id + '">gist</a>';
            },
        });

      }

    return (
        <></>

    )
}

export default Admin;