const fs = require("fs");
fs.readFile("4-write-to-file.md", "utf-8", (err, data) => {
    console.log(data);
    fs.writeFile("4-write-to-file.md", data+data, (err) => {
        console.log(err);
    });

})