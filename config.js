const proxy = require('http-proxy-middleware');

const apiProxy = proxy('/rs', {
    target: 'http://localhost:3000',
    pathRewrite: {
        '^/rs': '',
    },
});

module.exports = {
    'port': 4226,
    'server': {
        middleware: {
            10: apiProxy,
        },
    },
};
