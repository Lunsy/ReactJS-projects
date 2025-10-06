import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const text = 'Hello World!';

const elem = (
  <div>
    <h2>Text: {text}</h2>
    <input type="text" />
    <button />
  </div>
);

createRoot(document.getElementById('root')).render(
  elem
)
