import { request, gql } from "graphql-request";
const graphqlAPI = `https://api-ca-central-1.hygraph.com/v2/clpbazqn95zn601t72vwf37h8/master`;
export const getNews = async () => {
  const query = gql`
    query MyQuery {
      newsConnection {
        edges {
          node {
            desc
            photo {
              url
            }
            titleSlug
            title
            createdAt
          }
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query);
  return results.newsConnection.edges;
};
