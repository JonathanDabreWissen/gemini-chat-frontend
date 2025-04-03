import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatResponse = ({response}) => {
  if(!response){
    return null;
  }

  const {candidates, usageMetadata } = response;
  console.log(usageMetadata);

  // Custom renderers for markdown elements without the unused node parameter
  const components = {
    // Table enhancements
    table: ({...props}) => (
      <div className="w-full overflow-x-auto my-6 rounded-lg shadow-md">
        <table className="w-full border-collapse bg-gray-800 text-left" {...props} />
      </div>
    ),
    thead: ({...props}) => <thead className="bg-gray-700" {...props} />,
    tbody: ({...props}) => <tbody className="divide-y divide-gray-600" {...props} />,
    tr: ({...props}) => <tr className="hover:bg-gray-700 transition-colors duration-200" {...props} />,
    th: ({...props}) => <th className="px-4 py-3 font-medium text-gray-300" {...props} />,
    td: ({...props}) => <td className="px-4 py-3 text-gray-200" {...props} />,
    
    // Other Markdown enhancements
    h1: ({...props}) => <h1 className="text-3xl font-bold my-4 text-blue-300" {...props} />,
    h2: ({...props}) => <h2 className="text-2xl font-bold my-3 text-blue-300" {...props} />,
    h3: ({...props}) => <h3 className="text-xl font-bold my-2 text-blue-300" {...props} />,
    p: ({...props}) => <p className="my-4" {...props} />,
    ul: ({...props}) => <ul className="list-disc ml-5 my-4 space-y-2" {...props} />,
    ol: ({...props}) => <ol className="list-decimal ml-5 my-4 space-y-2" {...props} />,
    li: ({...props}) => <li className="ml-2" {...props} />,
    a: ({href, ...props}) => <a href={href} className="text-blue-400 hover:text-blue-300 underline" {...props} />,
    blockquote: ({...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-300" {...props} />,
    code: ({inline, ...props}) => {
      return inline ?
        <code className="bg-gray-700 text-blue-300 px-1 py-0.5 rounded" {...props} /> :
        <code className="block bg-gray-900 rounded-md p-4 my-4 overflow-x-auto text-blue-300 font-mono" {...props} />
    },
    em: ({...props}) => <em className="italic text-blue-200" {...props} />,
    strong: ({...props}) => <strong className="font-bold text-blue-100" {...props} />
  };

  return (
    <div className='container py-4 pb-10 my-4'>
      <div>
        {candidates.map((candidate, index) => (
          <div key={index} className='lg:px-20 text-white response-box'>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={components}
            >
              {candidate.content.parts[0].text}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatResponse