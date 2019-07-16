import React from "react"
import {Link} from 'gatsby'
import styles from "../sass/modules/header.module.scss"

const Header = () => (
	<header role="banner" className={styles.container}>
		<div className="container">
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</nav>
		</div>
	</header>
)

export { Header };
