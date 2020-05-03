const remark = require('remark')
const strip = require('strip-markdown')
const fs = require('fs')
const normalizeHeadings = require('remark-normalize-headings')
const emoji = require('remark-emoji');
const gemojiToEmoji = require('remark-gemoji-to-emoji');
const twemoji = require("remark-twemoji");

// Options
const itemsToKeep = [
  'blockquote',
  'heading',
  'horizontalRule',
  'list',
  'listItem',
  'table',
  'tableCell'
]
const inputFile = `${__dirname}/src/markdown-pages/patrickclery.md`
const outputFile = `${__dirname}/src/markdown-pages/patrickclery-stripped.md`

fs.readFile(inputFile, (err, data) => {
  if (err) throw err
  remark()
    .use(strip, {keep: itemsToKeep})
    .use(normalizeHeadings)
    // .use(emoji)
    // .use(gemojiToEmoji)
    // .use(twemoji)
    .process(data, function (err, output) {
      if (err) throw err

      // Remove escaped HTML ent
      let newOutput = String(output).replace(/&#x3A;/g, ':');
      // Remove emojis
      newOutput = newOutput.replace(/:[a-z_]+:/gi, '');

      // Overwrite the contents of the old file
      fs.writeFile(outputFile, newOutput, function (err) {
        if (err) return console.log(err);
      })

      console.log(`\n\n>>>> Stripped ${inputFile} > ${outputFile}\n\n`);
    })
});

