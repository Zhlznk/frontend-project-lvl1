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
    if (numOne === 0 || numTwo === 0) {
      answerCorrect = 0;
    } else {
      let divider = (numOne < numTwo) ? Math.floor(numOne / 2) : Math.floor(numTwo / 2);
      while ((numOne % divider) + (numTwo % divider) !== 0) divider -= 1;
      answerCorrect = divider;
    }
    result.push(`${numOne} ${numTwo}`, `${answerCorrect}`);
  }
  if (str === 'progression') {
    const tmp = [numOne];
    while (tmp.length < 10) tmp.push(tmp[tmp.length - 1] + numTwo);
    const element = getRandomInt(tmp.length);
    answerCorrect = tmp[element];
    tmp[element] = '..';
    result.push(tmp.join(' '), `${answerCorrect}`);
  }

  return result;
};

export default content;
