const fetch = require("node-fetch")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const response = await fetch("https://uamuzi.site/api/v1/blogs");
  const blogs = await response.json()
  console.log(blogs)
  if (!response.ok) {
    throw response.json()
  }

  blogs.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: require.resolve("./src/templates/blogTemplate.js"),
      context: {
        blog,
      },
    })
  })

}
