export async function getMusic(setState) {
  try {
    const response = await fetch('http://localhost:3000/musicLibrary');
    const data = await response.json();
    setState(data.music);
    console.log(data.music);
  } catch (error) {
    console.error('Error fetching music:', error);
  }
}

export async function addMusic(musicData) {
  try {
    const response = await fetch('http://localhost:3000/musicLibrary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(musicData),
    });
    const result = await response.json();
    console.log('Music added:', result);
    return result;
  } catch (error) {
    console.error('Error adding music:', error);
  }
}
