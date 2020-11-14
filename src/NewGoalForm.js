import React, { useState } from "react";
import "./NewGoalForm.css";

function NewGoalForm(props) {
  const [formData, setFormData] = useState({
    description: "",
    count: 1
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldData => ({ ...oldData, [name]: value }));
  }

  return (
    <form className="NewGoalForm">
      <div className="NewGoalForm-input">
        <label>What is your goal?</label>
        <input
          placeholder="Enter your goal here"
          onChange={handleChange}
          value={formData.description}
          name="description"
        />
      </div>
      <div className="NewGoalForm-input">
        <label>How many days per week do you want to meet this goal?</label>
        <input
          type="number"
          min="1"
          max="7"
          step="1"
          onChange={handleChange}
          value={formData.count}
          name="count"
        />
      </div>
      <input
        type="submit"
        value="Add this goal!"
        className="NewGoalForm-submit"
      />
    </form>
  );
}

export default NewGoalForm;
