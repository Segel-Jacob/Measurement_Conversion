import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { mToF, fToM } from '../utils/conversionUtils';
import Conversion from './Conversion';
import './ConversionComp.css';
import 
{
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';
import { METERS_TO_FEET, FEET_TO_METERS } from '../utils/constants';

const tabClasses = {
  root: 'tab',
  selected: 'selected',
};

export const ConversionComp = () => {
  const [meters, setMeters] = useState('');
  const [feet, setFeet] = useState('');
  const [value, setValue] = useState(METERS_TO_FEET);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const onMetersChange = (e) => {
    const newValue = parseInt(e.target.value);

    if (newValue) {
      setMeters(newValue);
      setFeet(mToF(newValue));
    } else {
      setMeters('');
      setFeet('');
    }
  }

  const onFeetChange = (e) => {
    const newValue = parseInt(e.target.value);
    

    if (newValue) {
      setFeet(newValue);
      setMeters(fToM(newValue));
    } else {
      setFeet('');
      setMeters(''); 
    }
  }

  return (
    <div className="convert">
      <AppBar
        position="static"
        className="appBar"
      >
        <Tabs
          classes={{
            root: 'convert-tabs',
            indicator: 'indicator',
          }}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Meter to Feet" classes={tabClasses} value={METERS_TO_FEET} />
          <Tab label="Feet to Meter" classes={tabClasses} value={FEET_TO_METERS} />
        </Tabs>
      </AppBar>
      <Conversion
        meters={meters}
        feet={feet}
        onMetersChange={onMetersChange}
        onFeetChange={onFeetChange}
        type={value}
      />
    </div>
  );
}

ConversionComp.propTypes = {
  value: PropTypes.string,
}

export default ConversionComp;

