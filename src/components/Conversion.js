import React from 'react';
import PropTypes from 'prop-types';
import {
  OutlinedInput,       
  Box 
} from '@material-ui/core';
import { METERS_TO_FEET } from '../utils/constants';

const Conversion = ({
	meters,
	feet,
	onMetersChange,
	onFeetChange,
	type,
}) => {

	if (type === METERS_TO_FEET) {
		return (
			<div>
				<Box ml={2} pb={7}>
					<p>Meter</p>
					<OutlinedInput
						className="inputBox"
						value={meters}
						onChange={onMetersChange}
					/>
					<p>Feet</p>
					<OutlinedInput className="inputBox" value={feet} readOnly />
				</Box>
			</div>
		);
	}

	return (
		<div>
			<Box ml={2} pb={7}>
				<p>Feet</p>
				<OutlinedInput
					className="inputBox"
					value={feet}
					onChange={onFeetChange}
				/>
				<p>Meter</p>
				<OutlinedInput className="inputBox" value={meters} readOnly />
			</Box>
		</div>
	)
}

Conversion.propTypes = {
	meters: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	feet: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	onMetersChange: PropTypes.func.isRequired,
	onFeetChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
}

export default Conversion;
