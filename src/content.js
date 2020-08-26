const content = (str) => {
  if (str === 'even') {
    const result = [];
    const num = Math.floor(Math.random() * 100);
    const answerCorrect = () => ((num % 2 === 0) ? 'yes' : 'no');
    result.push(num, answerCorrect(num));
    return result;
  }
  if (str === 'calc') {
    const result = [];
    const tmp = ['+', '-', '*'];
    const first = Math.floor(Math.random() * 100);
    const second = Math.floor(Math.random() * 100);
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const item = getRandomInt(3);
    let answerCorrect = 0;
    if (item === 0) answerCorrect = (first + second);
    if (item === 1) answerCorrect = (first - second);
    if (item === 2) answerCorrect = (first * second);
    result.push(`${first} ${tmp[item]} ${second}`, `${answerCorrect}`);
    return result;
  }
  return 100500;
};

export default content;
