/*import React from 'react';
import './MessagesWidget.css';
import woman from '../assets/woman.jpg';
import man from '../assets/man.jpg';

const MessagesWidget = ({ messages }) => (
  <div className="messages-card">
    <div className="messages-header">
      <h3>Messages</h3>
      <span className="badge">{messages.length}</span>
    </div>
    <div className="messages-list">
      {messages.map((msg,i)=>(
        <div key={i} className="message-item">
          <div className="avatar">
            <img src={i===0?woman:man} alt={msg.sender}/>
          </div>
          <div className="message-text">
            <div className="sender">{msg.sender}</div>
            <div className="preview">{msg.preview}</div>
          </div>
          {msg.unread && <div className="unread-dot"></div>}
        </div>
      ))}
    </div>
  </div>
);

export default MessagesWidget;*/
import React from 'react';
import './Messages.css';

const Messages = () => {
  return (
    <div className="messages-card">
      <div className="messages-header">
        <h3 className="messages-title">Messages</h3>
        <span className="messages-badge">2</span>
      </div>
      <div className="messages-list">
        <div className="message-item">
          <img src="/woman.jpg" alt="Sophie Martin" className="message-avatar" />
          <div className="message-content">
            <p className="message-name">Sophie Martin</p>
            <p className="message-text">Merci pour ton aide hier ! ...</p>
          </div>
          <div className="message-dot"></div>
        </div>
        <div className="message-item">
          <img src="/man.jpg" alt="Marc Dubois" className="message-avatar" />
          <div className="message-content">
            <p className="message-name">Marc Dubois</p>
            <p className="message-text">On se retrouve à 14h ?</p>
          </div>
          <div className="message-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Messages;