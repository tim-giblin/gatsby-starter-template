import React from "react"

const Row = (props) => (
	<div className={`row ${props.styleName || ''}`}>
		{props.children}
	</div>
)

export { Row };
