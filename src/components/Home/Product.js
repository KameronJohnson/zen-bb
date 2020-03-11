import React from 'react'
import Img from 'gatsby-image'


export default function Product({ product }) {
	return (
		<div className="mx-auto my-3 col-lg-6 col-md-6 col-sm-8">
			<div className="card" style={{ minHeight: "100%" }}>
				<Img fluid={product.image.fluid} className="card-img-top product-image" />
				<div className="card-body text-center">
					<h6>{product.title}</h6>
					<h6>${product.price}</h6>
					<button className="button product-button">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}
