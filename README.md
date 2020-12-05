# Anime Quotes API
An NPM package to fetch anime quotes from the website [Less-Real](https://www.less-real.com/)

# How this API is different from the others?
Less-Real has a database of more than 10,000 anime quotes which is crowd-sourced. Every time you fetch the API it will give a quote and the source of the quote at the same time, outputted in a JSON format.

## How To Use

```js
var Quotes = require('anime-quotes');

(async function() {
var quote = new Quotes();
var get_quotes = await quote.quotes();
console.log(get_quotes);
})();
```

Which gives the following results (only 5 results at one time),

```js
[
  { success: false, title: 'TV Quote #827', quote: '' },
  {
    success: true,
    title: 'Kojirou Quote #2513',
    quote: "Team Rocket may be dirty rotten criminals, but we're not in the business of destroying children's dreams! At least, not yet.- Kojirou (Pokémon)"      
  },
  {
    success: true,
    title: 'Portgas D. Ace Quote #5435',
    quote: "Old man, everyone!! And you.. Luffy. Even though I've been good for nothing my whole life, even though I have the blood of a demon within me... You guys still loved me! Thank you so much!!- Portgas D. Ace (One Piece)"
  },
  {
    success: true,
    title: 'Asakura Ryouko Quote #1325',
    quote: "You think it's a joke? Huh. You don't want to die? You don't want me to kill you? I'm sorry, but I just don't understand the concept of death regarding organic lifeforms.- Asakura Ryouko (The Melancholy of Haruhi Suzumiya)"
  },
  {
    success: true,
    title: 'Haruhi Fujioka Quote #3608',
    quote: 'I hate all these damn rich people.- Haruhi Fujioka (Ouran High School Host Club)'
  }
]
```

**Note**: On some occasions the success on getting the quote may be *false*, don't be alarmed as it is an issue on Less-Reals end.

## Installation

`npm i anime-quotes --save`

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Cheerio

## Contact and Contributions

Add a pull request or raise an issue if you wish to contribute.

## License

This project is licensed under GNU General Public License, See [LICENSE](/LICENSE) for more information