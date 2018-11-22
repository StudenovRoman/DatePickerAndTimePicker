import moment from 'moment';

export const checkStart = (onChange, time, end) => {
  const ss = moment(time).second();
  const es = moment(end).second();
  const sm = moment(time).minute();
  const em = moment(end).minute();
  const sh = moment(time).hour();
  const eh = moment(end).hour();
  if (sh === eh && sm === em && ss === es) {
    const newEnd = moment(time).second(es - 1);
    return onChange({ start: newEnd, end});
  }
  if (sh === eh && sm === em && ss >= es) {
    const newEnd = moment(time).second(es - 1);
    return onChange({ start: newEnd, end});
  }
  if (sh === eh && sm >= em) {
    const newEnd = moment(time).minute(em - 1);
    return onChange({ start: newEnd, end});
  }
  if (eh === 0 && em === 0 && es === 0) {
    const newEnd = moment('000000', 'hmmss');
    return onChange({ start: newEnd, end});
  }
  if (sh >= eh) {
    const newEnd = moment(time).hour(eh).minute(em).second(es - 1);
    return onChange({ start: newEnd, end});
  }
  return onChange({ start: time, end});
}

export const checkEnd = (onChange, time, start) => {
  const ss = moment(start).second();
  const es = moment(time).second();
  const sm = moment(start).minute();
  const em = moment(time).minute();
  const sh = moment(start).hour();
  const eh = moment(time).hour();
  if (sh === eh && sm === em && ss === es) {
    const newEnd = moment(time).second(ss + 1);
    return onChange({ start, end: newEnd });
  }
  if (sh === eh && sm === em && ss >= es) {
    const newEnd = moment(time).second(ss + 1);
    return onChange({ start, end: newEnd })
  }
  if (sh === eh && sm >= em) {
    const newEnd = moment(time).minute(sm + 1);
    return onChange({ start, end: newEnd });
  }
  if (sh >= eh) {
    const newEnd = moment(time).hour(sh).minute(sm).second(ss + 1);
    return onChange({ start, end: newEnd });
  }
  return onChange({ start, end: time});
}