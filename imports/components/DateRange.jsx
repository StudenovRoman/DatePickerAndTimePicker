import React from 'react';
import { DatePicker } from 'antd';
import connectField from 'uniforms/connectField';
import moment from 'moment';

import { checkDate } from './helpers/checkDate';

class DateRange extends React.Component {
  render() {
    const { onChange, value: { start, end }, ...rest } = this.props;
    const valueDate = start && end ? [moment(start), moment(end)] : null;
    return (
      <DatePicker.RangePicker
        onChange={dates => checkDate(onChange, dates)}
        value={valueDate}
        style={{
          margin: 2,
          width: 338
        }}
        {...rest}
      />
    );
  }
}

export default connectField(DateRange);