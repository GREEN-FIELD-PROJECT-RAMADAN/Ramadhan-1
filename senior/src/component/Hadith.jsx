import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Hadith = () => {

  const [Hadiths, setHadith] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/azkarAdhan')
      .then(({ data }) =>
        setHadith(data))
      .catch((err) => console.log(err))
  }, [])

   {/* to make sure that we send data but it has small error we will work on it */}
  console.log(Hadiths);



  return (
    <div>
   </div>
  )
}

export default Hadith
