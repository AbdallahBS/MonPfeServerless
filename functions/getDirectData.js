exports.handler = async () => {
    try {
      // Define the data directly inside the function
      const data = [
        {
          name: "EL Houaria Beach Resort",
          
          img: "https://i.postimg.cc/gcxvNtkn/anastasia-palagutina-Vfd1-Ztak8a-Q-unsplash-1.jpg",
          price: 300,
          people: 2,
          stars: 5,
          description: "Experience the ultimate luxury by the sea.",
          location: "Maldives"
        },
        {
          name: "Mountain Hideaway",
          img: "https://i.postimg.cc/dVk99jzB/krzysztof-kowalik-8mhd-Du-OS8-YI-unsplash.jpg",
          price: 250,
          people: 4,
          stars: 4,
          description: "A tranquil retreat in the heart of the mountains.",
          location: "Switzerland"
        },
        {
          name: "City Apartment",
          img: "https://i.postimg.cc/Wb48dv8x/du-zaniol-Sjf-Gf-O-3i-Rk-unsplash.jpg",
          price: 150,
          people: 3,
          stars: 3,
          description: "Modern apartment in the heart of the city.",
          location: "New York"
        }
      ];
  
      // Return the data as JSON
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch data', details: error.message }),
      };
    }
  };
  