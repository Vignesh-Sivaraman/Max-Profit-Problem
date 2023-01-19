function maxProfit(time) {
  let propertyDetails = [
    {
      property: "T",
      buildTime: 5,
      earnings: 1500,
    },
    { property: "P", buildTime: 4, earnings: 1000 },
    { property: "C", buildTime: 10, earnings: 3000 },
  ];

  let result = [];

  let rightMix = {
    T: 0,
    P: 0,
    C: 0,
  };
  let totalProfit = 0;

  // In the given scenario, At any given of time, only Theatre is profitable after 10mins
  if (time >= 10) {
    rightMix = Object.assign(rightMix);
    while (time >= 5) {
      time = time - propertyDetails[0].buildTime;
      totalProfit += time * propertyDetails[0].earnings;
      rightMix[propertyDetails[0].property] += 1;
    }
    result.push(rightMix);
  }

  // checking between Theatre and pub for under 10 mins
  else {
    let tempprofit1 = 0;
    let tempprofit2 = 0;
    let rightMix1 = Object.assign({}, rightMix);
    let rightMix2 = Object.assign({}, rightMix);
    let remainingTime = time;
    while (remainingTime >= 5) {
      remainingTime = remainingTime - propertyDetails[0].buildTime;
      tempprofit1 += remainingTime * propertyDetails[0].earnings;
      rightMix1[propertyDetails[0].property] += 1;
    }
    remainingTime = time;

    while (remainingTime >= 5) {
      remainingTime = remainingTime - propertyDetails[1].buildTime;
      tempprofit2 += remainingTime * propertyDetails[1].earnings;
      rightMix2[propertyDetails[1].property] += 1;
    }

    if (tempprofit1 === tempprofit2) {
      totalProfit = tempprofit1;
      result.push(rightMix1, rightMix2);
    } else if (tempprofit1 > tempprofit2) {
      totalProfit = tempprofit1;
      result.push(rightMix1);
    } else {
      totalProfit = tempprofit2;
      result.push(rightMix2);
    }
  }

  console.log(totalProfit, ...result);
  return result;
}

maxProfit(7);
maxProfit(8);
maxProfit(13);
