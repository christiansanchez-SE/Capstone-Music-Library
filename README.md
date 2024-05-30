# Music Library Capstone Project

## Overview
This application is an interactive music library where users can get, create, edit, and delete music entries from the library. The project showcases basic CRUD (Create, Read, Update, Delete) operations with a user-friendly interface.

## Methods
This application features both a backend and a frontend, both linked together to create a fully functional music library. The backend uses MongoDB to store and manage the data, and the frontend provides an intuitive interface for interacting with this data. The application supports full CRUD (Create, Read, Update, Delete) operations, implemented using React hooks such as useState and useEffect.

## Backend
- **Database**: MongoDB is usaed to store and manage data, which include titles, artists, images, and genres.
- API: A RESTful API is built to handle CRUD operations. The API endpoints allow the frontend to connect with the mongoDB.

## Frontend
- **Vite-React**: The frontend is built using Vite-React.
- **State Management**: useState is used to manage the state of various components.
- **Side Effects**: useEffect is used to fetch data from the backend when the components mounts and to update the state.
- 
## Features
- **Add Music**: Users can add new music entries including title, artist, genre, and image.
- **View Music**: Users can view the list of music entries in the library.
- **Edit Music**: Users can edit existing music entries.
- **Delete Music**: Users can delete music entries from the library.
- **Search Functionality**: Users can search for music by title, artist, or genre.
- **Favorites**: Users can add music to their favorites list.

## Additionals
- **Navbar**: The navbar is interactive and is able to expand once hover over it.
- **Carousel**: At the homepage there is a carousel effect set on a timer that will change artist, song, and picture every 5 seconds.
- **Background Image**: The background iamge is set on a animation that moves to give it the effect of it being never ending.
