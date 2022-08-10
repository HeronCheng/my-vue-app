// eslint-disable-next-line no-undef
const tailwindcss = require( "tailwindcss" );

// eslint-disable-next-line no-undef
module.exports ={
    plugins: {
        "postcss-import": {},
        tailwindcss : {},
        autoprefixer: {},
        // eslint-disable-next-line no-dupe-keys
        tailwindcss,
    },
};