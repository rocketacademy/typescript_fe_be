import { useState, ChangeEvent, MouseEvent } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <label>Password:</label>
      <input
        type="text"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />{" "}
      <br />
      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = !Number.isNaN(e.target.valueAsNumber)
            ? e.target.valueAsNumber
            : 0;
          setAge(value);
        }}
      />{" "}
      <br />
      <button
        onClick={(e: MouseEvent) =>
          alert(`Welcome ${name}, ${email}, you are ${age} years old`)
        }
      >
        Submit
      </button>
    </div>
  );
}
