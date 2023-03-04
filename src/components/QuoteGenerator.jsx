import { React, useEffect, useState } from "react";

function QuoteGenerator() {
    const [advices, setAdvices] = useState([])

    useEffect(() => {
      
      const obtainData = async () => {
        const data = await fetch('https://api.adviceslip.com/advice')
        const dataResult = await data.json()
        const dataResultArray = Object.values(dataResult)
        setAdvices(dataResultArray)
      }
  
      obtainData()
    }, [])

    return (
        <>
          {advices.map((adv, i) => {
            return(
              <div key={i}>
                <p id="advice-id"><span>Advice #{adv.id}</span></p>
                <div className="text-container">
                <p>{adv.advice}</p>
                </div>
              </div>
            )
          })}
        
        </>
       
    )
}

export default QuoteGenerator;