module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: require('./src/constants/color'),
      spacing: require('./src/constants/token/spacing'),
      borderRadius: require('./src/constants/token/radius'),
    },
  },
  plugins: [],
};
