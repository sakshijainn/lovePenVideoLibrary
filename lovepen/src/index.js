import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { VideoProvider } from './Context/VideoContext';
import {AuthProvider} from './Context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
     <AuthProvider>
 <VideoProvider>
 
 <App />

 </VideoProvider>
 
</AuthProvider>
   
   
  </React.StrictMode>,
  document.getElementById('root')
);

