import next from 'next';
import React from 'react';
import Tag from './Tag';
import Image from 'next/image'; //importar imagenes desde el proyecto

const PlaceLiga = ({nameLiga,temporada,imgPais='',imgLiga=''}) => {

    return(
        <div><div className='grid grid-cols-[40px,1fr,50px] bg-gradient-to-l from-[#83bbe2] to-[#b9b9b9] hover:from-cyan-500 hover:to-cyan-500 w-[244.5px] h-[72px] text-[16px] font-[Arial,Roboto,sans-serif]'>       
            {imgLiga ? (<div className='flex items-center justify-center'><Image src={imgLiga} width={30} height={30}/></div>) : (<div></div>)}
        
            <div className=' flex items-center justify-center'>
                <div className=''>
                    <h2>{nameLiga}</h2>
                    <div className='flex gap-x-2'>
                        <a href="#" className='hover:text-white'>{temporada}</a>
                        <p className='hover:text-white'>Historico</p>
                    </div>
                </div>
            </div>
            {/* {imgLiga && (<Image src={imgLiga} width={40} height={28}/>)}  para imagenes */}
            {imgPais ? (<div className='flex items-center justify-center'><Image src={imgPais} width={21} height={13}/></div>) : (<div></div>)}
        </div></div>    
    )
}

export default PlaceLiga