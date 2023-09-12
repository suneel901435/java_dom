async function fetchAndDisplayCountryData() {
    const countryInfoContainer = document.querySelector('.country-info');
    try {
      const response = await fetch('https://restcountries.com/v2/all');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      const randomCountry = data[Math.floor(Math.random() * data.length)];
  
      const countryInfoHTML = `
        <p>Country: ${randomCountry.name}</p>
        <p>Capital: ${randomCountry.capital || 'N/A'}</p>
        <p>Population: ${randomCountry.population || 'N/A'}</p>
        <p>Region: ${randomCountry.region || 'N/A'}</p>
        <p>Subregion: ${randomCountry.subregion || 'N/A'}</p>
        <p>Language: ${randomCountry.languages.map(lang => lang.name).join(', ') || 'N/A'}</p>
        <p>Currency: ${randomCountry.currencies.map(currency => `${currency.name} (${currency.code})`).join(', ') || 'N/A'}</p>
        <img src="${randomCountry.flag}" alt="Flag" style="max-width: 100px; max-height: 100px;">
      `;
  
      countryInfoContainer.innerHTML = countryInfoHTML;
    } catch (error) {
      console.error('Error fetching country data:', error);
      countryInfoContainer.innerHTML = '<p>Failed to fetch country data. Please try again later.</p>';
    }
  }
  
  function handleGetCountryInfoButtonClick() {
    fetchAndDisplayCountryData();
  }
  
  window.addEventListener('load', fetchAndDisplayCountryData);
  
  const getCountryInfoButton = document.getElementById('get-country-info-btn');
  getCountryInfoButton.addEventListener('click', handleGetCountryInfoButtonClick);
  


// document.addEventListener("DOMContentLoaded", function () {
//     // Get a reference to the .country-info element
//     const countryInfoElement = document.querySelector(".country-info");

//     // Define the URL of the REST API for retrieving country information
//     const apiUrl = "https://restcountries.com/v3.1/name/your-country-name";

//     // Fetch country information from the API
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // Process and display the country information
//             const countryData = data[0]; // Assuming the API returns an array with one country object
//             displayCountryInfo(countryData);
//         })
//         .catch(error => {
//             console.error("Error fetching country data:", error);
//             countryInfoElement.innerHTML = "<p>Failed to fetch country data</p>";
//         });

//     // Function to display country information
//     function displayCountryInfo(countryData) {
//         // You can customize this function to format and display the country information as needed
//         countryInfoElement.innerHTML = `
//             <h2>${countryData.name.common}</h2>
//             <p>Capital: ${countryData.capital[0]}</p>
//             <p>Population: ${countryData.population}</p>
//             <p>Region: ${countryData.region}</p>
//             <p>Subregion: ${countryData.subregion}</p>
//             <p>Flag: <img src="${countryData.flags.png}" alt="${countryData.name.common} flag"></p>
//         `;
//     }
// });