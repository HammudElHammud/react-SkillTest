import React from "react";

const PrimaryButton = (props) => {
	return (<button
		type={props.type}
		className={"btn " + (props.disabled ? 'disabled' : '')}
		style={{
			padding: '7.5px 20px', background: '#5DADE2', cursor: 'pointer', color: 'white', borderRadius: 0
		}}
		onClick={props.onClick}
	>{props.text}</button>)
}

export default PrimaryButton
