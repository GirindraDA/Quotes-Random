const api = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const tweet = document.getElementById('tweet');

async function getDataQuote(url){
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweetQuote(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

newQuote.addEventListener('click', function(){
    getDataQuote(api);
});

tweet.addEventListener('click', function(){
    tweetQuote();
});

getDataQuote(api);