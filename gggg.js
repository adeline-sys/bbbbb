let array = [30, 20, 10, 70, 94, 29];

console.log("Original Array:", array);

// 1️⃣ Bubble Sort
function bubbleSort(arr) {
    let a = [...arr]; // copy array
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]; // swap
            }
        }
    }
    return a;
}

console.log("Bubble Sort:", bubbleSort(array));

// 2️⃣ Selection Sort
function selectionSort(arr) {
    let a = [...arr];
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[minIdx]) minIdx = j;
        }
        [a[i], a[minIdx]] = [a[minIdx], a[i]];
    }
    return a;
}

console.log("Selection Sort:", selectionSort(array));

// 3️⃣ Insertion Sort
function insertionSort(arr) {
    let a = [...arr];
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

console.log("Insertion Sort:", insertionSort(array));

// 4️⃣ Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    return result.concat(left, right);
}

console.log("Merge Sort:", mergeSort(array));

// 5️⃣ Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Quick Sort:", quickSort(array));

// 6️⃣ Built-in JS Sort
console.log("Built-in Sort:", [...array].sort((a, b) => a - b));
