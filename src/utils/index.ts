export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("ru-RU").format(num);
};

export const formatDateToDDMMYYYY = (isoDate: string): string => {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const getDaysFromDateToToday = (dateString: string): number => {
  const inputDate = new Date(dateString);
  const today = new Date();

  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffInMs = today.getTime() - inputDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
};
