/**
 * Format a date string in a user-friendly way
 * @param {string} dateString - A valid date string.
 * @returns {string} The formatted date in the format "DD MMM YYYY".
 */
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date string!');
    }

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      year: 'numeric',
      month: 'short',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch (error: any) {
    console.error('Error formatting date: ', error.message);
    return 'Invalid date';
  }
};

export default formatDate;
