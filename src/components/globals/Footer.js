import React from 'react'

export default function Footer() {
	return (
		<footer class="page-footer font-small bg-dark pt-4">
  			<div class="container-fluid text-center">
    			<div class="row">
					<div className="col-12">
						<h5 class="text-uppercase">Footer Content</h5>
						<p>Footer stuff</p>
					</div>
					<hr class="clearfix w-100 d-md-none pb-3"/>
				</div>
  			</div>
			<div class="footer-copyright text-center py-3">All Rights Reserved &copy;{new Date().getFullYear().toString()}</div>
		</footer>
	)
}
