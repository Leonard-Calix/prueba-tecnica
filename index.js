class Calculator {

    sum = (values) => {

        if (!values) {
            return 0;
        }
 
        let array = values.split(/,|\n|%|&|;/);
        let total = 0;
        
        array.forEach(char => total += Number(char));

        return total;
    }
}

module.exports = Calculator;