// const quotes = [
//     "Quote 1",
//     "Quote 2",
//     "Quote 3",
// ];
// const quoteElement = document.querySelector(".quote p");
// const newQuoteButton = document.getElementById("new-quote-btn");

// function generateRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     quoteElement.textContent = randomQuote;
// }


// newQuoteButton.addEventListener("click", generateRandomQuote);

// generateRandomQuote();

// the above code also used to generate quotes which are defined in quotes array


const quoteContainer = document.querySelector('.quote');
const newQuoteButton = document.getElementById('new-quote-btn');

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
  try {
    // Fetch data from the Quotes Free API
    const response = await fetch('https://type.fit/api/quotes');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Get a random quote object from the data array
    const randomQuote = data[Math.floor(Math.random() * data.length)];

    // Display the random quote
    quoteContainer.innerHTML = `
      <p>${randomQuote.text}</p>
      <p>- ${randomQuote.author || 'Unknown'}</p>
    `;
  } catch (error) {
    console.error('Error fetching random quote:', error);
    // Display an error message in case of failure
    quoteContainer.innerHTML = '<p>Failed to fetch a random quote. Please try again later.</p>';
  }
}

// Function to handle the "New Quote" button click
function handleNewQuoteButtonClick() {
  fetchRandomQuote();
}

// Add an event listener to the "New Quote" button
newQuoteButton.addEventListener('click', handleNewQuoteButtonClick);

// Fetch and display a random quote when the page loads
fetchRandomQuote();