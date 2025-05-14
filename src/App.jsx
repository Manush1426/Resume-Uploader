import './App.css'
import { React, useState } from "react";

function App() {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [gender, setgender] = useState("Male");
  const [subjects, setsubjects] = useState({
    english: true,
    maths: false,
    science: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] =
    useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !contact || !selectedOption || !about) {
      alert("Please fill out all required fields.");
      return;
    }

    alert("Resume Submitted Successfully!!!")

    console.log(
      firstname,
      lastname,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };


const handleSubjectChange = (sub) => {
  setsubjects((prev) => ({
    ...prev,
    [sub]: !prev[sub],
  }));
};

const handleReset = () => {
  setFirstName("");
  setLastName("");
  setEmail("");
  setContact("");
  setGender("male");
  setSubjects({
    english: true,
    maths: false,
    physics: false,
  });
  setResume("");
  setUrl("");
  setSelectedOption("");
  setAbout("");
};

return (
  <>
    <h1>Your Resume Handler</h1>
    <form action="#">
      <div>
        <label for="firstname">
          First Name
        </label>
        <input type='text' value={firstname} onChange={(e) => setfirstname(e.target.value)} placeholder="Enter your first name" />
      </div>

      <div>
        <label for="lastname">
          Last Name
        </label>
        <input type='text' value={lastname} onChange={(e) => setlastname(e.target.value)} placeholder="Enter your last name" />
      </div>

      <div>
        <label for="email">
          Email ID
        </label>
        <input type='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email address" />
      </div>

      <div>
        <label for="lastname">
          Contact No.
        </label>
        <input type='tel' value={contact} onChange={(e) => setcontact(e.target.value)} placeholder="Enter your contact number" />
      </div>

      <div>
        <label for="gender">
          Gender
        </label>
        <input type='radio' checked={gender === "male"} value="male" onChange={(e) => setgender(e.target.value)} /> Male
        <input type='radio' checked={gender === "female"} value="female" onChange={(e) => setgender(e.target.value)} /> Female
        <input type='radio' checked={gender === "other"} value="other" onChange={(e) => setgender(e.target.value)} /> Other
      </div>

      <div>
        <label for="subject">
          Your Best Subject
        </label>
        <input type='checkbox' checked={subjects.english === true} onChange={(e) => handleSubjectChange("english")} /> English
        <input type='checkbox' checked={subjects.maths === true} onChange={(e) => handleSubjectChange("maths")} /> Maths
        <input type='checkbox' checked={subjects.science === true} onChange={(e) => handleSubjectChange("science")} /> Science
      </div>

      <div>
        <label for="file">
          Upload Your Resume
        </label>
        <input type='file' onChange={(e) => setResume(e.target.files[0])} />
      </div>

      <div>
        <label for="url">
          URL
        </label>
        <input type='url' value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter a URL" />
      </div>

      <div>
        <label>
          Select Your Choice
        </label>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option
            value=""
            disabled
            selected={selectedOption === ""}
          >
            Select your Ans
          </option>
          <optgroup label="Beginers">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">
              JavaScript
            </option>
          </optgroup>
          <optgroup label="Advance">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">
              Express
            </option>
            <option value="t">
              MongoDB
            </option>
          </optgroup>
        </select>
      </div>

      <div>
        <label>
          About
        </label>
        <textarea onChange={(e) => setAbout(e.target.value)}></textarea>
      </div>

      <div>
        <button type='reset' value="reset" onClick={() => handleReset()}>Reset</button>
        <button type='submit' value="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </form>
  </>
)
}

export default App
