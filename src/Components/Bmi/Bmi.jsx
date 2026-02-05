import React, { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!weight || !height) {
        setError(true);
        return;
      }
    
      setError(false);

    const heightInMeter = height / 100;
    const bmivalue = weight / (heightInMeter * heightInMeter);

    setBmi(bmivalue.toFixed(2));

    if (bmivalue < 18.5) setStatus("Underweight");
    else if (bmivalue < 24.9) setStatus("Normal");
    else if (bmivalue < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className="form-outbox">
      <div className="forminbox">
        <h2>BMI Calculator</h2>

        <form onSubmit={handleSubmit}>
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={error && !weight ? "input error" : "input"}
          />

          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={error && !height ? "input error" : "input"}
          />

          <div className="btn-group">
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => {
                setWeight("");
                setHeight("");
                setBmi("");
                setStatus("");
                setError(false);
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {bmi && (
          <div className="result">
            <span>
              Your BMI is <strong>{bmi}</strong>
            </span>
            <span>
              You are <strong>{status}</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bmi;


