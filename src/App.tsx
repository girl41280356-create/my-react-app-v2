// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
const baseClasses =
"h-16 w-full flex items-center justify-center text-x1 font-semibold rounded-lg cursor-pointer transition duration-150 ease-in-out";
function App() {
  // const [count, setCount] = useState(0)
const signList = [
  '%','CE','C','<-',
  '1/x','x2','','除',
  '7','8','9','X',
  '4','5','6','-',
  '1','2','3','+',
  '+-','0','-','='
]
  return (
    <Layout>
      <input type='text' className="bg-green-100p-4 mb-4 rounded-lg shadow-inner"/>
      <div className="grid grid-cols-4 gap-2 bg-gray-100 p-4 rounded-x1 shadow-2x1 max-w-sm mx-auto">
       {
        signList.map(
          (sign,index) => {

            return(
              <div key={index} className={baseClasses}>
                {sign}
              </div>
            )
          }
        )
      }
      </div>
    </Layout>
  )
}

export default App
