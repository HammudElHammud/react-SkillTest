import React from "react";

const FormSelect = (props) => {
	return (<><select
			className="form-input"
			value={props.value ?? ''}
			onChange={props.onChange}
		>
			<option className={'text-black'} value={''}>
				{props.placeholder}
			</option>
			{Object.keys(props.options).map((key) => {
				return <option className={'text-black'}
					key={key}
					value={key}
				>
					{props.options[key]}
				</option>
			})}
		</select>
		{props.error && <span
			className="d-block py-2 error">
				{props.error}
			</span>}
		</>)
}

export default FormSelect;
