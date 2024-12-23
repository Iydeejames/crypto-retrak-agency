import  { useState } from 'react';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai';

const ChatPopup = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChatVisibility = () => {
    if (isChatVisible) {
      // Clear messages when the chat is closed
      setMessages([]);
    }
    setChatVisible(!isChatVisible);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'User' }]);
      setMessage('');
      // Simulate bot response after a delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response.', sender: 'Bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChatVisibility}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'green', // gray-900
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '15px',
          fontSize: '24px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        <AiOutlineMessage />
      </button>

      {/* Chat Popup */}
      {isChatVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '350px',
            height: '450px',
            backgroundColor: 'green',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 999,
            border: '1px solid #ddd', 
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              backgroundColor: 'green', // gray-900
              color: 'white',
              padding: '15px',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>Crypto Retracker</span>
            <button
              onClick={toggleChatVisibility}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
              }}
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Chat Messages */}
          <div
            style={{
              flex: '1',
              padding: '10px',
              overflowY: 'auto',
              backgroundColor: '#f7f7f7',
              borderBottom: '1px solid #ddd',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.sender === 'User' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'User' ? '#2D3748' : '#ddd', // gray-900 for user
                  color: msg.sender === 'User' ? 'white' : 'black',
                  borderRadius: '8px',
                  padding: '10px',
                  maxWidth: '80%',
                  wordWrap: 'break-word',
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div
            style={{
              display: 'flex',
              padding: '10px',
              borderTop: '1px solid #ddd',
              backgroundColor: '#fff',
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: '1',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px',
                marginRight: '10px',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '10px 15px',
                backgroundColor: 'green', // gray-900
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
