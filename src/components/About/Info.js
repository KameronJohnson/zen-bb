import React from 'react'
import { Link } from 'gatsby'

export default function Info() {
	return (
		<section className="info">
			<div className="container">
				<div className="row">
					<div className="col-10 col-sm-8 mx-auto text-center">
						<p className="lead text-muted mb-5">
							Hello From About
						</p>
						<Link to="/">
							<button className="button">Go Home</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

