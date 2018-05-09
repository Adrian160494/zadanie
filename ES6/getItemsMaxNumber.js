
var getItemsMaxNumber = (items) => {
    console.log(items);
    let regExp = /^(\-|)[0-9]{1,}(\.[0-9]{1,}|)$/;
    let numberArray = [];
    var count = 1;
    var largestNumber = null;

    //Searching the numbers in array of items

    for(let i of items){
        let number = i.name.split(" ");
        console.log(number);
        if(number){
            for(var k=0;k<number.length;k++){
                var foundNumber = number[k].match(regExp);
                if(foundNumber){
                    console.log("Number: " + foundNumber[0]);
                    numberArray.push(foundNumber[0]);
                }
            }
        }
    }

    console.log(numberArray);

    //Searching the largest number

    if(numberArray.length>0){
        largestNumber = numberArray[0];

        for(let num of numberArray){
            if(parseFloat(num) > parseFloat(largestNumber)){
                largestNumber = num;
            }
        }
        console.log("Largest number: "+largestNumber);
        return parseFloat(largestNumber);
    } else{
        return 0;
    }

};
