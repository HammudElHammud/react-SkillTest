import React from "react";

const FormMultiselect = (props) => {
	const currentOptions = () => {
		const availableOptions = [];
		Object.keys(props.options).forEach((key) => {
			if (props.values.indexOf(key) === -1) {
				availableOptions.push(<option  className={'text-black'}
					key={key}
					value={key}
				>
					{props.options[key]}
				</option>)
			}
		})

		return availableOptions;
	}

	return (<><select
		className="form-input"
		value={''}
		onChange={props.onChange}
	>
		<option value={''} className={'text-black'}>
			{!props.values.length ? props.placeholder : props.values.join(', ')}
		</option>
		{currentOptions()}
	</select>
		{
			props.values.map(value => {
				return <div key={"options-" + value} className="d-inline-block px-1 mx-1 mt-1 bg-primary text-white">
					<div className="d-flex justify-content-between align-content-center">
						<span>{value}</span>
						<div className="d-flex flex-column justify-content-center px-1">
							<div className="multi-select-close-btn" onClick={() => {
								props.onDelete(value)
							}}>x</div>
						</div>
					</div>
				</div>
			})
		}
		{props.error && <span
			className="d-block py-2 error">
				{props.error}
			</span>}
	</>)
}

export default FormMultiselect;
