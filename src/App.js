import './App.css';


function App() {
  return (
    <div className='camera'> 
    <div className='black_body'>
      <div className='white_body'>
        <hr className='hr hr_top'/>
        <hr className=' hr hr_buttom'/>
        <div className='colors'>
        <hr className='hr_color hr_red'></hr>
        <hr className='hr_color hr_yellow'></hr>
        <hr className='hr_color hr_green'></hr>
        <hr className='hr_color hr_blue'></hr>
        <hr className='hr_color hr_orange'></hr>
        </div>
        
        <div className='inner_body'>
          
          <div className='circle circle_1'></div>

          <div className='shutter'>
            <div className='mirror'></div>
          </div>
          <div className='circle circle_2'></div>
         
        </div>
        
      </div>
      <div className='holder'></div>
    </div>
    
   
        </div>
  );
}

export default App;

  
