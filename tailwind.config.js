/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                chobOrange: {
                    50: '#fffbea',
                    100: '#fff2c5',
                    200: '#ffe685',
                    300: '#ffd246',
                    400: '#ffbd1b',
                    500: '#ff9900',
                    600: '#e27200',
                    700: '#bb4d02',
                    800: '#983b08',
                    900: '#7c310b',
                    950: '#481700',
                },
                chobDark: '#030b16',
            },
        },
    },
    plugins: [],
}
