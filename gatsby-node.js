const fetch = require("node-fetch")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  createPage({
    path: "/blogs",
    matchPath: "/blogs/*",
    component: require.resolve("./src/pages/blogs/index.js"),
  })
}
