/** @type {import('next').NextConfig} */
module.exports = {
    webpack(config) {
        config.resolve.alias['@'] = __dirname;
        return config;
    },
};
