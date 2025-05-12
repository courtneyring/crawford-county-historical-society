// window.CMS_MANUAL_INIT = true
console.log('here')
CMS.registerEditorComponent({
    id: 'collapsable-note',
    label: 'Collapsable Note',
    fields: [
        { name: 'summary', label: 'Summary', widget: 'string' },
        { name: 'details', label: 'Details', widget: 'markdown' },
    ],
    pattern: /^<details[\s\S]*>\n<summary>(.*?)<\/summary>\n<div>\n*(.*?)\n<\/div>\n<\/details>/ms,
    fromBlock: (match) => ({ summary: match[1], details: match[2] }),
    toBlock: ({ details, summary }) => getCollapsableNoteFragment(summary, details, false),
    toPreview: ({ details, summary }) => marked.parse(getCollapsableNoteFragment(summary, details, true)),
});

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


console.log(CMS.getEditorComponents())

