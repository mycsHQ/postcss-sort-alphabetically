# PostCSS Sort Alphabetically [![Build Status][ci-img]][ci]

[PostCSS] plugin which sorts css properties alphabetically.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/AvraamMavridis/postcss-sort-alphabetically.svg
[ci]:      https://travis-ci.org/AvraamMavridis/postcss-sort-alphabetically

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
