import React from 'react';

const PlaceCategoria = (props) => {

    return (
        <div className="w-[244.5px] flex h-14 bg-gradient-to-l bg-slate-600 hover:from-slate-900 hover:to-slate-900 border-2 border-white bg-[#FFFFFF49] text-white">
            <div className='flex items-center px-3 gap-x-6'>
                <img src={props.imagen} alt="" className='w-[25px] h-[25px]'/>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}
export default PlaceCategoria
