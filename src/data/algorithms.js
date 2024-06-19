export const algorithms = [
    {
      id: 'bubble-sort',
      name: 'Bubble Sort',
      example: 'Bubble sort can be used to arrange books in a library.',
      usage: 'Bubble sort is used in educational purposes to introduce sorting.',
      code: {
        JavaScript: `function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }`,
        Python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
      for j in range(0, n-i-1):
        if arr[j] > arr[j+1]:
          arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
        // Add other languages here
      }
    },
    // Add more algorithms here
  ];
  