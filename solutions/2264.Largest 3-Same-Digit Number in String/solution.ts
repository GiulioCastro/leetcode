function largestGoodInteger(num: string): string {
  let maximumGoodNumber = '';
  let maximumGoodNumberDigit = -1;
  let currentGoodNumber = '';
  let currentGoodNumberDigit = -1;

  for (let i = 0; i < num.length; i++) {
    let currentNumberStr = num[i];
    let currentNumber = Number(currentNumberStr);
    
    if(currentGoodNumberDigit === currentNumber) {
      currentGoodNumber += currentNumberStr;
    } else {
      currentGoodNumber = currentNumberStr;
      currentGoodNumberDigit = currentNumber;
    }

    if((currentGoodNumber.length === 3) && (currentGoodNumberDigit > maximumGoodNumberDigit)) {
      maximumGoodNumber = currentGoodNumber;
      maximumGoodNumberDigit = currentGoodNumberDigit;
      currentGoodNumber = '';
      currentGoodNumberDigit = -1;
    }
  }

  return maximumGoodNumber;
};