const axios = require('axios');
const cheerio = require('cheerio');

module.exports = class Quote {

  async quotes() {
    //The final output
    let final = [];

    //counter
    var count = 0;

    while (count < 5) {
      //Checks if the quote is found

      let found = false;
      let image;
      let tags;

      /*
      Why these random values are being considered?
      Some quotes on Less-Real are not working for some reason. This is why such random values are taken after trial and error.
      */

      var a = Math.floor(Math.random() * 7000) || Math.floor(Math.random() * (11267 - 10950 + 1) + 10950); //7001 to 10949 missing

      let link = `https://www.less-real.com/quotes/${a}`;

      //Fetching the HTML using axios
      var { data } = await axios.get(link);

      //Using cheerio to load the HTML fetched
      var $ = await cheerio.load(data);

      //Fetching the title of the site
      var title = await $('title')[0].children[0].data.split('-');

      //Gets the quote
      var quote = await $('div[class = "quoteBig"]').text();
      try{
      image = "https://www.less-real.com" + await $('img')[1].attribs.src;
      }catch(err){
        image = '';
      }
      try{
      tags = await $('img')[1].attribs.alt.split(',');
      tags = tags.map(s => s.trim());
      }catch(err){
        tags = '';
      }

      //Checks if quote
      if (quote) found = true;

      //Pushes the final API
      await final.push({
        "success": found,
        "title": title[0].trim(),
        "quote": quote,
        "image": image,
        "tags": tags
      });
      count++;
    }
    return final;
  }
}