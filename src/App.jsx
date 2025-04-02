import { useState } from "react"
import ChatInput from "./components/ChatInput"
import ChatResponse from "./components/ChatResponse"

function App() {
  
  const [loading, setLoading]= useState(false);
  const [response, setResponse]= useState(null);

  const handlQuestionSubmit = async (question)=>{
    setLoading(true);
    setResponse(null);

    try {
      
    } catch (error) {
      console.log(error)
      alert("Failed to get response");
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className="App">
        <header className="bg-gray-900 text-center text-white py-4">
          <h1 className="text-3xl font-semibold">Gemini Chatbot</h1>
          <h3 className="text-gray-400">Hey there, ask any question you have!</h3>
        </header>
        <div>
          <ChatInput onSubmit={handleQuestionSubmit}/>
          <ChatResponse/>
        </div>
    </div>
  )
}

export default App
