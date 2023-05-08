const { join } = require('node:path');
const { copyFile, mkdir, readdir, rm } = require('node:fs/promises')

async function copyDir() {
  const dirFrom = join(__dirname, 'files');
  const dirTo = join(__dirname, 'files-copy');
  await rm(dirTo, { force: true, recursive: true }); // remove folder to actualize removed files
  await mkdir(dirTo, { recursive: true });
  readdir(dirFrom)
    .then(files => {
      for (const file of files) {
        copyFile(join(dirFrom, file), join(dirTo, file));
      }
    });
};

copyDir().catch(console.error);
