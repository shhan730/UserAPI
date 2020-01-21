<h1 align="center">User Managing API</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> User Status API Server

## Install

```zsh
npm install
```

## Usage

```zsh
npm start
```

## Bulit With
* Node.js - Javascript(ES6)
* Express
* SQLite - Sequelize

## API Specification



### Sign Up

> [POST] /users

|Key|Value|
|:----:|:-:|
|name|SeungHunHan|

#### :o: Sucess

* 201: User Created

#### :x: Fail

* 400: No `name` Value in Request
* 409: `name` Value Conflict(Duplicate) Occurred
* 500: Internal Server Error



### Get User List

> [GET] /users

|  Key  | Value |
| :---: | :---: |
| limit |   5   |

**If there is no `limit` variable, API uses 10 as the default.**

#### :o: Sucess

* 200: Success

#### :x: Fail

* 400: `limit` Value is not Number



### Search User

> [GET] /users/:id

**`id` Variable should be Interger**

#### :o: Sucess

* 200: Success

#### :x: Fail

* 400: `limit` Value is not Number

* 404: User Not Found



###Change User Info

> [PUT] /user/:id

| Key  |  Value  |
| :--: | :-----: |
| name | NewName |

#### :o: Sucess

* 200: Success

#### :x: Fail

* 400: `limit` Value is not Number

* 400: `id` Not Found in DB
* 409: `name` Value Conflict (Duplicate) Occurred
* 500: Internal Server Error



### Delete User

> [DELETE] /user/:id

**"id" Variable should be Interger**

#### :o: Sucess

* 204: No Content (User has Successfully Deleted)

#### :x: Fail

* 400: `limit` Value is not Number



## Author

👤 **Seung Hun Han**

* Github: [@shhan730](https://github.com/shhan730)

## Show your support

Give a ⭐️ if this project helped you!
