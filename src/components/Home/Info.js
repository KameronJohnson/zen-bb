import React from 'react'
import { Link } from 'gatsby'

export default function Info() {
	return (
		<section className="info">
			<div className="container">
				<div className="row">
					<div className="col-10 col-sm-8 mx-auto text-center">
						<p className="lead text-muted mb-5">
							Hello From Info
						</p>
						<Link to="/about/">
							<button className="button">Info Button</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

