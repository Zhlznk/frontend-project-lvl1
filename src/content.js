const randomNum = () => (Math.floor(Math.random() * 100));

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const content = (str) => {
  const result = [];
  let textQuestion = '';
  let answerCorrect = '';
  let numOne = randomNum();
  const numTwo = randomNum();

  if (str === 'even') {
    const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');
    textQuestion = numOne;
    answerCorrect = isEven(numOne);
  }
  if (str === 'calc') {
    const tmp = ['+', '-', '*'];
    const item = getRandomInt(3);
    textQuestion = `${numOne} ${tmp[item]} ${numTwo}`;
    if (item === 0) answerCorrect = (`${numOne + numTwo}`);
    if (item === 1) answerCorrect = (`${numOne - numTwo}`);
    if (item === 2) answerCorrect = (`${numOne * numTwo}`);
  }
  if (str === 'gcd') {
    textQuestion = `${numOne} ${numTwo}`;
    if (numOne === 0 || numTwo === 0) {
      answerCorrect = '0';
    } else {
      let divider = (numOne < numTwo) ? Math.floor(numOne / 2) : Math.floor(numTwo / 2);
      while ((numOne % divider) + (numTwo % divider) !== 0) divider -= 1;
      answerCorrect = `${divider}`;
    }
    result.push(textQuestion, answerCorrect);
  }
  if (str === 'progression') {
    const tmp = [numOne];
    while (tmp.length < 10) tmp.push(tmp[tmp.length - 1] + numTwo);
    const element = getRandomInt(tmp.length);
    answerCorrect = `${tmp[element]}`;
    tmp[element] = '..';
    textQuestion = tmp.join(' ');
  }
  if (str === 'prime') {
    const isPrime = (num) => {
      if (num < 1) return 'no';
      if (num === 1 || num === 2 || num === 3) return 'yes';
      for (let divider = 2; divider <= num / 2; divider += 1) {
        if (num % divider === 0) return 'no';
      }
      return 'yes';
    };
    const needPrime = (num) => ((isPrime(num) === 'yes') ? num : needPrime(num + 1));
    if (getRandomInt(2)) numOne = needPrime(numOne);
    textQuestion = `${numOne}`;
    answerCorrect = `${isPrime(numOne)}`;
  }
  result.push(textQuestion, answerCorrect);
  return result;
};

export default content;
