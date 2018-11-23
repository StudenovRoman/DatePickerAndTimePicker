import React from 'react';
import AutoForm from 'uniforms/AutoForm';
import SubmitField from 'uniforms-antd/SubmitField';
import ErrorsField from 'uniforms-antd/ErrorsField';

import { schema } from '../lib/schema';
import DateRange from './DateRange';
import TimeRange from './TimeRange';

import 'antd/dist/antd.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(...args) {
    console.log('onChange model', ...args);
  }

  render() {
    return (
      <AutoForm
        schema={schema}
        label={false}
        spaing={3}
        onChange={this.onChange}
        onSubmit={model => console.log('onSubmit', model)}
        onSubmitFailure={model => console.log('onSubmitFailure', model)}
        onSubmitSuccess={model => console.log('onSubmitSuccess', model)}  
      >
        <section className="section">
          <DateRange name="datePicker" />
        </section>
        <section className="section">
          <TimeRange name="timePicker" />
        </section>
        <ErrorsField />
        <SubmitField />  
      </AutoForm>
    );
  }
}

export default App;