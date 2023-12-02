function formatTime(isoDateTime) {
  const dateObject = new Date(isoDateTime);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };
  return dateObject.toLocaleTimeString('en-US', options);
}

export default formatTime;
