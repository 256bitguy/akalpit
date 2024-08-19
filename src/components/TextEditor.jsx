
import React, { useState } from 'react';

const fontFamilies = [
  'sans-serif',
  'serif',
  'monospace',
  'cursive',
  'fantasy'
];

const textSizes = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl'
];

const colors = [
  'text-black',
  'text-red-100',
  'text-red-200',
  'text-red-300',
  'text-red-400',
  'text-red-500',
  'text-red-600',
  'text-blue-500',

  'text-green-500',
  'text-yellow-500'
];

const TextEditor = () => {
  const [text, setText] = useState('Sample text here');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [textSize, setTextSize] = useState('text-base');
  const [textColor, setTextColor] = useState('text-black');
  const [lineSpacing, setLineSpacing] = useState('leading-normal');
  const [wordSpacing, setWordSpacing] = useState('tracking-normal');

  return (
    <div className="p-4">
      <div className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-24 border border-gray-300 p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Font Family:</label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="border border-gray-300 p-2"
        >
          {fontFamilies.map((font) => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Text Size:</label>
        <select
          value={textSize}
          onChange={(e) => setTextSize(e.target.value)}
          className="border border-gray-300 p-2"
        >
          {textSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Text Color:</label>
        <select
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="border border-gray-300 p-2"
        >
          {colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Line Spacing:</label>
        <select
          value={lineSpacing}
          onChange={(e) => setLineSpacing(e.target.value)}
          className="border border-gray-300 p-2"
        >
          <option value="leading-tight">Tight</option>
          <option value="leading-snug">Snug</option>
          <option value="leading-normal">Normal</option>
          <option value="leading-relaxed">Relaxed</option>
          <option value="leading-loose">Loose</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Word Spacing:</label>
        <select
          value={wordSpacing}
          onChange={(e) => setWordSpacing(e.target.value)}
          className="border border-gray-300 p-2"
        >
          <option value="tracking-tight">Tight</option>
          <option value="tracking-normal">Normal</option>
          <option value="tracking-wide">Wide</option>
        </select>
      </div>

      <div
        className={`p-4 border border-gray-300 ${fontFamily} ${textSize} ${textColor} ${lineSpacing} ${wordSpacing}`}
      >
        {text}
      </div>
    </div>
  );
};

export default TextEditor;
