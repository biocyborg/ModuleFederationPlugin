module.exports = {
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    console.log(devServerConfig);

    return devServerConfig;
  },
  plugins: [
    {
      plugin: require("./module-federation"),
    },
  ],

  webpack: {
    plugins: {
      remove: ["ModuleScopePlugin"],
    },
  },
};
