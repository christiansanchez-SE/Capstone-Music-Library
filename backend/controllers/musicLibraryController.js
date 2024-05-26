const Music_Library = require("../models/musicLibrary");

const fetchAllMusic = async (req, res) => {
  try {
    // 1. Get all music library from mongoDB
    const music = await Music_Library.find();
    // 2. Send the music library back as a response
    res.json({ music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchMusic = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that note as the payload

  try {
    // --------------------------------(1)
    const musicId = req.params.id;
    // --------------------------------(2)
    const music = await Music_Library.findById(musicId);

    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    // --------------------------------(3)
    res.json({ music: music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMusic = async (req, res) => {
  // 1. Get data from req.body
  // 2. Create music
  // 3. Respond with new copy of Music
  try {
    // --------------------------------(1)
    const { title, artist, genre, image } = req.body;
    // --------------------------------(2)

    const music = new Music_Library({
      title,
      artist,
      genre,
      image:
        image ||
        "https://i.pinimg.com/564x/66/39/19/66391940e99ae6e58a0478b9c23f333d.jpg",
    });

    await music.save();
    // --------------------------------(2)

    res.json({ music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMusic = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Music
  // 4. Retrieve updatedMusic and send it as a response

  try {
    // --------------------------------(1)
    const musicId = req.params.id;
    // --------------------------------(2)
    const { title, artist, genre } = req.body;

    let music = await Music_Library.findByIdAndUpdate(musicId);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    // --------------------------------(3)
    // Music Update
    music.title = title;
    music.artist = artist;
    music.genre = genre;
    music.image = image || music.image;

    await music.save();

    // --------------------------------(4)
    res.json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMusic = async (req, res) => {
  // 1. Get the id off the url
  // 2. Delete the record
  // 3. Send Response

  try {
    // --------------------------------(1)
    const musicId = req.params.id;
    // --------------------------------(2)
    const music = await Music_Library.findByIdAndDelete(musicId);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    // --------------------------------(3)
    res.json({ success: "Record  has been deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchAllMusic,
  fetchMusic,
  createMusic,
  updateMusic,
  deleteMusic,
};
