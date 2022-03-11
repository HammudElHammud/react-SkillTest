import React from "react";

const FormInput = (props) => {
	return (<>
			<input
				className="form-input animate__animated animate__fadeIn"
				type={props.type ?? 'text'}
				placeholder={props.placeholder}
				value={props.value ?? ''}
				onChange={props.onChange}
			/>
			{props.error && <span
				className="d-block py-2 error">
					{props.error}
				</span>}
		</>)
}


export default FormInput
