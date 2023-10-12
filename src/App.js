import { useState } from "react";
import "./App.css";
import SubmitButton from "./components/SubmitButton";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState("");
  function getOption(e) {
    const option = e.target.value;
    if (option === "esc") return;
    console.log(option);
    // document.getElementById("code").innerHTML = option;
    setCode(option);
    return option;
  }

  function print() {
    // let Code = document.getElementById("code").innerHTML;
    let Code = code;
    console.log(Code);
    // let contactNumber = document.getElementById("contactnumber").value;
    let contactNumber = phone;
    // document.getElementById("print-number").innerHTML =  Code + " " + contactNumber;
    setResult(Code + " " + contactNumber);
  }

  const clearState = () => {
    setCode("");
    setPhone("");
    setResult("");
  }

  return (
    <div className="main">
      <div className="option">
        <label for="country">Select Country</label>
        <select name="country" id="country" onChange={getOption} value={code}>
          <option value="esc"></option>
          <option value="+91">India</option>
          <option value="+1">USA</option>
          <option value="+86">China</option>
        </select>
      </div>
      <div className="country-code-design">
        <div className="country-code">
          <div>Country Code</div>
          <DisplayBox text={code} />
        </div>
        <div className="country-code">
          <div>Phone Number</div>
          <div className="number">
            <input
              type="number"
              id="contactnumber"
              placeholder="enter your number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                console.log("rernder", phone);
              }}
            />
          </div>
        </div>
      </div>
      <SubmitButton onClickHandeler={print} isLoading={false} name={"Print"} />
      <SubmitButton onClickHandeler={clearState} isLoading={false} name={"Clear"} />
      <DisplayBox text={result} />
    </div>
  );
}

export default App;