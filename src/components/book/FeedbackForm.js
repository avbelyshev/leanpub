import React from 'react';

const FeedbackForm = () => {
  const handleSubmit =(e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      question: e.target.question.value,
    };

    console.log(formData);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={styles.form}>
      <div>
        <label>Name </label>
        <input type="text" id="name" />
      </div>
      <div>
        <label>Email </label>
        <input type="email" id="email" />
      </div>
      <div>
        <label>Question </label>
        <textarea id="question" />
      </div>
      <button type="submit">Send</button>
    </form>
  )
}

export default FeedbackForm;

const styles = {
  form: {
    marginTop: '10px'
  }
}
