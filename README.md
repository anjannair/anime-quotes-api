# Anime Quotes API
An NPM package to fetch anime quotes from the website [Less-Real](https://www.less-real.com/)

# How this API is different from the others?
Less-Real has a database of more than 10,000 anime quotes which is crowd-sourced. Every time you fetch the API it will give a quote and the source of the quote at the same time, outputted in a JSON format. This API even gives related images which you can use.

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
    title: 'Haku Quote #1955',
    quote: 'I am of no more use as his tool. Please, kill me.- Haku (Naruto)',
    image: 'https://www.less-real.com/imagevault/uploaded/images/part1/2765.jpg'
  },
  {
    success: true,
    title: 'Takashi Morinozuka Quote #3621',
    quote: "It was my fault. It was my carelessness that led to Mitsukuni's cavity. I forgot to tell him to brush his teeth before napping... twice.- Takashi Morinozuka (Ouran High School Host Club)",
    image: 'https://www.less-real.com/imagevault/uploaded/images/part1/2770.jpg'
  },
  {
    success: true,
    title: 'Joey Wheeler Quote #2792',
    quote: 'I coulda been a contendah...- Joey Wheeler (Yu-Gi-Oh!)',
    image: 'https://www.less-real.com/imagevault/uploaded/images/part1/2045.jpg'
  },
  {
    success: true,
    title: 'Shihouin Yoruichi Quote #1922',
    quote: "Do you remember the first time you walked? No. So you weren't conscious of it. Then why did you walk? Everyone was born knowing how to walk. It's called instinct. That's what this boy reminds me of. He knows he can achieve bankai, so he continues.- Shihouin Yoruichi (Bleach)",
    image: 'https://www.less-real.com/imagevault/uploaded/images/part1/1145.jpg'
  },
  {
    success: true,
    title: 'Gaara Quote #1948',
    quote: "I took the life of the woman I was supposed to call mother in the process of being born... in order to become the world's strongest shinobi... I became the incarnation of sand...- Gaara (Naruto)",
    image: 'https://www.less-real.com/imagevault/uploaded/images/part2/5758.jpg'
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