const formatSeconds = (value: number) => {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor(value / 60) % 60;
  const seconds = value % 60;

  const timeFormated = [hours, minutes, seconds]
    .map(item => (item < 10 ? `0${item}` : item))
    .filter((item, index) => item !== '00' || index > 0)
    .join(':');

  return timeFormated;
};

export default formatSeconds;
