function descendingSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const inputArrayString = prompt("Enter an array of numbers separated by commas:");
const inputArray = inputArrayString.split(',').map(Number); // Split and convert to numbers

const sortedArray = descendingSort(inputArray);
console.log("Sorted Array (Descending):", sortedArray);
