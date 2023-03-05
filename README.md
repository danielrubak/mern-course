# MERN Course

This repository contains a simple MERN application that was created as part of backend learning process. Most of the code was taken/written during the [React, NodeJS, Express & MongoDB - The MERN Fullstack Guide
](https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide) course.

## React app

### SPA Pages

| Endpoint      | Description                      | Access                |
| ------------- | -------------------------------- | --------------------- |
| /             | List of users                    | Always reachable      |
| /:uid/places  | List of places for selected user | Always reachable      |
| /authenticate | Signup                           | Only un-authenticated |
| /places/new   | New place form                   | Only authenticated    |
| /places/:pid  | update place form                | Only authenticated    |

## Backend

To run the backend application just use the following command:

```bash
npm start
```

### API Endpoints

| Endpoint              | Method | Description                                  |
| --------------------- | ------ | -------------------------------------------- |
| /api/users/           | GET    | Get all users                                |
| /api/users/signup     | POST   | Create a new user and log him in             |
| /api/users/login      | POST   | Log user in                                  |
| /api/places/user/:uid | GET    | Get a list of all places for a given user id |
| /api/places/:pid      | GET    | Get a place for a given place id             |
| /api/places/          | POST   | Create a new place                           |
| /api/places/:pid      | PATCH  | Update a place by given id                   |
| /api/places/:pid      | DELETE | Delete a place                               |
