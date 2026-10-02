import './App.css'
import Counter from './components/Counter.tsx'
import Game from './components/Game.tsx'
import Questions from './components/Questions.tsx'

export default function App() {

  return (
      <main id="center">
          <h1>React TypeScript Examples</h1>
          <Game />
          <Counter/>
          <Questions/>
      </main>
  )
}
