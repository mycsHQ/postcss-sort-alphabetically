var postcss = require('postcss');

module.exports = postcss.plugin('postcss-sort-alphabetically', function () {

    // Work with options here

    return function (root) {

        root.walkRules(rule => {
            rule.nodes = rule.nodes.sort(function (a, b) {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            });
        });

    };
});
