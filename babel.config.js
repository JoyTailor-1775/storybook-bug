module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          components: './src/components/',
          config: './src/config/',
          utils: './src/utils/',
          helpers: './src/helpers/',
          hooks: './src/hooks/',
          icons: './src/icons/',
          images: './src/images/',
          tests: './src/icons/',
          types: './src/types/',
        },
      },
    ],
  ],
  env: {
    testing: {
      presets: [['@babel/env'], '@babel/preset-react', '@babel/preset-typescript'],
    },
    dev: {
      ignore: [/tests/],
    },
  },
  sourceMaps: true,
  retainLines: true,
};
