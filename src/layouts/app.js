import React from "react"
import { Head, Footer, Header } from "../components"

import '../sass/main.scss'

export default ({ children, location }) => (
	<div className="grid">
		<Head pathname={location.pathname} />
		<Header />
		<main className="wrap" role="main">
			{children}
		</main>
		<Footer />
	</div>
)