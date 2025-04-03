import { useState } from "react"
import ChatInput from "./components/ChatInput"
import ChatResponse from "./components/ChatResponse"
import { fetchChatResponse } from "./services/api";
import LoadingSkeleton from "./components/LoadingSkeleton";

function App() {
  
  const [loading, setLoading]= useState(false);
  const [response, setResponse]= useState(null);

  const handleQuestionSubmit = async (question)=>{
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      console.log(error)
      alert("Failed to get response");
    }
    finally{
      setLoading(false);
      console.log(loading)
    }
  }

  return (
    <div className="App relative h-screen flex flex-col">
        <header className="bg-[#212121] text-center w-full text-white py-4 sticky top-0">
          <h1 className="text-3xl font-semibold">Gemini Chatbot</h1>
          <h3 className="text-gray-400">Hey there, ask any question you have!</h3>
        </header>
        <div className="flex-1 bg-[#171717] w-full overflow-auto response-box">
          {
            loading?(
              <LoadingSkeleton/>
            ):(
              <ChatResponse response={response}/>
            )
          }
        </div>
        <div className="w-full">
          <ChatInput onSubmit={handleQuestionSubmit}/>
        </div>
    </div>
  )
}

export default App
