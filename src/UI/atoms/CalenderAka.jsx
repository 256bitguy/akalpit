import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { cn } from '../../libs/utils/utils';
import ButtonsAka from './ButtonsAka';

const Calender = forwardRef(({ styleIcon, styleCalender, styleBox }, calendarRef) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Use `useImperativeHandle` to expose `selectedDate` to the parent component
  useImperativeHandle(calendarRef, () => ({
    getSelectedDate: () => selectedDate,
  }));

  return (
    <div className={styleBox}>
      <div>
        <Calendar className={styleIcon} />
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className={cn(styleCalender, 'focus:outline-none focus:ring-0')}
        placeholderText="Select date"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
});

const CalenderAka = ({ styleIcon, styleCalender, styleBox }) => {
  const calendarRef = useRef();

  const handleGetDate = () => {
    const selectedDate = calendarRef.current.getSelectedDate();
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div>
      <Calender
        ref={calendarRef}
        styleIcon={styleIcon}
        styleCalender={styleCalender}
        styleBox={styleBox}
      />
      <ButtonsAka onClick={handleGetDate} className="m-1">
        Select
      </ButtonsAka>
    </div>
  );
};

export default CalenderAka;
