
var searchNumber = (items) => {
    console.log(items);
    let regExp = /(\-|)[0-9]{1,}/;
    let numberArray = [];
    var count = 1;

    //Searching the numbers in array of items

    for(let i of items){
        let number = i.name.match(regExp);
        numberArray.push(number[0]);
    }

    console.log(numberArray);
    //Sorting the new array with numbers from the smallest number to the largest
    while(count!=0){
        count=0;
        for(let k=1;k<numberArray.length;k++){
            let actual = parseFloat(numberArray[k]);
            let previous = parseFloat(numberArray[k-1]);
            if(previous>actual){
                numberArray[k-1] = actual;
                numberArray[k] = previous;
                count++;
            }
        }
    }
    let lengthOfNumberArray = numberArray.length;

    console.log(numberArray[lengthOfNumberArray-1]);
    return parseFloat(numberArray[lengthOfNumberArray-1]);
};
