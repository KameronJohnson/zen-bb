import React from 'react'
import Product from './Product'
import { StaticQuery, graphql } from 'gatsby'

const getProducts = graphql`{
  products:allContentfulTShirt{
    edges {
      node {
        title,
        price,
        description {
          id,
          description
        },
        image {
          id,
          fluid(maxWidth:400){
			src
			...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}`

export default function Products() {
	return (
		<StaticQuery
			query={getProducts}
			render={data => {
				return (
					<section className="products">
						<div className="container">
							<div className="row">
								{data.products.edges.map(({ node: product }) => {
									return <Product key={product.id} product={product} />
								})}
							</div>
						</div>
					</section>
				)
			}}
		/>
	)
}
