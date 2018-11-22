import moment from 'moment';

const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

export const disabledStartHours = (end) => {
  if (end) {
    const h = moment(end).hour();
    const array = range(0, 24).splice(h + 1, 24);
    return array;
  }
  return [];
}

export const disabledStartMinutes = (end, hour) => {
  const h = moment(end).hour();
  if (h === hour) {
    const m = moment(end).minute();
    const array = range(0, 60).splice(m + 1, 60);
    return array;
  }
  return [];
}

export const disabledStartSeconds = (end, hour, minute) => {
  const h = moment(end).hour();
  const m = moment(end).minute();
  if (h === hour && m === minute) {
    const s = moment(end).second();
    const array = range(0, 60).splice(s, 60);
    return array;
  }
  return [];
}

export const disabledEndHours = (start) => {
  if (start) {
    const h = moment(start).hour();
    const array = range(0, 24).splice(0, h);
    return array;
  }
  return [];
}

export const disabledEndMinutes = (start, hour) => {
  const h = moment(start).hour();
  if (h === hour) {
    const m = moment(start).minute();
    const array = range(0, 60).splice(0, m);
    return array;
  }
  return [];
}

export const disabledEndSeconds = (start, hour, minute) => {
  const h = moment(start).hour();
  const m = moment(start).minute();
  if (h === hour && m === minute) {
    const s = moment(start).second();
    const array = range(0, 60).splice(0, s + 1);
    return array;
  }
  return [];
}