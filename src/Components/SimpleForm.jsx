import { useState } from "react";

const SimpleForm = () => {
  const [email, setEmail] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.text.value);
    console.log(email);
    console.log(emailTwo);
  };

  const handleText = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailTwo = (e) => {
    setEmailTwo(e.target.value);
  };




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} type="text" name="text" id="text-field" onChange={handleText} />
        <input onChange={handleEmailTwo} type="email" name="email" id="email" />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
