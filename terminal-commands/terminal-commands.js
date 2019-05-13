const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
       const filesToString = files.reduce((acc, file) => {
           return `${acc} ${file}`;
       }, '');

       console.log(filesToString);
    });
};


module.exports.touch = (fileName, fileContents) => {
    fs.writeFileSync(fileName, fileContents);
}


module.exports.mkdir = (dirName) => {
    fs.mkdirSync(dirName);
}