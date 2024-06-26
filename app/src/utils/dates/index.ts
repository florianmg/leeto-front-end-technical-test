import {
  differenceInDays,
  differenceInMonths,
  differenceInWeeks,
  differenceInYears,
  parseISO,
} from 'date-fns';

export const buildRemainingTimeString = (closingDate: string) => {
  const closeDate = parseISO(closingDate);
  const today = new Date();
  const daysUntilClose = differenceInDays(closeDate, today);

  if (daysUntilClose < 7) {
    return `Se cloture dans ${daysUntilClose} jour${daysUntilClose > 1 ? 's' : ''}`;
  }

  if (daysUntilClose < 30) {
    const weeksUntilClose = differenceInWeeks(closeDate, today);
    return `Se cloture dans ${weeksUntilClose} semaine${weeksUntilClose > 1 ? 's' : ''}`;
  }

  if (daysUntilClose < 365) {
    const monthsUntilClose = differenceInMonths(closeDate, today);
    return `Se cloture dans ${monthsUntilClose} mois`;
  }

  const yearsUntilClose = differenceInYears(closeDate, today);
  return `Se cloture dans ${yearsUntilClose} an`;
};

export const buildPassedTimeString = (closingDate: string) => {
  const closeDate = parseISO(closingDate);
  const today = new Date();
  const daysSinceClose = differenceInDays(today, closeDate);

  if (daysSinceClose < 7) {
    return `Cloturée depuis ${daysSinceClose} jour${daysSinceClose > 1 ? 's' : ''}`;
  }

  if (daysSinceClose < 30) {
    const weeksSinceClose = differenceInWeeks(today, closeDate);
    return `Cloturée depuis ${weeksSinceClose} semaine${weeksSinceClose > 1 ? 's' : ''}`;
  }

  if (daysSinceClose < 365) {
    const monthsSinceClose = differenceInMonths(today, closeDate);
    return `Cloturée depuis ${monthsSinceClose} mois`;
  }

  const yearsSinceClose = differenceInYears(today, closeDate);
  return `Cloturée depuis ${yearsSinceClose} an`;
};
