import { useState } from 'react';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai';

const ChatPopup = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Toggle chat visibility
  const toggleChatVisibility = () => {
    if (isChatVisible) {
      setMessages([]); // Clear messages when closing the chat
    }
    setChatVisible(!isChatVisible);
  };

  // Handle sending message and generating a response
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add the user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'User' },
      ]);
      setMessage('');

      // Generate a dynamic bot response based on the user's message
      setTimeout(() => {
        const botResponse = generateBotResponse(message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'Bot' },
        ]);
      }, 1000);
    }
  };

  // Function to generate bot responses based on user input
  const generateBotResponse = (userMessage) => {
    // Basic dynamic response logic
    if (userMessage.toLowerCase().includes('hello')) {
      return 'Hi there! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('price')) {
      return 'The price of the crypto is $50,000.';
    } else if (userMessage.toLowerCase().includes('crypto')) {
      return 'Crypto market is volatile. Be cautious with investments.';
    } else {
      return "Sorry, I didn't quite catch that. Can you please rephrase?";
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
          backgroundColor: 'green',
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
              backgroundColor: 'green',
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
                  backgroundColor: msg.sender === 'User' ? 'lightgreen' : '#ddd',
                  color: msg.sender === 'User' ? 'black' : 'black',
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
                backgroundColor: 'green',
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
