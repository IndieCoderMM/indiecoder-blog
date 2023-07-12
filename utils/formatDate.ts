const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-us', {
    day: '2-digit',
    year: 'numeric',
    month: 'short',
  });
};

export default formatDate;
