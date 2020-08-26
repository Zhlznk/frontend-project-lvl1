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
    const num = 100;
    const answerCorrect = 500;
    result.push(num, answerCorrect);
    return result;
  }
  return 500;
};

export default content;
