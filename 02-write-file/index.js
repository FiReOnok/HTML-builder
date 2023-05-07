const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const rl = readline.createInterface({ input, output });

const exitHandler = () => {
  console.log('Writing done!');
  rl.close();
}

console.log(`Hello, ${process.env.USERNAME || process.env.USER}! Write your text to file:`);

rl.on('line', (data) => {
  if (data.toLowerCase() === 'exit') {
    exitHandler();
    return;
  }
  writeStream.write(`${data}\n`);
});

rl.on('SIGINT', exitHandler);
