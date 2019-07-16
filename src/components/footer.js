import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styles from "../sass/modules/footer.module.scss"

const Footer = () => {
	const {
		site: {
		  siteMetadata: {title},
		},
	  } = useStaticQuery(graphql`
		query SiteMetadata {
		  site {
			siteMetadata {
			  title
			}
		  }
		}
	  `)

	return (
	<footer role="contentinfo" className={styles.container}>
		<div className="container">
			Copyright &copy; 2019 {title}. All rights reserved.
		</div>
	</footer>
	)
}

export { Footer };
