import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import CustomForm from './components/CustomForm'

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className='app'>
      <h1>Asignador de MOTES</h1>
      <CustomForm onSubmit = {handleFormSubmit}/>
      <Card data={formData}/>
    </div>
  )
}

export default App
