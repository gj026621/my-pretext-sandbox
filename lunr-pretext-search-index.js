var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section title",
  "body": " Section title  Hello.   Interactive Exercises   What color is a stop sign?     Green    Incorrect: green means \"go!\".      Red    Correct: red is universally used for prohibited activities or serious warnings.      White    Incorrect: white might be hard to see.      "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-title.html#exercise-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " What color is a stop sign?     Green    Incorrect: green means \"go!\".      Red    Correct: red is universally used for prohibited activities or serious warnings.      White    Incorrect: white might be hard to see.    "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
