/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/donate/)) {
    page.matchPath = '/donate/*'
    // Update the page.
    createPage(page)
  }
  if (page.path.match(/^\/projects/)) {
    page.matchPath = '/projects/*'
    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectResults = await graphql(`
    query {
      giveth {
        projects {
          id
          title
          description
          slug
          creationDate
          admin
        }
      }
    }
  `)
  const projectPageTemplate = require.resolve('./src/templates/project.js')
  projectResults.data.giveth.projects.forEach(project => {
    console.log('theproject ====>', project.title, 'theslug===>', project.slug)

    createPage({
      path: `/projects/${project.slug}`,
      component: projectPageTemplate,
      context: {
        // entire project is passed down as context
        project: project
      }
    })
  })
}
