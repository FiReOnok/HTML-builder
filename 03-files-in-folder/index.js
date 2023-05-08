const path = require('node:path');
const { readdir, stat } = require('node:fs/promises');

readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true })
  .then(files => {
    for (const file of files) {
      if (file.isFile()) {
        let currFile = path.parse(path.join(__dirname, 'secret-folder', file.name));
        stat(path.join(__dirname, 'secret-folder', file.name))
          .then(result => {
            console.log(`${currFile.name} - ${currFile.ext.substring(1)} - ${result.size / 1000}kb`);
          });
      }
    }
  });
