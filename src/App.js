import logo from './logo.svg';
import './App.css';

// Examples:
// sum(["1", "five", "2wenty", "thr33"]) ➞ 36

// sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

// Notes:
// - Numbers in strings can be negative, but will all be base-10 integers.
// - Negative numbers may directly follow another number.
// - The hyphen or minus character ("-") does not only occur in numbers.
// - Arrays may be ragged or empty.

function sum(arr) {

  let total = 0;

  function isValidNumber(str) {
    return !isNaN(Number(str))
  }

  function traverse(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        traverse(item)
      } else {
        const number = item.split(/\D+/).filter(isValidNumber)

        total += number.reduce((acc, num) => acc + Number(num), 0)
      }
    })
  }
  traverse(arr);
  return total
}

function App() {

  const result = sum([
    (["1", "five", "2wenty", "thr33"])
  ])
  return (
    <div className="App">
      <h2>Result:{result}</h2>
    </div>
  );
}

export default App;
