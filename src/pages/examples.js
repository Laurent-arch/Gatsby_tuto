import React from 'react'
import HeaderHook from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'


const examples = (props) => {
  const {description} = props.data.site.siteMetadata
  return (
    <div>
        examples
        <HeaderHook />
        <HeaderStatic />
        <div>
          {description}
        </div>
    </div>
  )
} 

export const getData = graphql`
query {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}
`

export default examples