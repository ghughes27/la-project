const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// use getTime and getMonthDay as helpers on ISO date string to display startTime
export const getTime = timestamp => {
  let d = new Date(timestamp);
  let hours = d.getHours();
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  let minutes = `0${d.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
};

export const getMonthDay = timestamp => {
  let d = new Date(timestamp);
  return `${day[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
};

// create constant to check whether events occur on same day
export const standardDate = timestamp => {
  let d = new Date(timestamp);
  let standard = d.toISOString();
  // console.log(standard, "standard date");
  return `${standard}`;
};
