import { useState } from "react";
import { useSelector} from "react-redux";
import CurrentDate from "./currentDate";
import CurrentTime from "./currentTime";
import { TrashIcon } from '@heroicons/react/24/solid';
import UpdateTask from "./updateTaskBtn";
import { useDispatch } from "react-redux";
import { deleteTodo, checkboxTodo } from "../counter/todoSlice";
import Banner from "./banner";




function Tasks(){
    const todoArray = useSelector((state)=> state.todos.todos)
    const dispatch = useDispatch();
    const [taskRemoveBanner, setTaskRemoveBanner] = useState(false)

    console.log(todoArray)

    function deleteTask(id){
        console.log('delete')
        dispatch(deleteTodo(id))
        setTaskRemoveBanner(!taskRemoveBanner)

        setTimeout(() => {
            setTaskRemoveBanner(false)
        }, 3000);
    }

    function handleCheckbox(id){
        dispatch(checkboxTodo(id))

}


    if(todoArray.length === 0){
        return (
            <div className='grid place-content-center py-4 md:py-5 rounded-lg w-full bg-bg-2 '>
                <div className=' justify-center items-center flex rounded-lg px-2 py-1 text-black-1 text-md bg-gray-2 '>
                    No Todos
                </div>
            </div>
    )} 
    else {
        return(
            <>
            <div className='px-2 py-4 md:py-3 rounded-lg w-full bg-bg-2 '>


                {todoArray.map((todo) => (
                    <div className=' flex-row py-2 items-center flex rounded-lg mb-2  text-black-1 text-md bg-white '>
 
                        <div className="flex-none">
                            {todo.status === "Completed" && 
                                <input className="bg-gray-2 m-2 border-none h-4 w-4" onClick={() => handleCheckbox(todo.id)} defaultChecked type="checkbox"/>
                            }
                            {todo.status === "Incomplete" && 
                                <input className="bg-gray-2 m-2 border-none h-4 w-4" onClick={() => handleCheckbox(todo.id)} type="checkbox"/>
                            }
                        </div>

                        <div className="flex-none text-sm">

                        {todo.status === "Completed" && 
                            <div className="line-through">
                            {todo.text} 
                        </div>
                        }

                        {todo.status === "Incomplete" && 
                            <div className="">
                            {todo.text} 
                        </div>
                        }

                        

                        

                        <div className="flex flex-row font-medium">
                        <div className="text-xs"><CurrentTime /></div>
                        <div className="text-xs">,</div>
                        <div className="text-xs"><CurrentDate /></div>
                        </div>

                        </div>

                        <div className="flex-1 p-2">
                            <UpdateTask taskTitle={todo.text} taskId={todo.id} taskStatus={todo.status}/>
                            <button onClick={() => deleteTask(todo.id)} className="w-7 bg-gray-2 p-1 rounded-md float-right h-7"><TrashIcon /></button>
                        </div>

                    </div>
                        
                ))}
            </div>

            {taskRemoveBanner && 
            <div className="absolute right-1 -translate-x-1/2 bottom-0"><Banner isTick={true} message={"Todo Deleted Successfully"} /></div>

        }

            </>
            
            
        )
    }
}

export default Tasks;

// {customers?.map((customer) => (
//     <div
//       key={customer.id}
//       className="mb-2 w-full rounded-md bg-white p-4"
//     >
//       <div className="flex items-center justify-between border-b pb-4">
//         <div>
//           <div className="mb-2 flex items-center">
//             <div className="flex items-center gap-3">
//               <Image
//                 src={customer.image_url}
//                 className="rounded-full"
//                 alt={`${customer.name}'s profile picture`}
//                 width={28}
//                 height={28}
//               />
//               <p>{customer.name}</p>
//             </div>
//           </div>
//           <p className="text-sm text-gray-500">
//             {customer.email}
//           </p>
//         </div>
//       </div>
//       <div className="flex w-full items-center justify-between border-b py-5">
//         <div className="flex w-1/2 flex-col">
//           <p className="text-xs">Pending</p>
//           <p className="font-medium">{customer.total_pending}</p>
//         </div>
//         <div className="flex w-1/2 flex-col">
//           <p className="text-xs">Paid</p>
//           <p className="font-medium">{customer.total_paid}</p>
//         </div>
//       </div>
//       <div className="pt-4 text-sm">
//         <p>{customer.total_invoices} invoices</p>
//       </div>
//     </div>
//   ))}

