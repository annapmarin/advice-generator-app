import { React, useEffect, useState } from "react";

function QuoteGenerator() {
    const [advices, setAdvices] = useState([])

    useEffect(() => {
      
      const obtainData = async () => {
        const data = await fetch('https://api.adviceslip.com/advice')
        const dataResult = await data.json()
        // const dataResultArray = Object.values(dataResult)
        setAdvices(dataResult.slip)
      }
  
      obtainData()
    }, [])

    return (
        <>
          {
            advices ?
            <>
              <p id="advice-id"><span>Advice #{advices.id}</span></p>
              <div className="text-container">
              <p>{advices.advice}</p>
              </div>
            </>
            : null
          }
        
        </>
       
    )
}

export default QuoteGenerator;