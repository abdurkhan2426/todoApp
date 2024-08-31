import { TrashIcon } from '@heroicons/react/24/solid';


function DeleteTask(){
    return (
        <button className="w-7 bg-gray-2 p-1 rounded-md float-right h-7"><TrashIcon /></button>

    )
}

export default DeleteTask;