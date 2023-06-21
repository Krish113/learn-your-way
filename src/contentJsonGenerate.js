const fs = require('fs');

const list = fs.readdirSync('/Users/krishnendu_c/Guitar');

const contents = list.filter((file) => file.endsWith('.mp4')).map((file) => {
    const slug = file.replace('.mp4', '').substring(6);
    const titleTemp = slug.replace(/-/gm, ' ');
    const title = titleTemp.charAt(0).toUpperCase() + titleTemp.slice(1);
    const url = `https://d1e3n3ct49jsgv.cloudfront.net/beginning-accoustic-guitar/${file}`;
    return {
        slug,
        title,
        url,
    };
});

console.log(JSON.stringify(contents, undefined, 2));

