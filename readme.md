<-- social media app using sequelize -->

## Database setup

```
$ mysql
```

```
create database socialmediadb
```

```
create user cbsocialuser identified by 'cbsocialpass'
```

```
grant al privileges on socialmediadb.* to cbsocialuser
```

```
flush privileges
```

## Project structure

### Backend (Server)

```
src
├── controllers # functions to connect routes to db operation
├── db          # db connection and model definations
├── public      # html/js/css files for static part of site
└── routes      # express middlewares (route wise)
```

### Frontend (Client Side Code)
```
src/public/   
├── app                # our own frontend js code
│   └── cbsocial-common.js
├── components         # html snippets
│   └── navbar.html
├── css                 # css library we are using
│   ├── bootstrap.css
│   └── fonts           # fonts we are using
│       ├── muli.css
│       ├── Muli-Italic.woff2
│       └── Muli.woff2
├── index.html          # homepage
└── js                  # js libraries we are using
    ├── bootstap.js
    ├── jquery-3.4.1.js
    └── popper.js
```


## Business logic

## users

1. **create users**
   this will create a new user with a random username

## Posts

1. **create post**
   this will create a new post. required fields are username(the author of this post)

- username (the author of this post)
- title
- body

2.  **show all posts**
    list all existing posts, we should have following filtering support

- filter by username
- filter by query contained in title (search by title)

3. **edit posts** `tbd`

4. _delete posts_ `tbd`

### Comments

1. **show all comments(of a user)**
2. **show all comments(under a post)**
3. **add a comment**

## API Docs

### `users`

1. `Post /users`
   Create a new user with random username and an user id

2. `GET /users/{userId}`
   get an user with a given user id

3. `GET /users/{username}`
   get an user with given user name

### `posts`

1. `GET/ posts`
   get all posts by everyone

2. `POST /posts`

Create a new post
Required fields in body-

```
userId-
title-
body-
```

