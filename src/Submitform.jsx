import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Submitform() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/progressbar");
  };
  const next = () => {
    navigate("/submitform");
  };
  const { register, handleSubmit } = useForm();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const onSubmit = (data) => {
    console.log(data.username);
    setUsername(data.username);
    setFullname(data.fullname);
    document.getElementById("container").style.display = "block";
  };
  return (
    <div>
      <h1>Submit Form </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          width: "20vw",
        }}
      >
        <label htmlFor="uname">Username: </label>
        <input
          type="text"
          name="username"
          id="uname"
          {...register("username")}
        />
        <label htmlFor="fname">Full Name: </label>
        <input
          type="text"
          name="fullname"
          id="fname"
          {...register("fullname")}
        />
        <button type="submit">Submit</button>
      </form>
      <div id="container" style={{ display: "none" }}>
        <h2>Request Sent to DB with below request data</h2>
        <ul>
          <li>Username: {username}</li>
          <li>Full Name: {fullname}</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1em",
          gap: "90em",
        }}
      >
        <button style={{ padding: "1em" }} onClick={back}>
          Previous
        </button>
        <button style={{ padding: "1em" }} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Submitform;
