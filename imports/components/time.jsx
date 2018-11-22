import React from 'react';
import { TimePicker } from 'antd';
import connectField from 'uniforms/connectField';

import {
  disabledStartHours, disabledStartMinutes, disabledStartSeconds,
  disabledEndHours, disabledEndMinutes, disabledEndSeconds
} from './helpers/disabledTime';
import { checkStartSeconds, checkEndSeconds } from './helpers/checkTime';

const TimeRange = ({ onChange, value: { start, end } }) => (
  <section>
    <TimePicker
      value={start}
      onChange={time => checkStartSeconds(onChange, time, end)}
      disabledHours={() => disabledStartHours(end)}
      disabledMinutes={(h) => disabledStartMinutes(end, h)}
      disabledSeconds={(h, m) => disabledStartSeconds(end, h, m)}
      style={{
        width: 167,
        margin: 2
      }}
    />
    <TimePicker
      value={end}
      onChange={time => checkEndSeconds(onChange, time, start)}
      disabledHours={() => disabledEndHours(start)}
      disabledMinutes={(h) => disabledEndMinutes(start, h)}
      disabledSeconds={(h, m) => disabledEndSeconds(start, h, m)}
      style={{
        width: 167,
        margin: 2
      }}
    />
  </section>
);

export const TimeRangeConnect = connectField(TimeRange);