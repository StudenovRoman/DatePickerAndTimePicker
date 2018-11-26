import SimpleSchema from 'simpl-schema';

export const schema = new SimpleSchema({
  datePicker: {
    type: Object
  },
  "datePicker.start": {
    type: Date
  },
  "datePicker.end": {
    type: Date
  },
  timePicker: {
    type: Object
  },
  "timePicker.start": {
    type: Date
  },
  "timePicker.end": {
    type: Date
  },
  repeater: {
    type: Array,
    optional: true
  },
  "repeater.$": {
    type: String
  }
});
