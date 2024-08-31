import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../counter/todoSlice";
import { PencilIcon } from '@heroicons/react/24/solid';
import { useSelector } from "react-redux";
import Banner from "./banner";



function UpdateTask({taskTitle, taskStatus, taskId}){
    const [open, setOpen] = useState(false)
    const todoArray = useSelector((state)=> state.todos.todos)
    const [task, setTask] = useState(`${taskTitle}`)
    const [taskStat, setStat] = useState(`${taskStatus}`)
    const [taskUpdateBanner, setTaskUpdateBanner] = useState(false)
    const [updateTitleBanner, setUpdateTitleBanner] = useState(false)

    const dispatch = useDispatch();

    function updateTask(){

        if(task === taskTitle && taskStat === taskStatus){
            setUpdateTitleBanner(!updateTitleBanner)

            setTimeout(() => {
                setUpdateTitleBanner(false)
            }, 3000);

        } else {
            dispatch(updateTodo(task, taskStat, taskId))
            setOpen(!open)
            setTaskUpdateBanner(!taskUpdateBanner)

            setTimeout(() => {
                setTaskUpdateBanner(false)
            }, 3000);
        }
        
        
    }

    function pencilClicked(){
        
        setOpen(!open)
    }

    // function findTodo(){
    //     todoArray.forEach((item, index) => {
    //         if(item.id === id){
    //           console.log(todoArray[index].text)
    //           return todoArray[index].text
    //         }
    //       })
    // }

    // 
    return (
        <>
        <button onClick={() => pencilClicked()} className="w-7 bg-gray-2 p-1 ml-2 rounded-md float-right h-7"><PencilIcon /></button>


        {open && (
            <>
            <div  className=" justify-center w-[100%] max-w-[540px] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 items-center flex  fixed inset-0 z-50 ">
                    <div className=" flex-1 mx-4">
                        <div className="p-4 border-0 justify-center rounded-lg shadow-lg relative flex flex-col w-full bg-bg-2 ">

                            <div className="flex-col">

                                <div className="text-xl text-black-1 mt-1 mb-4 w-[300px]">
                                    Update TODO
                                </div>

                                <div className="flex-col mb-4 flex-1 ">

                                    <p className="text-black-1 font-medium">Title</p>

                                    

                                    <input type="text" value={task}  onChange={(e) => setTask(e.target.value)} className="bg-white  my-1 h-11 w-full"/>
                                </div>

                                <div className="flex-col mb-10">
                                    <p className="text-black-1 font-medium">Status</p>

                                    <select onChange={(e) => setStat(e.currentTarget.value)} defaultValue={`${taskStatus}`} className='bg-white p-2 my-1 text-lg font-medium  h-12 w-full'>
                                        <option>Incomplete</option>
                                        <option>Completed</option>
                                    </select> 

                                </div>

                                <div className="mb-2">
                                    
                                <button 
                                    onClick={() => updateTask()}
                                    className='bg-primaryPurple w-28 mr-2 h-10 rounded-lg flex-none col text-white'>Update Task
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

        {taskUpdateBanner && 
            <div className="absolute right-1 -translate-x-1/2 bottom-0"><Banner isTick={true} message={"Task updated successfully"} /></div>

        }

        {updateTitleBanner && 
            <div className="absolute right-1 -translate-x-1/2 bottom-0"><Banner isTick={false} message={"No changes made"} /></div>

        }

        </>

    )

    
}



export default UpdateTask;

// cross
// <button
//     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//     onClick={() => setOpen(!open)}
// >
//     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//         ×
//     </span>
// </button>