import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  const nameState = useInputState("");
  //   const [name, handleNameChange] = useInputState("");
  const handleSubmit = (e) => {
    // console.log(name);
    console.log(nameState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...nameState} type="text" name="text" id="text-field" />
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="text"
          id="text-field"
        /> */}
        <input type="email" name="email" id="email" />
        <br></br>
        <input type="submit" value="submit" />{" "}
      </form>
    </div>
  );
};

export default HookForm;
