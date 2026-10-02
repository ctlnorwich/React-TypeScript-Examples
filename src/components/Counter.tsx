import { useState, type ChangeEvent } from 'react'

// Declare our types
type ButtonProps = {
  count: number;
  onButtonClick: () => void
}

// Add a Button component within the Counter.tsx file. This could also be imported from another file. The onButtonClick prop allows the onCLick event here to invoke the callback function updateCount in the parent Counter component.
const Button = ({ onButtonClick, count }: ButtonProps) => {
  return (
    <button
      type="button"
      className="counter"
      onClick={onButtonClick}
    >
      Count is {count}
    </button>
  )
}

// Create our Counter component
export default function Counter() {

  // Set up state for count and inputText
  const [count, setCount] = useState(3)
  const [inputText, setInputText] = useState("Hello React!")

  // A callback function for updating the state of count.
  const updateCount = () => {
    setCount((count) => count + 3);
  }

  // A callback function for updateing the state of inputText
  const updateInputText = (e: ChangeEvent<HTMLInputElement>) => setInputText(e.currentTarget.value)

  return (
    <section>
      <h2>Count is: {count}. Input is: {inputText}</h2>
      <Button onButtonClick={updateCount} count={count} />
      <input type="text" value={inputText} onChange={updateInputText}></input>
    </section>
  )
}