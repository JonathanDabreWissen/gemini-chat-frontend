import React, { useState } from 'react'

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
    <div className='container px-10 lg:px-20 py-10 w-full text-white bg-[#030712]'>
        <div className="" onSubmit={handleSubmit}>
            <div className='form-group'>
                <div className="question text-lg font-semibold text-gray-300 mb-1">Ask a Question</div>
                <input
                    text ="text"
                    className='form-control w-full bg-[#1c2029] px-5 py-3 rounded-lg'
                    id='question'
                    placeholder='Enter your question'
                    value = {question}
                    onChange={(e)=> setQuestion(e.target.value)}
                />
            </div>
            <button type='submit' className='px-3 py-2 font-semibold text-sm bg-[#00bcff] rounded-lg mt-3 text-white'>
                Submit
            </button>
        </div>
    </div>
  )
}

export default ChatInput