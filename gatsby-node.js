/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// create page dynamically
// exports.createPages = async ({ graphql,actions }) => {
//   const {createPage} = actions
//   const result = await graphql(`
//     query GetLocations {
//       locations:allContentfulLocations{
//         nodes{
//           slug
//         }
//       }
//     }
//   `)  
// }


const path = require('path')
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query GetProducts {
      products:allContentfulCoffeeItems{
        nodes{
          slug
        }
      }
    }
  `)

  result.data.products.nodes.forEach(element => {
    createPage({
      path: `/products/${element.slug}`,
      component: path.resolve(`src/templates/products-template.js`),
      context:{
        title: element.slug
      }
    })
  });
}