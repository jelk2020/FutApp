import react from "react";
import { ArrowLeftIcon, UserIcon } from '@heroicons/react/solid';
const Login = () => {

    return (
        <div className="bg-gradient-to-l from-[#83bbe2] to-[#b9b9b9] flex h-screen font-[Roboto,Arial,sans-serif] font-bold">
            <div className="bg-white grid grid-cols-[1fr,400px] m-auto rounded-lg items-center">
                <div ><img src="https://media.istockphoto.com/vectors/lifting-the-world-cup-vector-id165746402?k=20&m=165746402&s=612x612&w=0&h=QiHNiwGSXEqb3Qh6cbpwkbhYlAheGBTnEHlyP5R7ywA=" alt="" className="rounded-l-xl"/></div>
                <div className="p-4 text-slate-600">
                    <a href="/" className="flex justify-end"><ArrowLeftIcon className="w-5 h-5"/></a>
                    <form action="">
                        <h1 className="text-center text-[35px] text-black">Ingresar</h1><br />

                        <h3>Usuario</h3>
                        <input type='text' name="usuario" placeholder="Nombre de usuario" className="border-2 border-transparent w-80 border-b-slate-500 focus:border-transparent focus:ring-0"/><br /><br />

                        <h3>Contraseña</h3>
                        <input type='password' placeholder="Contraseña" className="border-2 border-transparent border-b-slate-500 w-80"></input><br /><br />

                        <h6 className="flex justify-end"><a href="#">Olvidaste tu contraseña?</a></h6><br />
                        <div className="flex justify-center"><button className="bg-gradient-to-l from-cyan-500/50 to-cyan-500/50 hover:from-cyan-600 hover:to-cyan-600 shadow-lg shadow-cyan-500/50 w-[200px] h-[40px] rounded-full">LOGIN</button></div><br /><br />
                        <div className="items-center">
                            <h3 className="text-center">Registrate Usando</h3>
                            <div className="flex gap-x-4 justify-center">
                                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="facebook" className="w-[25px] h-[25px]"/></a>
                                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="facebook" className="w-[25px] h-[25px]"/></a>
                                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="facebook" className="w-[25px] h-[25px]"/></a>
                            </div>
                        </div>
                        <br /><br />
                        <a href="#" className="flex justify-center">Registrarse</a><br /><br />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

            {/* PRUEBAS */}

            {/* <select class="px-4 py-3 rounded-full">
            <input type="checkbox" class="rounded text-pink-500" />

            </select>
            <input type="email" className="form-input px-4 py-3 rounded-full"/>
            <select class="form-select px-4 py-3 rounded-full">
            </select>
            <input type="checkbox" class="form-checkbox rounded text-pink-500"/> */}
