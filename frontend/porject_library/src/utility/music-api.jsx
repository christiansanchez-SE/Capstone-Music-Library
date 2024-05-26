export async function getMusic(setState) {
    try {
      const response = await fetch('http://localhost:3000/musicLibrary');
      const data = await response.json();
      setState(data.music);
      console.log(data.music);
    } catch (error) {
      console.error(error);
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
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}