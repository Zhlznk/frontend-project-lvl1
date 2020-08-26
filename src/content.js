const randomNum = () => (Math.floor(Math.random() * 100));

const content = (str) => {
  const result = [];
  if (str === 'even') {
    const num = randomNum();
    const answerCorrect = () => ((num % 2 === 0) ? 'yes' : 'no');
    result.push(num, answerCorrect(num));
  }
  if (str === 'calc') {
    const tmp = ['+', '-', '*'];
    const first = randomNum();
    const second = randomNum();
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const item = getRandomInt(3);
    let answerCorrect = 0;
    if (item === 0) answerCorrect = (first + second);
    if (item === 1) answerCorrect = (first - second);
    if (item === 2) answerCorrect = (first * second);
    result.push(`${first} ${tmp[item]} ${second}`, `${answerCorrect}`);
  }
  return result;
};

export default content;
