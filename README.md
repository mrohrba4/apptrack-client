# AppTrack Client

AppTrack is a tool I built to help keep track of my job search and the applications I've turned in. It helps the user stay on track, ensuring that they keep in touch with prospctive job opportunities.

## Technologies Used
- React
- React-Bootstrap
- Material-UI
- HTML/CSS
- JavaScript
- Axios

## Wireframes and User stories

#### Entry View
![Entry View](/public/assets/img/appentry.jpg)

#### All Entries View
![Entry View](/public/assets/img/appview.jpg)

#### Update Entry View
![Entry View](/public/assets/img/appupdate.jpg)

#### User stories
*Auth:*

- *As a user*, I want to create an account(sign-up).
- *As a user*, I want to sign in to my account.
- *As a user*, I want to change my password.
- *As a user*, I want to sign out of my account.


*Resource:*

- *As a user*, I want to create a job application entry.
- *As a user*, I want to view my job application entries.
- *As a user*, I want to edit/update my job application entries.
- *As a user*, I want to delete/remove my job application entries.

## API Documentation and Deployed sites
[AppTrack API](https://github.com/mrohrba4/apptrack-api)

[AppTrack Client Deployed](https://mrohrba4.github.io/apptrack-client)

[AppTrack API Deployed](https://apptrack32.herokuapp.com/)

## Organization

- Designed ERD, Wireframes and user stories.
- Set up and tested API user routes.
- Setup and tested API resource routes.
- Front end component builds.
- Testing Axios API communication.
- Debug and styling
- Deployment to GitHub and Heroku

## Setup and Installation
*Versions:*
- React 16.4.2
- React-router-dom 4.3.1
- Material-UI/core 3.9.4
- Material-UI/styles 4.11.3
- See *package.json* for the full list.

*Install:*
- Fork and Clone.
- NPM install dependencies.
- Config Environment variables in *apiConfig.js*
- auth folder contains API auth requests.
- entry folder contains Entry CRUD requests.
- Configure routes in App.js

## Future Updates

AppTrack is currently in a very alpha version, my plan is to completely expand features relating to adding, deleting, updating and viewing entries, some other tools will be added to help in the search.
