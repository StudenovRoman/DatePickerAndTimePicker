import moment from 'moment';

export const checkStartSeconds = (onChange, time, end) => {
  const s = moment(time).second();
  const e = moment(end).second();
  if (s === e) {
    const newEnd = moment(time).second(e - 1);
    return onChange({ start: newEnd, end})
  }
  return onChange({ start: time, end})
}

export const checkEndSeconds = (onChange, time, start) => {
  const s = moment(start).second();
  const e = moment(time).second();
  if (s === e) {
    const newEnd = moment(time).second(e + 1);
    return onChange({ start, end: newEnd});
  }
  return onChange({ start, end: time});
}