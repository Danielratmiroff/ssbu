module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Super Smash Pros";
      return args;
    });
  },
  publicPath: "/",
};
