import moment from 'moment';

export const checkDate = (onChange, time) => {
  if (!time.length) return onChange({ start: null, end: null });
  return onChange({ start: moment(time[0]).toDate(), end: moment(time[1]).toDate() });
};