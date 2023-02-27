# MERN Course

This repository contains a simple MERN application that was created as part of backend learning process. Most of the code was taken/written during the [React, NodeJS, Express & MongoDB - The MERN Fullstack Guide
](https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide) course.

## React app

Docs to the `R` part of `MERN`.

### SPA Pages

| Endpoint      | Description                      | Access                |
| ------------- | -------------------------------- | --------------------- |
| /             | List of users                    | Always reachable      |
| /:uid/places  | List of places for selected user | Always reachable      |
| /authenticate | Signup                           | Only un-authenticated |
| /places/new   | New place form                   | Only authenticated    |
| /places/:pid  | update place form                | Only authenticated    |
