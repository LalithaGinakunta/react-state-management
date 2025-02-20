import { useState } from "react";

export default function FormExample() {
  const [formData, setFormData] = useState({ name: "", age: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Choosing the State Structure</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <p>{formData.name} is {formData.age} years old.</p>
    </div>
  );
}
