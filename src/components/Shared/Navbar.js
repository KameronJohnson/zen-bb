import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {

	state = {
		navbarOpen: false,
		css: 'collapse navbar-collapse',
		links: [
			{
				id: 1,
				path: '/',
				text: 'home'
			}, {
				id: 2,
				path: '/about',
				text: 'about'
			}
		],
	}

	navbarHandler = () => {
		this.state.navbarOpen ? this.setState({
			navbarOpen: false,
			css: "collapse navbar-collapse"
		}
		) : this.setState({
			navbarOpen: true,
			css: "collapse navbar-collapse show"
		}
		)
	}

	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-custom fixed-top">
				<button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
					<span className="navbar-toggler-icon" />
				</button>
				<div className={this.state.css}>
					<ul className="navbar-nav mx-auto">
						{this.state.links.map((link) => (
							<li className="nav-item" key={link.id}>
								<Link to={link.path} className="nav-link nav-link-custom text-uppercase">{link.text}</Link>
							</li>
						))}
						<li className="nav-item ml-sm-3">
							<a class="snipcart-checkout">
								<FaCartArrowDown className="cart-icon nav-link-custom" />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
