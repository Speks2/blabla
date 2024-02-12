
// GetCategoryData()
// DisplayLoadingScreen()

function hentData(apiEndpoint) {
    // Brug Fetch API til at hente data fra det angivne API-endpunkt
    fetch(apiEndpoint)
      .then(response => {
        // Tjek om forespørgslen var succesfuld (statuskode 200)
        if (response.ok) {
          // Returner JSON-data fra responsen
          return response.json();
        } else {
          // Hvis forespørgslen ikke var succesfuld, kast en fejl
          throw new Error('Der opstod en fejl under hentning af data');
        }
      })
      .then(data => {
        // Gør noget med den hentede data, f.eks. log den til konsollen
        console.log('Hentede data:', data);
      })
      .catch(error => {
        // Håndter fejl, hvis der opstår problemer under hentning af data
        console.error('Fejl under hentning af data:', error.message);
      });
  }
  
  // Eksempel: Kald funktionen med et API-endpunkt
  hentData('https://dog.ceo/api/breeds/image/random'); 
  hentData('https://dog.ceo/api/breeds/list/all'); 
  hentData('https://dog.ceo/api/breed/hound/images'); 
  hentData('https://dog.ceo/api/breed/hound/list'); 
  
  