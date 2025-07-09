import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GiftExpertApp } from './GiftExpertApp'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>,
)
