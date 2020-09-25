const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const webpackConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    webpackConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../src')],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './tsconfig.json'
          }
        },
        { loader: require.resolve('react-docgen-typescript-loader') }
      ],
    });

    webpackConfig.resolve.extensions.push('.ts', '.tsx');

    return webpackConfig;
  },
};
