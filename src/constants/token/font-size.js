const size = (fontSize, lineHeight, letterSpacing) => [
  `${fontSize}px`,
  { lineHeight: `${lineHeight / fontSize}`, letterSpacing },
];

module.exports = {
  xs: size(12, 14, '-0.12px'),
  sm: size(15, 18, '-0.15px'),
  base: size(17, 20, '-0.17px'),
  m: size(18, 22, '-0.18px'),
  lg: size(19, 22, '-0.19px'),
  xl: size(20, 24, '-0.20px'),
  '2xl': size(22, 28, '-0.22px'),
  '3xl': size(24, 30, '-0.24px'),
  '4xl': size(28, 34, '-0.28px'),
  '5xl': size(34, 42, '-0.34px'),
};
