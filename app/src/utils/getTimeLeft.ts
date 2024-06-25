/**
 * Get the time left before a closing date
 * - Returns an object with the value and unit of time left
 *    - If the time left is less than 7 days, the unit is days
 *    - If the time left is less than 30 days, the unit is weeks
 *    - If the time left is more than 30 days, the unit is months
 */
export const getTimeLeft = (closingDate: string) => {
  const closingDateObj = new Date(closingDate);
  const currentDate = new Date();
  const timeLeftInMilliseconds =
    closingDateObj.getTime() - currentDate.getTime();
  const timeLeftInDays = timeLeftInMilliseconds / (1000 * 60 * 60 * 24);

  if (timeLeftInDays < 7) {
    return {
      value: Math.floor(timeLeftInDays),
      unit: 'days',
    };
  } else if (timeLeftInDays < 30) {
    return {
      value: Math.floor(timeLeftInDays / 7),
      unit: 'weeks',
    };
  } else {
    return {
      value: Math.floor(timeLeftInDays / 30),
      unit: 'months',
    };
  }
};
