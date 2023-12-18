import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ComboBox from './components/ComboBox/ComboBox'

const fruits = [
  { name: 'Apple', icon: '🍎' },
  { name: 'Banana', icon: '🍌' },
  { name: 'Blueberry', icon: '🫐' },
  { name: 'Mango', icon: '🥭' }
];

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ComboBox fruits={fruits}/>
    </>
  )
}

export default App
