// next.config.js
module.exports = {
    reactStrictMode: true,

    // Add the following export configuration:
    target: 'experimental-serverless-trace',
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            // Add other pages as needed
        };
    },
};
