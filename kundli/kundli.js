// kundli.js

function generateKundli() {
    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
  
    if (!name || !birthDate || !birthTime || isNaN(latitude) || isNaN(longitude)) {
      alert("Please fill in all the fields correctly.");
      return;
    }
  
    // Split date and time for further calculations
    const birthDateTime = new Date(`${birthDate}T${birthTime}:00Z`);
    
    const ascendantSign = calculateAscendant(birthDateTime, latitude, longitude);
    const planets = calculatePlanetaryPositions(birthDateTime);
  
    // Displaying Results
    const kundliOutput = document.getElementById('kundliOutput');
    kundliOutput.innerHTML = `
      <h3>Your Kundli</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Ascendant Sign:</strong> ${ascendantSign}</p>
      <h4>Planetary Positions:</h4>
      <ul>
        ${planets.map(planet => `<li>${planet.name}: ${planet.position}</li>`).join('')}
      </ul>
    `;
  }
  
  // Approximate function to calculate the Ascendant (Rising Sign)
  function calculateAscendant(dateTime, lat, lon) {
    // Simplified calculation based on time and location (for learning purposes)
    const hours = dateTime.getUTCHours();
    const degrees = (hours * 15 + lon) % 360;
    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const signIndex = Math.floor(degrees / 30);
    return signs[signIndex];
  }
  
  // Basic planetary positions calculation (placeholder values)
  function calculatePlanetaryPositions(dateTime) {
    // Simplified and static positions for demonstration purposes
    return [
      { name: "Sun", position: "Leo" },
      { name: "Moon", position: "Cancer" },
      { name: "Mars", position: "Virgo" },
      { name: "Mercury", position: "Gemini" },
      { name: "Venus", position: "Libra" },
      { name: "Jupiter", position: "Sagittarius" },
      { name: "Saturn", position: "Capricorn" },
      { name: "Rahu", position: "Taurus" },
      { name: "Ketu", position: "Scorpio" }
    ];
  }
  