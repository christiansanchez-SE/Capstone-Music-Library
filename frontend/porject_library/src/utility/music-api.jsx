export async function getMusic(setState) {
  // The try method tries to catch any erros and will console log it as well
  try {
    // This will fetch the data from the backend folder
    const response = await fetch('https://capstone-music-library.onrender.com/musicLibrary');
    // This will parse the respone to get the actual data, await variable is added to make sure the parseing is complete
    const data = await response.json();
    // Will update the state with the music data that was aquired by the backend
    setState(data.music);
    // Conosle log to see data
    console.log(data.music);
  } catch (error) {
    // If an error occurs it will be caught here and be logged as well
    console.error('Error fetching music:', error);
  }
}

export async function addMusic(musicData) {
  // The try method tries to catch any erros and will console log it as well
  try {
    // This will fetch the data from the backend folder
      // This will send a POST request to the server with new music data to help create new entries 
    const response = await fetch('https://capstone-music-library.onrender.com/musicLibrary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(musicData),
    });
    // This will parse the respone to get the actual data, await variable is added to make sure the parseing is complete
    const result = await response.json();
    // Conosle log to see data
    console.log('Music added:', result);
    // Will return the results of POST data
    return result;
  } catch (error) {
    // If an error occurs it will be caught here and be logged as well
    console.error('Error adding music:', error);
  }
}

export async function updateMusic(id, musicData) {
  try {
    const response = await fetch(`https://capstone-music-library.onrender.com/musicLibrary/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(musicData),
    });
    const result = await response.json();
    console.log('Music updated:', result);
    return result;
  } catch (error) {
    console.error('Error updating music:', error);
  }
}

export async function deleteMusic(id, musicData) {
  try {
    const response = await fetch(`https://capstone-music-library.onrender.com/musicLibrary/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(musicData),
    });
    const result = await response.json();
    console.log('Music deleted:', result);
    return result;
  } catch (error) {
    console.error('Error deleting music:', error);
  }
}
