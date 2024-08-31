import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../counter/todoSlice";
import Banner from "./banner";


function AddTask(){
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('Incomplete')
    const [taskAddBanner, setTaskAddBanner] = useState(false)
    const [enterTitleBanner, setEnterTitleBanner] = useState(false)
    const dispatch = useDispatch();

    function addTask(){

        if(title === ""){
            setEnterTitleBanner(!enterTitleBanner)

            setTimeout(() => {
                setEnterTitleBanner(false)
            }, 3000);

        } else {
            dispatch(addTodo(title, status))
            setOpen(!open)
            setTaskAddBanner(!taskAddBanner)

            setTimeout(() => {
                setTaskAddBanner(false)
            }, 3000);
        }
        
        setTitle("")
    }


    return (
        <>
        <button 
            onClick={() => setOpen(!open)}
            className='bg-primaryPurple w-28 h-10 rounded-lg flex-none col text-white'>Add Task
        </button>



        {open && (
            <>
            <div  className=" justify-center w-[100%] max-w-[540px] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 items-center flex  fixed inset-0 z-50 ">
                    <div className=" flex-1 mx-4">
                        <div className="p-4 border-0 justify-center rounded-lg shadow-lg relative flex flex-col w-full bg-bg-2 ">

                            <div className="flex-col">

                                <div className="text-xl text-black-1 mt-1 mb-4 w-[300px]">
                                    Add TODO
                                </div>

                                <div className="flex-col mb-4 flex-1 ">

                                    <p className="text-black-1 font-medium">Title</p>

                                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="bg-white  my-1 h-11 w-full"/>
                                </div>

                                <div className="flex-col mb-10">
                                    <p className="text-black-1 font-medium">Status</p>

                                    <select defaultValue="Incomplete" onChange={(e) => setStatus(e.target.value)} className='bg-white p-2 my-1 text-lg font-medium  h-12 w-full'>
                                        <option value="Incomplete">Incomplete</option>
                                        <option value="Completed">Completed</option>
                                    </select> 

                                </div>

                                <div className="mb-2">
                                    
                                <button 
                                    onClick={() => addTask()}
                                    className='bg-primaryPurple w-28 mr-2 h-10 rounded-lg flex-none col text-white'>Add Task
                                </button>

                                <button 
                                    onClick={() => setOpen(!open)}
                                    className='bg-bg-3 text-black-1 w-24 h-10 rounded-lg flex-none col '>Cancel
                                </button>


                                </div>

                            </div>


                        </div>                     
                    </div>
                </div>

                
                
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div></>

                
                
        )}

        {taskAddBanner && 
            <div className="absolute right-1 -translate-x-1/2 bottom-0"><Banner isTick={true} message={"Task added successfully"} /></div>

        }

        {enterTitleBanner && 
            <div className="absolute right-1 -translate-x-1/2 bottom-0"><Banner isTick={false} message={"Please enter a title"} /></div>

        }

        



        </>

    )

    
}



export default AddTask;

// cross
// <button
//     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//     onClick={() => setOpen(!open)}
// >
//     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//         ×
//     </span>
// </button>