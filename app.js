const firstNelements = (arr, n) => {
    for (let i = 0; i < n && i < arr.length; i++) {
      console.log(arr[i]);
    }
  };
  
  
  const array = [1, 2, 3, 4, 5, 6];
  const n = 3;
  
  firstNelements(array, n);
  
  /* 
  1
  2
  3 */