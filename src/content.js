const content = (str) => {
  if (str === 'even') {
    const result = [];
    const num = Math.floor(Math.random() * 100);
    const answerCorrect = () => ((num % 2 === 0) ? 'yes' : 'no');
    result.push(num, answerCorrect(num));
    return result;
  }
  if (str === 'd') return 10500;
  return 444;
};

export default content;
