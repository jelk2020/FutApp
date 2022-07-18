import React from "react";

const PlaceCuadro = ({imagen,name}) => {
    return (
        <div className="border-2 w-48 flex h-48">
            <div className="m-auto">
                <img src={imagen} alt="SD" className="m-auto py-1"/>
                <h1 className="text-white text-center">{name}</h1>
            </div>
        </div>
    )

}

export default PlaceCuadro