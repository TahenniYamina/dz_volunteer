/*import React, { useState } from 'react';
import './CalendarWidget.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget = ({ events }) => {
  const [date, setDate] = useState(new Date(2023, 9, 14));

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const monthName = date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h3>{monthName}</h3>
        <div className="calendar-buttons">
          <button><ChevronLeft /></button>
          <button><ChevronRight /></button>
        </div>
      </div>

      <div className="calendar-grid">
        {['L','M','M','J','V','S','D'].map((d,i)=><div key={i} className="day-name">{d}</div>)}
        {days.map((d,i)=>(
          <div key={i} className={`day ${d===14?'today':''}`}>{d}</div>
        ))}
      </div>

      <div className="events-list">
        {events.map((event,i)=>(
          <div key={i} className="event-item">
            <div className={`event-color ${i===0?'blue':'purple'}`}></div>
            <div>
              <div className="event-title">{event.title}</div>
              <div className="event-time">{event.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;*/
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarComponent.css';

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState('Octobre 2023');
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const dates = [
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, null, null, null, null]
  ];

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h3 className="calendar-title">{currentMonth}</h3>
        <div className="calendar-nav">
          <button className="nav-btn">
            <ChevronLeft className="nav-icon" />
          </button>
          <button className="nav-btn">
            <ChevronRight className="nav-icon" />
          </button>
        </div>
      </div>
      <div className="calendar-days">
        {days.map((day, i) => (
          <div key={i} className="day-label">{day}</div>
        ))}
      </div>
      <div className="calendar-dates">
        {dates.flat().map((date, i) => (
          <div key={i} className={`calendar-date ${date === 14 ? 'active' : ''} ${!date ? 'empty' : ''}`}>
            {date}
          </div>
        ))}
      </div>
      <div className="calendar-events">
        <div className="event-item">
          <div className="event-line blue"></div>
          <div className="event-details">
            <p className="event-title">Distribution alimentaire</p>
            <p className="event-time">14 Oct • 14:00</p>
          </div>
        </div>
        <div className="event-item">
          <div className="event-line purple"></div>
          <div className="event-details">
            <p className="event-title">Soutien Scolaire</p>
            <p className="event-time">16 Oct • 17:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;