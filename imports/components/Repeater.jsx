import React from 'react';
import connectField from 'uniforms/connectField';
import { Checkbox, Button, Input } from 'antd';

class Repeater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      text: ''
    }
    this.addAnother = this.addAnother.bind(this);
    this.addNewCheckbox = this.addNewCheckbox.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.checkText = this.checkText.bind(this);
    this.closeAndClear = this.closeAndClear.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
  }

  addAnother() {
    this.setState({ add: true });
  }

  addNewCheckbox() {
    const { text } = this.state;
    const { list } = this.props;
    list.push(text);
    this.setState({ add: false });
  }

  handleChangeText({ target: { value } }) {
    this.setState({ text: value });
  }

  checkText() {
    const { text } = this.state;
    if (text) return false;
    return true;
  }

  closeAndClear() {
    this.setState({ text: '', add: false });
  }

  onChangeCheckBox(val) {
    const { onChange } = this.props;
    onChange(val);
  }

  render() {
    const { list, id } = this.props;
    const { add } = this.state;
    const options = list.map(e => ({ label: e, value: e }));
    return (
      <section id={id}>
        <Checkbox.Group
          options={options}
          onChange={val => this.onChangeCheckBox(val)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 2,
          }}
        />
        {add ? (
          <Input.Group compact>
            <Input style={{ width: '30%', margin: '2px 0 2px 2px' }} onChange={this.handleChangeText} />
            <Button style={{ background: 'red', color: 'white', margin: '2px 2px 2px 0' }} type="danger" onClick={this.closeAndClear}>
              Delete
            </Button>
          </Input.Group>
        ) : false}
        {add ? (
          <Button style={{ margin: 2 }} onClick={this.addNewCheckbox} disabled={this.checkText()}>
            Add
          </Button>
        ) : (
          <Button style={{ margin: 2 }} onClick={this.addAnother}>
            <b>+</b>Add another
          </Button>
        )}
      </section>
    );
  }
}

export default connectField(Repeater);