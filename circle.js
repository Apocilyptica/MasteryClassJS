const calcGeometry = (radius, func) => {
  const getCircumference = (r) => {
    return Math.PI * r * 2;
  };

  const getArea = (r) => {
    return Math.PI * r ** 2;
  };

  if (func == "C") {
    return getCircumference(radius);
  }
  if (func == "A") {
    return getArea(radius);
  }

  return "Must enter valid parameters i.e. clacGeometry(10, 'C')";
};

console.log(calcGeometry(10, "C"));
