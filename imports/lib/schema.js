import SimpleSchema from 'simpl-schema';
import moment from 'moment';

export const schema = new SimpleSchema({
  datePicker: {
    type: Date,
    defaultValue: [moment('2018-11-01'), moment('2018-11-30')]
  },
  timePicker: {
    type: Date,
    defaultValue: {
      start: moment('000000', 'hmmss'),
      end: moment('235959', 'hmmss')
    }
  }
});
