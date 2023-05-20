
// Object array containing 5 quotes

let quotes = [
  {
    "quote": "Whatever you fight, you strengthen, and what you resist, persists.",
    "source": "Eckhart Tolle",
    "year": "1997",
    "tag": "Spirituality"
  },
  {
    "quote": "You will have bad times, but they will always wake you up to the stuff you weren't paying attention to.",
    "source": "Robin Williams"
  },
  {
    "quote": "Never Appear Too Perfect",
    "source": "Robert Greene",
    "citation": "The 48 Laws of Power",
    "year": "1998"
  },
  {
    "quote": "You must be the change you wish to see in the world.",
    "source": "Mahatma Gandhi"
  },
  {
    "quote": "The only thing we have to fear is fear itself.",
    "source": "Franklin D. Roosevelt"
  }
];


// Function to retrieve a random quote from the quotes object

let randomQuote;
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (5 - 0)) + 0;
  randomQuote = quotes[randomNumber];
  return randomQuote;
};

// Function to display the random quote on screen

function printQuote() {
  getRandomQuote()
  let quoteHtml = 
  `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}
  `;
  if (randomQuote.hasOwnProperty('citation')) {
    let citation = 
    `
    <span class="citation"> ${randomQuote.citation} </span>
    `;
    quoteHtml = quoteHtml + citation;
  }
  if (randomQuote.hasOwnProperty('year')) {
    let year = 
    `
    <span class="citation"> ${randomQuote.year} </span>
    `;
    quoteHtml = quoteHtml + year;
  }
  if (randomQuote.hasOwnProperty('tag')) {
    let tag = 
    `
    <span class="citation"> ${randomQuote.tag} </span>
    `;
    quoteHtml = quoteHtml + tag;
  }
  quoteHtml = `${quoteHtml} </p>`
  document.getElementById('quote-box').innerHTML = quoteHtml; 
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;  
}

// Set Interval Function to change the quote every 10 seconds (call printQuote)

setInterval(printQuote, 10000);


// Event Listener to add functionality to the "show another quote" button (call printQuote)

document.getElementById('load-quote').addEventListener("click", printQuote, false);