import React from "react";

const SecondaryButton = (props) => {
	return (<button
			type={props.type}
			className={"btn " + (props.disabled ? 'disabled' : '')}
			style={{
				padding: '7.5px 20px', background: '#F7DC6F', cursor: 'pointer', color: 'black', borderRadius: 0
			}}
			onClick={props.onClick}
	>{props.text}</button>)
}

export default SecondaryButton
