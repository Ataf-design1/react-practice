import  { useState, useRef } from "react";

const FeedbackFormManager = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const ratingRef = useRef(null);

  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const rating = ratingRef.current.value;

    if (!name.trim() || !feedback.trim()) {
      alert("Name and Feedback are required!");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name,
      feedback,
      rating: Number(rating),
      timestamp: new Date(),
    };

    setFeedbackList((prev) => [newFeedback, ...prev]);

    // Reset form
    setName("");
    setFeedback("");
    ratingRef.current.value = "";
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <input
            type="number"
            placeholder="Rating (1-5)"
            ref={ratingRef}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>

      <h3>Feedback List</h3>
      {feedbackList.map((entry) => (
        <div
          key={entry.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Feedback:</strong> {entry.feedback}</p>
          <p><strong>Rating:</strong> {entry.rating}</p>
          <p><small>{entry.timestamp.toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackFormManager;
