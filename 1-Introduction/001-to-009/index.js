// this one way
console.log("Iam In Console");
document.write("Iam In Page");

// this second way
location.reload = () => {
  console.log("Iam In Console");
  document.write("Iam In Page");
};
