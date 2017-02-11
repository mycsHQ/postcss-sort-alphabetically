var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}


it('sorts rules', () => {
    return run(`a{
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
    }`,
    `a{
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
    }`
    , { });
});


it('sorts nested rules', () => {
    return run( `div{
        color: red;
        border: 1px solid black;
        background-color: red;

        .class {
            color: red;
            border: 1px solid black;
        }
    }`,
    `div{
        background-color: red;
        border: 1px solid black;
        color: red;

        .class {
            border: 1px solid black;
            color: red;
        }
    }`
    , { });
});
