import React from 'react';
import AutoForm from 'uniforms-antd/AutoForm';

import { schema } from '../lib/schema';
import { DatePickerConnect } from './date';
import { TimeRangeConnect } from './time';

import 'antd/dist/antd.css';

export const Application = () => (
  <AutoForm schema={schema}>
    <DatePickerConnect name="datePicker" />
    <TimeRangeConnect name="timePicker" />
  </AutoForm>
);