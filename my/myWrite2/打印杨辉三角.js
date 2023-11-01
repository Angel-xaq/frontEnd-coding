function printPascalTriangle(rows) {
    for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = 0; j <= i; j++) {
        row += pascalNumber(i, j) + ' ';
      }
      console.log(row);  //console.log(row.trim());
    }
  }
  
  function pascalNumber(row, col) {
    if (col === 0 || col === row) {
      return 1;
    } else {
      return pascalNumber(row - 1, col - 1) + pascalNumber(row - 1, col);
    }
  }
  
  const numRows = 5; // 要打印的行数
  printPascalTriangle(numRows);