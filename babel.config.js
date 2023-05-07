module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@services': './src/services',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@root': './src',
        },
      },
    ],
  ],
};
