import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Picker, Item } from 'native-base';

const Select = ({ data, onValueChange, selectedValue, value, onChange, ...props }) => {
  return Platform.OS === 'ios' ? (
    <Item>
      <Picker onValueChange={onValueChange || onChange} selectedValue={selectedValue || value} {...props}>
        {data.map((option, idx) => <Picker.Item key={idx} label={option.label} value={option.value} />)}
      </Picker>
    </Item>
  ) : (
    <Picker onValueChange={onValueChange || onChange} selectedValue={selectedValue || value} {...props}>
      {data.map((option, idx) => <Picker.Item key={idx} label={option.label} value={option.value} />)}
    </Picker>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  onValueChange: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  selectedValue: PropTypes.string
};

export default Select;