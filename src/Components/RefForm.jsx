import { useEffect, useRef } from "react";

const RefForm = () => {
  const textRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
    // console.log(e.target.text.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={"name"} ref={textRef} type="text" name="text" id="text-field" />
        <input type="email" name="email" id="mail" ref={emailRef} />
        <input type="password" name="pass" id="pass" ref={passRef} />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefForm;
