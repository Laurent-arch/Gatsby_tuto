import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Header = () => {
  const {site: {siteMetadata: data}} = useStaticQuery(getData)

  return (
    <div>
        <h1>author: {data.author}</h1>
        <h1>title</h1>
    </div>
  )
}

export default Header