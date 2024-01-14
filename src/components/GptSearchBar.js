import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'





const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang )
    
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className=" p-4 m-4 col-span-9" 
            placeholder= {lang[langKey]?.gptSearchPlaceholder}
            />
            <button className='py-2 px-4 m-4 text-white bg-red-800 rounded-lg col-span-3'>{lang[langKey]?.search}</button>
        </form>
        
    </div>
    
  )
}

export default GptSearchBar