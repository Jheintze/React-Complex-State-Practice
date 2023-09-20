import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setMail] = useState("");

  function handlefName(e) {
    setFName(e.target.value);
  }
  function handlelName(e) {
    setLName(e.target.value);
  }
  function handleMail(e) {
    setMail(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <p>{email}</p>
      <form>
        <input
          onChange={handlefName}
          value={fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handlelName}
          value={lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleMail}
          value={email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;

//     setContact((prevValue) => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName,
//           email: prevValue.email
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: value,
//           email: prevValue.email
//         };
//       } else {
//         return {
//           fName: prevValue.fName,
//           lName: prevValue.lName,
//           email: value
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input onChange={handleChange} name="fName" placeholder="First Name" />
//         <input onChange={handleChange} name="lName" placeholder="Last Name" />
//         <input onChange={handleChange} name="email" placeholder="Email" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
