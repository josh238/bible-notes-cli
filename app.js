
// const command = process.argv[2];
// const verse = process.argv[3];

// console.log("Command:", command);
// console.log("Verse:", verse);

const command = process.argv[2];
const verseParts = process.argv.slice(3); // Everything after command
const verse = verseParts.join(' '); // Join them into one sentence

const fs = require('fs'); // fs = file system

if (command === 'add') {
  fs.appendFile('notes.txt', verse + '\n', (err) => {
    if (err) {
      console.error('❌ Failed to save the verse.');
    } else {
      console.log('✅ Verse saved successfully.');
    }
  });
}
