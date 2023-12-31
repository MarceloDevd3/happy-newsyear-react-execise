import './App.css';
import Box from './components/Dispay'
import Title from './components/Title'
import useCountDown from './components/hooks/useCounDown'


function App() {

  const [day, hour, Minute, segundo] = useCountDown('jan 1, 2024 00:00:00') ;
  return (
    <main>
    <img src="https://images.unsplash.com/photo-1514876246314-d9a231ea21db?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <div className='container'>
       <div className='container-box'>
        <Title />
          <div className='box-zone'>
          <Box valor={day} title={'Dia'} />
          <Box valor={hour} title={'hora'} />
          <Box valor={Minute} title={'minuto'} />
          <Box valor={segundo} title={'segundo'} />
          </div>
       </div>
    </div>
    </main>
   
      
  );
}

export default App;
