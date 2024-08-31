import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";


function Banner({message, isTick}){
    return (
        <div className="flex items-center flex-row bg-white rounded-lg shadow-lg p-2 mb-4">

            {isTick && 
                <div className="w-5 h-5 fill-white mr-2">
                    <CheckCircleIcon />
                </div>
            }

            {!isTick && 
                <div className="w-5 h-5 fill-white mr-2">
                    <XCircleIcon />
                </div>
            }

            <p className="text-xs ">{message}</p>
        </div>
    )
}

export default Banner;