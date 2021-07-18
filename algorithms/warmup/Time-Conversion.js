function timeConversion(date) {
  const meridiem = date.substring(8, 10);
  const minutes = date.substring(3, 5);
  const seconds = date.substring(6, 8);
  let hours = Number(date.substring(0, 2));
  
  hours += ((meridiem === ('PM') && hours != 12) ? 12 : 0);
  hours -= ((meridiem === ('AM') && hours == 12) ? 12 : 0);

  return `${hours < 10 ? '0' : '' }${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion('06:40:03AM'));