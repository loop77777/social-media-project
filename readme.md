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

