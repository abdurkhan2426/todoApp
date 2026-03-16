import './App.css';
import AddTask from './components/addTaskBtn.js';
import TaskList from './components/taskList.js';
import { useState } from 'react';

function App() {
  const [taskFilter, setTaskFilter] = useState("All");

 return (
  <div className='h-screen '>



  <div className=' flex flex-row'>
    <div className='  md:block hidden flex-1'></div>

  <div className='flex flex-col flex-1 md:flex-none md:w-[720px] '>

   <div className='justify-center text-black-1 flex font-[850] my-5 md:text-4xl  text-3xl '>
      <p>TODO LIST</p>
   </div>

   <div className='flex-col  mx-6 md:mx-0 font-bold'>

      <div className='flex-row   pt-4 pb-3'>
        <AddTask />

        <select onChange={(e) => setTaskFilter(e.target.value)} className='bg-bg-3 float-right p-2 text-black-1 flex-1 rounded-lg w-40 h-11'>
          <option>All</option>
          <option>Incomplete</option>
          <option>Completed</option>
        </select>
      </div>

      <TaskList filter={taskFilter} />

   </div>

   </div>

   <div className=' flex-1 md:block hidden float-right'></div>

   </div>


   </div>
  );
}

export default App;
