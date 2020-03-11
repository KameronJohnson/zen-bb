import React from 'react'

export default function Contact() {
	return (
		<section className="contact">
			<h1 className="text-center">Contact</h1>
			<div className="row">
				<div className="col-10 col-sm-8 col-md-6 mx-auto">
					<form action="https://formspree.io/kameronjohnson@gmail.com" method="POST">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" className="form-control" name="name" id="name"></input>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="text" className="form-control" name="email" id="email"></input>
						</div>
						<div className="form-group">
							<label htmlFor="description">Descripton</label>
							<textarea type="text" className="form-control" name="description" id="description" rows="5"></textarea>
						</div>
						<button className="button form-button btn-block" type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
