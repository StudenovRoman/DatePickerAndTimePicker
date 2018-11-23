import moment from 'moment';

export const checkStart = (onChange, time, end) => {
  if (!time) return onChange({ start: null, end });
  const ss = moment(time, 'HH:mm:ss').second();
  const es = moment(end, "HH:mm:ss").second();
  const sm = moment(time, 'HH:mm:ss').minute();
  const em = moment(end, 'HH:mm:ss').minute();
  const sh = moment(time, 'HH:mm:ss').hour();
  const eh = moment(end, 'HH:mm:ss').hour();
  let newStart = null;
  if (sh === eh && sm === em && (ss === es || ss >= es)) {
    newStart = moment(time).second(es - 1);
  }
  if (sh === eh && sm >= em) {
    newStart = moment(time).minute(em - 1);
  }
  if (eh === 0 && em === 0 && es === 0) {
    newStart = moment().hour(0).minute(0).second(0);
  }
  if (sh >= eh) {
    newStart = moment(time).hour(eh).minute(em).second(es - 1);
  }
  const newTime = newStart ? newStart : time;
  return onChange({ start: moment(newTime).toDate(), end });
};

export const checkEnd = (onChange, time, start) => {
  if (!time) return onChange({ start, end: null });
  const ss = moment(start, 'HH:mm:ss').second();
  const es = moment(time, 'HH:mm:ss').second();
  const sm = moment(start, 'HH:mm:ss').minute();
  const em = moment(time, 'HH:mm:ss').minute();
  const sh = moment(start, 'HH:mm:ss').hour();
  const eh = moment(time, 'HH:mm:ss').hour();
  let newEnd = null;
  if (sh === eh && sm === em && (ss === es || ss >= es)) {
    newEnd = moment(time).second(ss + 1);
  }
  if (sh === eh && sm >= em) {
    newEnd = moment(time).minute(sm + 1);
  }
  if (sh >= eh) {
    newEnd = moment(time).hour(sh).minute(sm).second(ss + 1);
  }
  const newTime = newEnd ? newEnd : time;
  return onChange({ start, end: moment(newTime).toDate() });
};
