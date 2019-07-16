import React from "react"

const Col = (props) => (
	<div className={`col ${props.styleName || ''}`}>
		{props.children}
	</div>
)

export { Col };
