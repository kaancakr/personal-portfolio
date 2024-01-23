// next.config.js
module.exports = {
    reactStrictMode: true,
    webpack: (config, { webpack }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    // Add the exportPathMap configuration for static HTML export
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            // Add other pages as needed
        };
    },
};
