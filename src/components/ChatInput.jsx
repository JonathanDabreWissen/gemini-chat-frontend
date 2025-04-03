import React, { useState } from 'react'

import { HiMiniArrowUpCircle } from "react-icons/hi2";




const ChatInput = ( { onSubmit}) => {
    const [question , setQuestion] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(question.trim()){
            onSubmit(question);
            setQuestion("");
        }
    }



  return (
    <div className='container px-10 lg:px-20 py-5 w-full text-white bg-[#171717]'>
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-full space-x-3">
                <div className='form-group w-full'>
                    <input
                        text ="text"
                        className='form-control w-full bg-[#303030] px-5 py-3 rounded-xl outline-none'
                        id='question'
                        placeholder='Enter your question'
                        value = {question}
                        onChange={(e)=> setQuestion(e.target.value)}
                        />
                </div>
                <button type='submit' className={`font-semibold text-sm ${question? " text-white" : "text-[#676767] "}  rounded-full `}>
                    <HiMiniArrowUpCircle size={48} />
                </button>
            </div>
        </form>
    </div>
  )
}

export default ChatInput