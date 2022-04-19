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

```
src
├── controllers # functions to connect routes to db operation
├── db          # db connection and model definations
├── public      # html/js/css files for static part of site
└── routes      # express middlewares (route wise)
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

3. **edit posts**  `tbd`

4. *delete posts*  `tbd`

### Comments

1. **show all comments(of a user)**
   
2. **show all comments(under a post)**
3. **add a comment**
