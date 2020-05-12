# Friend List App

This project is for keeping track of which friends to (virtually) stay in touch with.

1. On the front page, user can choose to register or log in. If register, user 
is required to input name, email, password and confirm password. If log in, user
is required to input email and password. On registration page it also includes
the link to log in page,and vise versa. Both pages have a back to home option. 
2. Once entered the app, a dashboard is shown to user. The page shows greetings, a list of friend names, an input text box for user to add friends name, and a log out button. Only thihs user's friends are shown. 
3. User can add friend's name one at a time. Click on the name in the name list will delete the name from the list. 
4. User's info and friends' names are storaged on MongoDB. 

The following technologies are used: 

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Ref

- [Build a Login/Auth App with the MERN Stack — Part 1 (Backend)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
- [How To Get Started with the MERN Stack](https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack)
