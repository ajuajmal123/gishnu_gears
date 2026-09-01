const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;

            newContent = newContent.replace(/py-20/g, 'py-12');
            newContent = newContent.replace(/py-24/g, 'py-12');
            newContent = newContent.replace(/mb-24/g, 'mb-12');
            newContent = newContent.replace(/mb-16/g, 'mb-8');
            newContent = newContent.replace(/gap-16/g, 'gap-10');
            newContent = newContent.replace(/pt-36/g, 'pt-24');
            newContent = newContent.replace(/pb-24/g, 'pb-12');
            newContent = newContent.replace(/pt-20/g, 'pt-12');
            newContent = newContent.replace(/pb-16/g, 'pb-8');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInDir('src/app');
replaceInDir('src/components');
console.log('Whitespace cleanup complete!');
