module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class', false
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
