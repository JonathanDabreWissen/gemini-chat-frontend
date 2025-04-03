import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const ChatResponse = ({response}) => {
  
  if(!response){
    return null;
  }

  const {candidates, usageMetadata } = response;
  console.log(usageMetadata);

  return (
    <div className='container py-4 pb-10 my-4'>
      <div>
        {
          candidates.map((candidate, index)=>(
            <div key={index} className='lg:px-20 text-white response-box'>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{candidate.content.parts[0].text}</ReactMarkdown>
            </div>
          ))
        
        }
      </div>

    </div>
  )
}

export default ChatResponse