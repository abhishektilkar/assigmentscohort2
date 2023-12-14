const fs = require('fs');

fs.readFile("1-file-cleaner.md", "utf-8", (err, data) => {
    console.log(data);

    fs.writeFile("1-file-cleaner.md", data.replace(/^\s*[\r\n]/gm, ''), (err) => {
        console.log(err);
    });
})