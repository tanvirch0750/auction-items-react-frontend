function formatDate(inputDate) {
  const dateObject = new Date(inputDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return dateObject.toLocaleDateString('en-US', options);
}

export default formatDate;
