# Anime Quotes API
An NPM package to fetch anime quotes from the website [Less-Real](https://www.less-real.com/)

# How this API is different from the others?
Less-Real has a database of more than 10,000 anime quotes which is crowd-sourced. Every time you fetch the API it will give a quote and the source of the quote at the same time, outputted in a JSON format. This API even gives related images and tags about the anime, which you can use.

## How To Use

```js
var Quotes = require('anime-quotes-api');

(async function() {
var quote = new Quotes();
var get_quotes = await quote.quotes();
console.log(get_quotes);
})();
```

Which gives the following results (only 5 results at one time),

```js
[
  {
    success: true,
    title: 'Anarchy Stocking Quote #6645',
    quote: 'We’re always serious. We’re seriously joking around. - Anarchy Stocking (Panty And Stocking With Gaterbelt)',
    image: 'https://www.less-real.com/imagevault/uploaded/images/part3/14827.jpg',
    tags: [ 'Anarchy Stocking' ]
  },
  {
    success: false,
    title: 'TV Quote #5781',
    quote: '',
    image: '',
    tags: ''
  },
  {
    success: true,
    title: 'Rize Kamishiro Quote #5438',
    quote: "All of the disadvantage in this world stems from a person's lack of ability.- Rize Kamishiro (Tokyo Ghoul)From episode Episode 12, time 13:14.",      
    image: 'https://www.less-real.com/imagevault/uploaded/images/part3/11486.jpg',
    tags: [ 'Glasses', ' Rize Kamishiro' ]
  },
  {
    success: true,
    title: 'Natsu Dragneel Quote #5391',
    quote: 'Your so called "hope" is to throw the past into despair?- Natsu Dragneel (Fairy Tail)From chapter 336, page .',
    image: 'https://www.less-real.com/imagevault/uploaded/images/part1/4604.jpg',
    tags: [ 'Fairy Tail', ' Natsu Dragneel' ]
  },
  {
    success: true,
    title: 'Edward Elric Quote #1441',
    quote: "Yeah, I get it. You couldn't see me since I'm so short, you couldn't distinguish me from all the grains of sand. VERY FUNNY!!- Edward Elric (Fullmetal Alchemist)",
    image: 'https://www.less-real.com/imagevault/uploaded/images/part2/9564.jpg',
    tags: [ 'Edward Elric', ' Fullmetal Alchemist: Brotherhood' ]
  }
]
```

**Note**: On some occasions the success on getting the quote may be *false*, don't be alarmed as it is an issue on Less-Reals end.

## Installation

`npm i anime-quotes-api --save`

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Cheerio

## Contact and Contributions

Add a pull request or raise an issue if you wish to contribute.

## License

This project is licensed under GNU General Public License, See [LICENSE](/LICENSE) for more information