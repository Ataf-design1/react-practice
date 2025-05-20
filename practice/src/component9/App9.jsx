import React, { useState } from "react";

function App9() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [previewPic, setPreviewPic] = useState("");
  const [error, setError] = useState("");
  const [entries, setEntries] = useState([]);

  // Handle skills checkbox change
  const handleSkillChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  // Handle profile picture upload
  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewPic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Validate and submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !gender || skills.length < 2 || !profilePic) {
      setError("Please fill all fields and select at least 2 skills.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone must be exactly 10 digits.");
      return;
    }

    const newEntry = {
      name,
      email,
      phone,
      gender,
      skills,
      profilePic: previewPic,
    };

    setEntries([...entries, newEntry]);

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setGender("");
    setSkills([]);
    setProfilePic(null);
    setPreviewPic("");
    setError("");
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Candidate Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /><br />

        <p>Gender:</p>
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>

        <p>Skills (choose at least 2):</p>
        <label>
          <input
            type="checkbox"
            value="HTML"
            checked={skills.includes("HTML")}
            onChange={handleSkillChange}
          />
          HTML
        </label>
        <label>
          <input
            type="checkbox"
            value="CSS"
            checked={skills.includes("CSS")}
            onChange={handleSkillChange}
          />
          CSS
        </label>
        <label>
          <input
            type="checkbox"
            value="JavaScript"
            checked={skills.includes("JavaScript")}
            onChange={handleSkillChange}
          />
          JavaScript
        </label>

        <p>Profile Picture:</p>
        <input type="file" onChange={handleProfilePic} /><br />
        {previewPic && <img src={previewPic} alt="Preview" width="100" />}

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>

      <hr />
      <h3>Submitted Candidates:</h3>
      {entries.map((entry, index) => (
        <div key={index} style={{ border: "1px solid gray", marginBottom: "10px", padding: "10px" }}>
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Email:</strong> {entry.email}</p>
          <p><strong>Phone:</strong> {entry.phone}</p>
          <p><strong>Gender:</strong> {entry.gender}</p>
          <p><strong>Skills:</strong> {entry.skills.join(", ")}</p>
          <img src={entry.profilePic} alt="Profile" width="100" /><br />
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App9;
