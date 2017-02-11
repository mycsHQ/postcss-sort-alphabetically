var postcss = require('postcss');

module.exports = postcss.plugin('postcss-sort-alphabetically', function () {

    return function (root) {

        root.walkRules(rule => {
            rule.nodes = rule.nodes.sort(function (a, b) {
                if (a.prop < b.prop) return -1;
                if (a.prop > b.prop) return 1;
                return 0;
            });
        });

    };
});
