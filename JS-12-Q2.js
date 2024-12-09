// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
const innerFunc = (num1, num2) => {
    return num1 * num2;
  };
  
  const outerFunc = (a, b) => {
    return innerFunc(a, b);
  };
  

  const result = outerFunc(8, 2);
  console.log(result); 
  