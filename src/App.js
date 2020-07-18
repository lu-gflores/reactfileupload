import React from 'react';
import FileUpload from './components/FileUpload'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1>React File Upload Demo</h1>
      <FileUpload/>
    </div>
  );
}

export default App;
