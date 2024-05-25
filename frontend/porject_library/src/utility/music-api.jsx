export async function getMusic(setState) {
    try {
      const response = await fetch('http://localhost:3000/musicLibrary');
      const data = await response.json();
      setState(data.music);
      console.log(data.music);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  