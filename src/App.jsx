import { useState } from "react";

import { DELIMITER_CHARS } from "./utils/constant";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [output, setOutput] = useState(null);

  // const calculate = () => {
  //   if(text === "") {
  //     setOutput(0);
  //     setError("")
  //     return;
  //   }
  //   if(text.length === 1){
  //     if(DELIMITER_CHARS.test(text)){
  //       setOutput(null)
  //       setError(`${text} character not allowed`)
  //       return
  //     }
  //   }

  //   // const arr = lines.flatMap(line => line.split(/[`!@#$%^&*()_+=\\n\[\]{};':\\"|,.<>\/?~]/));
  //   const arr = text.split(DELIMITER_CHARS);
  //   console.log(arr);
  //   let result = 0;
  //   let negativeNumber = []
  //   for(let i = 0; i < arr.length; i++){
  //     const item = arr[i];
  //       if(!isNaN(item) && Number(item) < 0){
  //         console.log(item);
  //         negativeNumber.push(item);
  //         continue;
  //       }
  //       if(!isNaN(item)){
  //         const addNumber = Number(item);
  //         if(addNumber < 1001){
  //            result += Number(item);
  //         }
  //       }
  //   }
  //   if(negativeNumber.length){
  //     const negative = negativeNumber.join(",")
  //     setError(`${negative} - these nagative numbers are not allowed`)
  //     setOutput(null)
  //     return;
  //   }
  //   setOutput(result)
  //   setError("")
  // }

  const calculate = () => {
    if (text === "") {
      setOutput(0);
      setError("");
      return;
    }

    if (text.length === 1 && DELIMITER_CHARS.test(text)) {
      setOutput(null);
      setError(`${text} character not allowed`);
      return;
    }

    const arr = text.split(DELIMITER_CHARS);
    let result = 0;
    const negativeNumbers = [];

    for (const item of arr) {
      const number = Number(item);
      if (isNaN(number)) continue;
      if (number < 0) {
        negativeNumbers.push(item);
      } else if (number < 1001) {
        result += number;
      }
    }

    if (negativeNumbers.length) {
      setError(`${negativeNumbers.join(", ")} - these negative numbers are not allowed`);
      setOutput(null);
    } else {
      setOutput(result);
      setError("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-extrabold">String Calculator KATA</h1>
      <p>Important: special chars/delimiter used: `!@#$%^&*()_+=\\n\[\]{};':\\"|,.':\\"|,.\/?~ </p>
        <input className="w-6/12 m-2 p-2 border-1 border-gray-600 rounded-lg bg-white" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p data-testid="error" className="text-red-400">{error}</p>
        <button className="m-4 px-10 py-4 border-blue-800 rounded-lg bg-blue-500" onClick={calculate}>Submit</button>
        {
          output !== null && (
            <div className="w-6/12 h-auto m-4 p-4 bg-white text-black">
              <h1 data-testid="result">{output}</h1>
            </div>
          )
        }

    </div>
  );
}

export default App;
