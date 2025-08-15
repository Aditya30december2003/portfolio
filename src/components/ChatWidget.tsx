'use client'

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X } from "lucide-react"

const FAQ = {
  "What technologies do you use?": "I work with React, Next.js, MongoDB, Prisma, and Tailwind CSS.",
  "Can I see your resume?": "Yes, it's available in the 'Resume' section of the site.",
  "How can I contact you?": "You can contact me using the form or via my email at john@example.com.",
}

const DAILY_LIMIT = 10

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [remaining, setRemaining] = useState(DAILY_LIMIT)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const today = new Date().toDateString()
    const stored = JSON.parse(localStorage.getItem('chatUsage') || '{}')
    if (stored.date === today) {
      setRemaining(DAILY_LIMIT - (stored.count || 0))
    } else {
      localStorage.setItem('chatUsage', JSON.stringify({ date: today, count: 0 }))
      setRemaining(DAILY_LIMIT)
    }
  }, [])

  const updateUsage = () => {
    const stored = JSON.parse(localStorage.getItem('chatUsage') || '{}')
    const newCount = (stored.count || 0) + 1
    localStorage.setItem('chatUsage', JSON.stringify({ date: new Date().toDateString(), count: newCount }))
    setRemaining((r) => r - 1)
  }

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { sender: "user", text: input }]
    setMessages(newMessages)
    setInput("")
    setIsTyping(true)

    // If limit reached, fallback to FAQ
    if (remaining <= 0) {
      const answer = FAQ[input] || "I'm currently out of answers today. Try again tomorrow or check the FAQ section."
      setMessages([...newMessages, { sender: "bot", text: answer }])
      setIsTyping(false)
      return
    }

    updateUsage()

    try {
      const res = await fetch("/api/hugging_face_api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      })

      const data = await res.json()
      setMessages([...newMessages, { sender: "bot", text: data.reply || "Something went wrong." }])
    } catch {
      setMessages([...newMessages, { sender: "bot", text: "Sorry, I encountered an error." }])
    } finally {
      setIsTyping(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Panel */}
      <div className={`w-80 sm:w-96 h-[450px] bg-white rounded-lg shadow-2xl border border-gray-200 
        flex flex-col overflow-hidden transition-all duration-300 ease-in-out 
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare size={18} className="text-white" />
            </div>
            <span className="font-medium">Ask Me Anything</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-white/10">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              <MessageSquare className="mx-auto mb-2 text-gray-400" size={32} />
              <p>Send a message to start chatting</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"} animate-fade-in-up`}>
              <div className={`inline-block max-w-[80%] px-4 py-2 rounded-lg shadow-sm 
                ${msg.sender === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none border border-gray-200"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-left mb-3">
              <div className="inline-block px-4 py-2 rounded-lg rounded-tl-none bg-white text-gray-800 border border-gray-200 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-transparent outline-none text-sm py-1.5 text-gray-800 placeholder-gray-500"
              placeholder={remaining > 0 ? "Type your message..." : "AI limit reached, try FAQ!"}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isTyping}
              className={`ml-2 p-1.5 rounded-full transition-all duration-200 
                ${input.trim() && !isTyping ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
            >
              <Send size={16} className="transform -rotate-45" />
            </button>
          </div>
          <div className="text-xs text-center mt-2 text-gray-500">{remaining} AI responses left today</div>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 
          shadow-lg flex items-center justify-center hover:scale-110 
          transition-all duration-300 ease-in-out
          ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Open chat"
      >
        <MessageSquare size={24} className="text-white" />
      </button>
    </div>
  )
}
