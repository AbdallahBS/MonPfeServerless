exports.handler = async () => {
    try {
      // Define the data directly inside the function
      const data = [
        {
          name: "EL Houaria Beach",
          
          img: "https://i.ibb.co/QcrQswt/anastasia-palagutina-Vfd1-Ztak8a-Q-unsplash-1.jpg",
          price: 300,
          people: 2,
          stars: 5,
          description: "A serene escape surrounded by emerald waters and mountains.",
          location: "Houaria"
        },
        {
          name: "Mountain Hideaway",
          img: "https://i.ibb.co/426TH35/du-zaniol-Sjf-Gf-O-3i-Rk-unsplash.jpg",
          price: 250,
          people: 4,
          stars: 4,
          description: "Explore the vast and mystical dunes under a starlit sky.",
          location: "Switzerland"
        },
        {
          name: "Rainforest Retreat",
          img: "https://i.ibb.co/cNZtjh2/krzysztof-kowalik-8mhd-Du-OS8-YI-unsplash.jpg",
          price: 150,
          people: 3,
          stars: 3,
          description: "Breathtaking views of snow-capped peaks and lush valleys",
          location: ""
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
  