import React from 'react';
import { TimePicker } from 'antd';
import connectField from 'uniforms/connectField';
import moment from 'moment';

import {
  disabledStartHours, disabledStartMinutes, disabledStartSeconds,
  disabledEndHours, disabledEndMinutes, disabledEndSeconds
} from './helpers/disabledTime';
import { checkStart, checkEnd } from './helpers/checkTime';

class TimeRange extends React.Component {
  render() {
    const { onChange, value: { start, end }, ...rest } = this.props;
    const valueStart = start ? moment(start, 'HH:mm:ss') : null;
    const valueEnd = end ? moment(end, 'HH:mm:ss') : null;
    return (
      <section>
        <TimePicker
          value={valueStart}
          onChange={time => checkStart(onChange, time, end)}
          disabledHours={() => disabledStartHours(valueEnd)}
          disabledMinutes={(h) => disabledStartMinutes(valueEnd, h)}
          disabledSeconds={(h, m) => disabledStartSeconds(valueEnd, h, m)}
          style={{
            width: 167,
            margin: 2
          }}
          {...rest}
        />
        <TimePicker
          value={valueEnd}
          onChange={time => checkEnd(onChange, time, start)}
          disabledHours={() => disabledEndHours(valueStart)}
          disabledMinutes={(h) => disabledEndMinutes(valueStart, h)}
          disabledSeconds={(h, m) => disabledEndSeconds(valueStart, h, m)}
          style={{
            width: 167,
            margin: 2
          }}
          {...rest}
        />
      </section>
    );
  }
}

export default connectField(TimeRange);