import { useEffect, useRef, useState } from 'react'
import { chatbot } from '../content'
import Icon from './Icon'

/* Front-end only AI assistant shell. No backend yet — it shows the welcome
   message, quick replies and a canned response so the client can see the UX.
   Wire `cannedReply` to a real API later. */
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: chatbot.welcome }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [askedSomething, setAsked] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing, open])

  const send = (text) => {
    const t = (text || '').trim()
    if (!t) return
    setMessages((m) => [...m, { from: 'user', text: t }])
    setInput('')
    setAsked(true)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: chatbot.cannedReply }])
    }, 1100)
  }

  return (
    <>
      {!open && (
        <button className="chat-launch" onClick={() => setOpen(true)} aria-label="Open enquiries chat">
          <Icon name="chat" /> {chatbot.launcherLabel}
        </button>
      )}

      <div className={`chat-panel ${open ? 'open' : ''}`} role="dialog" aria-label={chatbot.title}>
        <div className="chat-head">
          <span className="avatar"><Icon name="excavator" /></span>
          <div>
            <h4>{chatbot.title}</h4>
            <span className="status">{chatbot.subtitle}</span>
          </div>
          <button className="chat-x" onClick={() => setOpen(false)} aria-label="Close chat"><Icon name="close" /></button>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => <div key={i} className={`msg ${m.from}`}>{m.text}</div>)}
          {typing && <div className="msg bot typing"><span></span><span></span><span></span></div>}
          {!askedSomething && (
            <div className="quick">
              {chatbot.quickReplies.map((q) => (
                <button key={q} onClick={() => send(q)}>{q}</button>
              ))}
            </div>
          )}
        </div>

        <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(input) }}>
          <input value={input} onChange={(e) => setInput(e.target.value)}
            placeholder={chatbot.inputPlaceholder} aria-label="Type your enquiry" />
          <button className="chat-send" type="submit" aria-label="Send"><Icon name="send" /></button>
        </form>
        <div className="chat-disc">{chatbot.disclaimer}</div>
      </div>
    </>
  )
}
