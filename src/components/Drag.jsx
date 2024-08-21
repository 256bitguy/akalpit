import React, { useState, useRef } from 'react';

const DraggableTextSection = () => {
  const [texts, setTexts] = useState([{ id: 1, content: 'Drag me!', x: 50, y: 50 }]);
  const [dragging, setDragging] = useState(null);
  const sectionRef = useRef(null);

  // Handle mouse down event to start dragging
  const handleMouseDown = (id, e) => {
    setDragging({ id, startX: e.clientX, startY: e.clientY });
  };

  // Handle mouse move event to update position
  const handleMouseMove = (e) => {
    if (dragging) {
      const section = sectionRef.current;
      const { id, startX, startY } = dragging;
      const newTexts = texts.map((text) => {
        if (text.id === id) {
          const newX = text.x + e.clientX - startX;
          const newY = text.y + e.clientY - startY;
          return { ...text, x: newX, y: newY };
        }
        return text;
      });
      setTexts(newTexts);
      setDragging({ ...dragging, startX: e.clientX, startY: e.clientY });
    }
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        border: '2px solid #ccc',
        overflow: 'hidden',
      }}
    >
      {texts.map((text) => (
        <div
          key={text.id}
          onMouseDown={(e) => handleMouseDown(text.id, e)}
          style={{
            position: 'absolute',
            left: text.x,
            top: text.y,
            cursor: 'move',
            padding: '5px',
            border: '1px solid black',
            backgroundColor: 'lightgray',
          }}
        >
          {text.content}
        </div>
      ))}
    </div>
  );
};

export default DraggableTextSection;
