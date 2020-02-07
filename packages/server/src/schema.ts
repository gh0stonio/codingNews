import { gql } from 'apollo-server'

import { News, Resolvers } from './__generated__/types'

const news: News[] = [
  {
    title: 'Top 6 Material Design Dashboards',
    link: 'https://dev.to/anaflatlogic/top-6-material-design-dashboards-1mhl',
  },
  {
    title: 'Dockerization of Node.JS Applications on Amazon Elastic Containers',
    link: 'https://blog.soshace.com/dockerization-of-node-js-applications-on-amazon-elastic-containers/',
  },
]

const typeDefs = gql`
  type News {
    title: String!
    link: String!
  }

  type Query {
    news: [News]
  }
`

const resolvers: Resolvers = {
  Query: {
    news: () => news,
  },
}

export default { typeDefs, resolvers }
