import React from 'react'
import { Link } from "gatsby"

import zenFrog from '../../images/zen-frog.png'

export default function Hero() {
	return (
		<section className="hero">
			<div class="center-content">
				<h1 className="tagline">Zen Bodybuilding</h1>
				<div className="d-flex justify-content-center">
					<img src={zenFrog} className="zen-frog"></img>
				</div>
				<a className="button">Hero Button</a>
			</div>
		</section>
	)
}







