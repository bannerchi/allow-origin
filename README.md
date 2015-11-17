# allow-origin

express middleware for cross domain

## Install

```
npm install allow-origin --save
```
## Usage

```
var express = require('express');
var allowOrigin = require('allow-origin');
var app = express();
var writeList = ['http://xxx.com'];
app.use(allowOrigin(process.env.NODE_ENV, writeList));
```