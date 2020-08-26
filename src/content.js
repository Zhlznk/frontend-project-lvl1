const randomNum = () => (Math.floor(Math.random() * 100));

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const content = (str) => {
  const result = [];
  let answerCorrect = '';
  const numOne = randomNum();
  const numTwo = randomNum();

  if (str === 'even') {
    answerCorrect = () => ((numOne % 2 === 0) ? 'yes' : 'no');
    result.push(numOne, answerCorrect(numOne));
  }
  if (str === 'calc') {
    const tmp = ['+', '-', '*'];
    const item = getRandomInt(3);
    if (item === 0) answerCorrect = (numOne + numTwo);
    if (item === 1) answerCorrect = (numOne - numTwo);
    if (item === 2) answerCorrect = (numOne * numTwo);
    result.push(`${numOne} ${tmp[item]} ${numTwo}`, `${answerCorrect}`);
  }
  if (str === 'gcd') {
    result.push('1', '25');
  }
  return result;
};

export default content;
