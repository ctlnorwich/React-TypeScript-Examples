import { useState, useEffect } from 'react'

// Set Question type for use below (see db.json for actual data)
type Question = {
  id: string;
  question: string;
  answers: string[];
}

// Create a Question component
export default function Questions() {

  const [questions, setQuestions] = useState([])

  // Fetch the questions from the api endpoint of our db.json server. Make you started the server with `npx json-server db.json`.
  useEffect(() => {

    const fetchQuestions = async () => {
      try {
        const res = await fetch('http://localhost:3000/questions')
        const data = await res.json()
        setQuestions(data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuestions()

    // This will only run once when the Question component mounts, since there are no dependencies
  }, [])

  // Loop through the questions and answers using map.
  return (
    <section>
      <h2>Questions!</h2>
      {questions.length > 0 ? questions.map((question: Question, questionIndex) => (
        <article key={`question-${questionIndex}`}>
          <p className="question">{question.question}</p>
          <ul>
            {question.answers.map((answer, answerIndex) => (
              <li key={`question-${questionIndex}-${answerIndex}`}>{answer}</li>
            ))}
          </ul>
        </article>
      )) : <p>No Questions: did you run <code>npx json-server db.json</code>?</p>
      }
    </section>
  )
}
