"use strict";
let lint = require('mocha-eslint');
let options = {
    formatter: 'compact',
    alwaysWarn: false
};
lint(['src', 'common'], options);