/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const new_numbers: number[] = [];
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        const single_item: number[] = [];
        single_item.push(numbers[0]);
        single_item.push(numbers[0]);
        return single_item;
    } else {
        new_numbers.push(numbers[0]);
        new_numbers.push(numbers[numbers.length - 1]);
        return new_numbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newInts = numbers.map((value: string): number =>
        !parseInt(value, 10) ? 0 : parseInt(value, 10)
    );
    return newInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //first remove the dollar signs
    const removeDollar = amounts.map((price: string): string =>
        price[0] === "$" ? price.substring(1) : price
    );
    //parse to int from new array with $ signs all removed
    const newInts = removeDollar.map((value: string): number =>
        !parseInt(value, 10) ? 0 : parseInt(value, 10)
    );
    return newInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //filter out strings ending in "?"
    const noQuestions = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    //change "!" to all caps
    const addCaps = noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return addCaps;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //filter non-RGB words into array and check if its length is > 0
    const failingWords = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );
    if (failingWords.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //find sum
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (addends.length === 0) {
        //if it is an empty array
        return "0=0";
    } else {
        const newString = addends.reduce(
            (currentString: string, num: number) =>
                currentString + num.toString() + "+",
            ""
        );
        const finalString = newString.slice(0, -1); //remove extra "+" at the end
        return sum + "=" + finalString;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //find the negative
    const indices = values
        //i is index, a is value
        .map((a, i) => (a < 0 ? i : -1))
        .filter((a) => a !== -1);
    //indicies contains indicies of negative values
    if (indices.length === 0) {
        //no negative numbers
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        ); //find sum
        const finalArr = [...values, sum];
        return finalArr;
    } else {
        //at least 1 negative number
        const subArray = values.slice(0, indices[0]); //only portion of array before negative
        const sum = subArray.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        ); //find sum
        const secondArr = [...values.slice(0, indices[0] + 1), sum];
        const finalArr = secondArr.concat(
            values.slice(indices[0] + 1, values.length)
        );
        return finalArr;
    }
}
/*function price(price: any, string: any) {
    throw new Error("Function not implemented.");
}*/
