import React, { useState, useEffect, useRef } from 'react';

import styles from "./Chat.module.css"

export const Chat = () => {
  const [message, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [socket, setSocket] = useState(null);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/api/chat');
    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      // Add received message from the server to the message history
      setMessageHistory((prevHistory) => [...prevHistory, { text: event.data }]);
    };

    ws.onerror = (error) => {
      console.log('WebSocket error: ', error);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws);

    // Cleanup function
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      // Send the message to the WebSocket server
      socket.send(message);
      setMessage(''); // Clear the input after sending
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messageHistory]);  // Run this effect whenever messageHistory changes

  return (
    <div>
      <section className={styles.container} id="chat">
      <h2 className={styles.title}>Chat</h2>
      <p className={styles.content}>
        <div className={styles.text}>Chat with C-Bot! Asking any question about my experience, projects, skills.</div>
        <i>Disclaimer: The information provided may not be entirely accurate.</i></p>
      <div className={styles.content}>   
        {/* Message History */}
        <div className={styles.messageBox} ref={chatContainerRef}>
          {messageHistory.map((msg, index) => (
            <div key={index} className={styles.message}>
              <strong>{msg.text}</strong>
            </div>
          ))}
        </div>
        {/* Message Input */}
        <div>
          <form onSubmit={sendMessage}>
          <input className={styles.messageInput} 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            maxLength={150}
          />
          <button type="submit" className={styles.messageBtn}><strong>Send</strong></button>
          </form>
        </div>
      </div>
    </section>
    </div>
    

    
  );
};