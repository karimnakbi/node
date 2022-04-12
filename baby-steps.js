const work = process.argv
  .filter((el, index) => {
    if (index > 1) {
      return el;
    }
  })
  .map((el) => {
    return parseInt(el);
  })
  .reduce((prev, current) => {
    return (prev += current);
  }, 0);

console.log(work);