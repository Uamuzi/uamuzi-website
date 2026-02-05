/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    defer: true,
  })

  const result = await graphql(`
    {
      allBlogs {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allBlogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        id: blog.id,
        slug: blog.slug,
      },
    })
  })
}