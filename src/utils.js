const getRandomIntInclusive = (min, max) => {
  const low = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - low + 1)) + low;
};

export default getRandomIntInclusive;
