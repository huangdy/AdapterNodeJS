/**
 * Created by huangda on 8/4/15.
 */
'use strict';
// get the express's Router
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LdapStrategy = require('passport-ldapauth');
var fs = require('fs');
var join = require('path').join;
var ejs = require('ejs');
var config = require('../serverConfig.json');
var appRootDir = join(__dirname, '../../');//There is the folder where the app lives.

module.exports = router;
