// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import Layout from './components/Layout'

const baseClasses =
"h-16 w-full flex items-center justify-center text-x1 font-semibold rounded-lg cursor-pointer transition duration-150 ease-in-out";
function App() {
  const [input1, setInput1] = useState("");
  const [op, setOp] = useState("");
  const [Eq, setEq] = useState(false);
  const [input2, setInput2] = useState("");
   const [ans, setAns] = useState(0);
  // const [count, setCount] = useState(0)
const signList = [
  '%','CE','C','<-',
  '1/x','x2','','除',
  '7','8','9','X',
  '4','5','6','-',
  '1','2','3','+',
  '+-','0','-','='
];

const isNum = (sign: string) =>{ 
  return !isNaN(parseFloat(sign))
};

const handleCalc = (sign: string) =>{
  
  if(isNum(sign)) {
    if(op) {
      setInput2(input2 + sign);
    }else{
      setInput1(input1+sign);
    }
    return;
     
  }

  if("+" === sign){
    setOp(sign);
    return;
  }

  if("=" === sign){
    if("+" === op){
      setAns(parseFloat(input1)+parseFloat(input2));
      setEq(true);
    }
  }
  
  
};

const getDisplayText=()=>{
  if( Eq){
    return ans+"";
  }
  if(op) {
    return input2;
  }
  return input1;
}

  return (
    <Layout>
      <input type='text' value={getDisplayText()} className="bg-green-100p-4 mb-4 rounded-lg shadow-inner"/>
      <div className="grid grid-cols-4 gap-2 bg-gray-100 p-4 rounded-x1 shadow-2x1 max-w-sm mx-auto">
       {
        signList.map(
          (sign,index) => {

            return(
              <button key={index} className={baseClasses} onClick={()=>{ handleCalc(sign); }} >
                {sign}
              </button>
            )
          }
        )
      }
      </div>
    </Layout>
  )
}

export default App
