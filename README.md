# PostCSS Sort Alphabetically [![Build Status](https://travis-ci.org/mycsHQ/postcss-sort-alphabetically.svg?branch=master)](https://travis-ci.org/mycsHQ/postcss-sort-alphabetically) [![semantic-versioning](https://img.shields.io/badge/semantic%20-versioning-green.svg)]() [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![npm](https://img.shields.io/npm/v/postcss-sort-alphabetically.svg)](https://www.npmjs.com/package/postcss-sort-alphabetically)

[PostCSS] plugin which sorts css properties alphabetically.

[PostCSS]: https://github.com/postcss/postcss



```css
    /* Input example */
    a{
        border: 1px solid black;
        color: red;
        background-color: red;
    }
    div{
        padding: 10px;
        margin: 20px;
        color: red;
        background-color: red;
    }
    .class {
        flex: 1;
        display-flex: 10px;
    }
    #some {
        background-image: url('something');
        align-items: center;
    }
```

```css
  /* Output example */
   a{
        background-color: red;
        border: 1px solid black;
        color: red;
    }
    div{
        background-color: red;
        color: red;
        margin: 20px;
        padding: 10px;
    }
    .class {
        display-flex: 10px;
        flex: 1;
    }
    #some {
        align-items: center;
        background-image: url('something');
    }
```

## Usage

```js
postcss([ require('postcss-sort-alphabetically') ])
```

See [PostCSS] docs for examples for your environment.

## Contributing
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

Feel free to open issues, make suggestions or send PRs.
This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/). By participating, you are expected to uphold this code.
