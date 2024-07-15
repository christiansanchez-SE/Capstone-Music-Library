# Music Library Capstone Project

## Overview
This application is an interactive music library where users can get, create, edit, and delete music entries from the library. The project showcases basic CRUD (Create, Read, Update, Delete) operations with a user-friendly interface.

## Web Images
![Music Library Image One](https://github.com/user-attachments/assets/9e6fd4ea-b72d-4833-81ae-62d080fcc316)
![Music Library Image Two](https://github.com/user-attachments/assets/aff54de1-8bbb-47ee-a903-b1eabcdf410e)
![Music Library Image Three](https://github.com/user-attachments/assets/4d711960-918f-42c0-b975-0c89a87eaa37)
![Music Library Image Four](https://github.com/user-attachments/assets/40c6fb6a-c032-452e-9a67-99725ddc9337)
![Music Library Image Five](https://github.com/user-attachments/assets/fcee58c5-5b91-42ff-9bb6-5f37942a972d)

## Methods
This application features both a backend and a frontend, both linked together to create a fully functional music library. The backend uses MongoDB to store and manage the data, and the frontend provides an intuitive interface for interacting with this data. The application supports full CRUD (Create, Read, Update, Delete) operations, implemented using React hooks such as useState and useEffect.

## Backend
- **Database**: MongoDB is usaed to store and manage data, which include titles, artists, images, and genres.
- API: A RESTful API is built to handle CRUD operations. The API endpoints allow the frontend to connect with the mongoDB.

## Frontend
- **Vite-React**: The frontend is built using Vite-React.
- **State Management**: useState is used to manage the state of various components.
- **Side Effects**: useEffect is used to fetch data from the backend when the components mounts and to update the state.

## Key Operations
- **Create**: Users can add new music entries by filling out a form with the title, artist, genre, and an optional image URL. The data is then sent to the backend and stored in MongoDB.
- **Read**: Music entries are fetched from the database and displayed in a list. Users can also search for specific music by title, artist, or genre.
- **Update**: Users can edit existing music entries. The updated data is sent to the backend to update the database.
- **Delete**: Users can delete music entries from the library. The deletion request is sent to the backend, which removes the entry from the database.

## Features
- **Add Music**: Users can add new music entries including title, artist, genre, and image.
- **View Music**: Users can view the list of music entries in the library.
- **Edit Music**: Users can edit existing music entries.
- **Delete Music**: Users can delete music entries from the library.
- **Search Functionality**: Users can search for music by title, artist, or genre.
- **Favorites**: Users can add music to their favorites list.

## Additionals
- **Navbar**: The navbar is interactive and expands upon hovering, providing a smooth browsing experience.
- **Carousel**: The homepage features a carousel effect set on a timer that will change artist, song, and picture every 5 seconds.
- **Background Image**: The background image is set on a animation that moves to give it the effect of it being never ending.

## Challenges
- **Edit**: The edit feature was a little challenging for me, figuring out a clean and precise way for the user use the edit function. 

## Future Edits
- **Login & Sign Up**: I want to create a login and sign up feature so users could make there own playlist.
