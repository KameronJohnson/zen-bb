import React from 'react'
import { Link } from "gatsby"

import zenFrog from '../../images/zen-frog.png'

export default function Hero() {
	// TODO: BRING IN ALL TEXT & IMAGES FROM CONTENTFUL
	return (
		<section className="hero">
			<div class="container-fluid">
				<div class="row">
					<div class="center-content">
						<h1 className="tagline">Zen Bodybuilding</h1>
						<img src={zenFrog} className="zen-frog img-fluid" alt="logo"></img>
						<Link className="button">Hero Button</Link>
					</div>
				</div>
			</div>
		</section>
	)
}








