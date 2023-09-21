import { useState } from "react";

const SimpleForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.text.value);
    console.log(email);
  };

  const handleText = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} type="text" name="text" id="text-field" onChange={handleText} />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
