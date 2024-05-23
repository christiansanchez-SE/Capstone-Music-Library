const express = require("express");
const router = express.Router();

const musicLibraryController = require("../controllers/musicLibraryController");

// Obj: We want to establish CRUD routes for our Music Library Model

// - - - - - - - - > GET all music - [READ]
router.get("/", musicLibraryController.fetchAllMusic);
// -----------------> GET a Specific Note by ID - [Read]
router.get("/:id", musicLibraryController.fetchMusic);
// -----------------> Create a Notes - [Create / POST]
router.post("/", musicLibraryController.createMusic);
// -----------------> Update a Specific Note - [Update]
router.put("/:id", musicLibraryController.updateMusic);
// -----------------> Delete a Specific Note - [Delete]
router.delete("/:id", musicLibraryController.deleteMusic);

module.exports = router;