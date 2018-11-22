import React from 'react';
import { DatePicker } from 'antd';
import connectField from 'uniforms/connectField';

const DateRange = ({ onChange, value }) => (
  <DatePicker.RangePicker
    onChange={dates => onChange(dates)}
    value={value}
    style={{
      margin: 2,
      width: 338
    }}
  />
);

export const DatePickerConnect = connectField(DateRange);