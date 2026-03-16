import { useState } from "react";
import { useSelector } from "react-redux";
import CurrentDate from "./currentDate";
import CurrentTime from "./currentTime";
import { TrashIcon } from '@heroicons/react/24/solid';
import UpdateTask from "./updateTaskBtn";
import { useDispatch } from "react-redux";
import { deleteTodo, checkboxTodo } from "../counter/todoSlice";
import Banner from "./banner";

function TaskList({ filter }) {
    const todoArray = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch();
    const [taskRemoveBanner, setTaskRemoveBanner] = useState(false)

    const displayedTasks = filter === "All"
        ? todoArray
        : todoArray.filter((todo) => todo.status === filter)

    function deleteTask(id) {
        dispatch(deleteTodo(id))
        setTaskRemoveBanner(true)
        setTimeout(() => setTaskRemoveBanner(false), 3000);
    }

    function handleCheckbox(id) {
        dispatch(checkboxTodo(id))
    }

    if (displayedTasks.length === 0) {
        return (
            <div className='grid place-content-center py-4 md:py-5 rounded-lg w-full bg-bg-2 '>
                <div className=' justify-center items-center flex rounded-lg px-2 py-1 text-black-1 text-md bg-gray-2 '>
                    No Todos
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='px-2 py-4 md:py-3 rounded-lg w-full bg-bg-2 '>
                {displayedTasks.map((todo) => (
                    <div key={todo.id} className=' flex-row py-2 items-center flex rounded-lg mb-2  text-black-1 text-md bg-white '>

                        <div className="flex-none">
                            <input
                                className="bg-gray-2 m-2 border-none h-4 w-4"
                                onClick={() => handleCheckbox(todo.id)}
                                defaultChecked={todo.status === "Completed"}
                                type="checkbox"
                            />
                        </div>

                        <div className="flex-none text-sm">
                            <div className={todo.status === "Completed" ? "line-through" : ""}>
                                {todo.text}
                            </div>

                            <div className="flex flex-row font-medium">
                                <div className="text-xs"><CurrentTime /></div>
                                <div className="text-xs">,</div>
                                <div className="text-xs"><CurrentDate /></div>
                            </div>
                        </div>

                        <div className="flex-1 p-2">
                            <UpdateTask taskTitle={todo.text} taskId={todo.id} taskStatus={todo.status} />
                            <button onClick={() => deleteTask(todo.id)} className="w-7 bg-gray-2 p-1 rounded-md float-right h-7"><TrashIcon /></button>
                        </div>

                    </div>
                ))}
            </div>

            {taskRemoveBanner &&
                <div className="absolute right-1 -translate-x-1/2 bottom-0">
                    <Banner isTick={true} message={"Todo Deleted Successfully"} />
                </div>
            }
        </>
    )
}

export default TaskList;
