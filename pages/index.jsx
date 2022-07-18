import React,{useState} from "react";
import PlaceLiga from "../components/placeliga";
import PlaceCategoria from "../components/placecategoria";
import PlaceCuadro from "../components/placecuadro";

export default function Home() {
    const [showSearch,setShowSearch] = useState(false);
    // const searchState = useState(false);
    // const showSearch = searchState[0];
    // const setShowSearch = searchState[1];

    const handleShowSearch = () => {
      setShowSearch(true);
    }
  

  return (
    
    <div className="bg-[#101E27] bg-auto py-1 font-[Roboto,Arial,sans-serif]">
      <div className="mr-56 ml-56">

        {/* INICIAR */}
          <nav className="flex justify-end items-center text-white py-3" >
            <div className="flex items-center gap-x-4 text-[12px]">
              <a href="/login">Iniciar</a>
              <a href="/signin">Eliminar Publicidad</a>
              <select name="" id="" className="bg-[#101E27] text-[12px] border-none border-transparent focus:border-transparent focus:ring-0 px-5">
                <option selected value="ES">Español</option>
                <option value="EN">Ingles</option>
                <option value="QE">Quechua</option>
              </select>
              <a href="/signin">Ligh mode</a>
            </div>
          </nav>


        {/* BARRA DE MENU */}
          <header className="flex justify-between text-white py-3">
            <a href="localhost:3000/"><img src="https://www.bdfutbol.com/img/logo_bdfutbol_white.png" alt="principal"/></a>

            <div className="flex items-center text-[#defff8] text-[16px] gap-x-4">
              <a href="#">Ligas</a>   
              <a href="#">Competiciones</a>
              <a href="#">Equipos</a>
              <a href="#">Seleccion</a>
              <a href="#">Rankings</a>
              <a href="#">Comunidad</a>
              <select name="" id="" className="bg-[#101E27] text-[12px] border-none px-0">
                <option selected>፧</option>
                <option value="JU" href="#">Jugadores</option>
                <option value="ENT">Entrenadores</option>
                <option value="AR">Arbitros</option>
              </select>
              {showSearch ? <input type="text" className="w-32 h-8 text-black" /> : null}
              <a onClick={handleShowSearch} href="#">Buscar</a>
            </div>
          </header>


       {/* LIGAS */}
          <section className="py-3">
            <div className="flex justify-between text-white">
              <h1 className="text-[22px]">Ligas</h1>
              <a href="#">Ver mas</a>
            </div>

            <div className="grid grid-cols-4 gap-x-8 gap-y-4">
              <PlaceLiga imgLiga="/imagen/liga/esp1.png" imgPais="/imagen/pais/es.jpg" nameLiga="Primera Division" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/esp2.png" imgPais="/imagen/pais/es.jpg" nameLiga="Segunda Division" temporada="2021-22" />
              <PlaceLiga imgLiga="/imagen/liga/esp3.png" imgPais="/imagen/pais/es.jpg" nameLiga="1ª RFEF" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/esp4.png" imgPais="/imagen/pais/es.jpg" nameLiga="2ª RFEF" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/ing.png" imgPais="/imagen/pais/gb-eng.jpg" nameLiga="Premier League" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/ale.png" imgPais="/imagen/pais/al.jpg" nameLiga="Bundesliga" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/itl.png" imgPais="/imagen/pais/it.jpg" nameLiga="Serie A" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/fra.png" imgPais="/imagen/pais/fr.jpg" nameLiga="Ligue 1" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/por.png" imgPais="/imagen/pais/pt.jpg" nameLiga="Primeira Liga" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/hol.png" imgPais="/imagen/pais/nl.jpg" nameLiga="Eredivisie" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/bra.png" imgPais="/imagen/pais/br.jpg" nameLiga="Brasileirao" temporada="2022-23"/>
              <PlaceLiga imgLiga="/imagen/liga/esp5.png" imgPais="/imagen/pais/es.jpg" nameLiga="Liga Femenina" temporada="2021-22"/>
            </div> 
          </section>


        {/* COMPETICIONES */}
          <section className="py-3">
            <div className="flex justify-between text-white">
                <h1 className="text-[22px]">Competiciones</h1>
                <a href="#">Ver mas</a>
            </div>

            <div className="grid grid-cols-4 gap-x-8 gap-y-4">
              <PlaceLiga imgLiga="/imagen/liga/champions.png" nameLiga="Liga de campeones" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/uefa.png" nameLiga="Europa League" temporada="2021-22" />
              <PlaceLiga imgLiga="/imagen/liga/conference.png" nameLiga="Conference League" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/supercopaeur.png" nameLiga="Supercopa de Europa" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/mundialclubes.png" nameLiga="Mundial de Clubes" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/coparey.png" nameLiga="Copa del Rey" temporada="2021-22" />
              <PlaceLiga imgLiga="/imagen/liga/supercopaesp.png" nameLiga="Supercopa" temporada="2021-22"/>
              <PlaceLiga imgLiga="/imagen/liga/recopa.png" nameLiga="Recopa" temporada="1998-9"/>
            </div>
          </section>


        {/* RANKINGS */}
          <section className="py-3">
            <div className="flex justify-between text-white">
                <h1 className="text-[22px]">Ranking</h1>
                <a href="#">Ver mas</a>
            </div>

            <div  className="grid grid-cols-4 gap-x-8 gap-y-4">
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/icons/player.png" name="Jugadores" temporada="2021-22"/>
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/icons/coach.png" name="Entrenadores" temporada="2021-22"/>
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/icons/referee.png" name="Arbitros" temporada="2021-22"/>
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/icons/season.png" name="Temporadas" temporada="2021-22"/> 
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/icons/team.png" name="Equipos" temporada="2021-22"/>
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/logo_seleccio_espanyola.png" name="Seleccion Peruana" temporada="2021-22"/>
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/icons/trophy.png" name="Trofeos" temporada="2021-22"/>
              <PlaceCategoria imagen="https://www.bdfutbol.com/img/icons/list.png" name="Efemerides" temporada="2021-22"/>
            </div>
          </section>


        {/* SELECCION ESPAÑOLA */}
          <section className="py-3">
           <div className="flex justify-between text-white">
                <h1 className="text-[22px]">Seleccion Española</h1>
                <a href="#">Ver mas</a>
           </div>

            <div  className="grid grid-cols-4 gap-x-8 gap-y-4">
              <PlaceLiga imgLiga="/imagen/liga/eurocopa2020.png" nameLiga="Eurocopa" temporada="2020"/>
              <PlaceLiga imgLiga="/imagen/liga/mundial2018.png" nameLiga="Mundial" temporada="2018"/>
              <PlaceLiga imgLiga="/imagen/liga/eurocopas21.png" nameLiga="Eurocopa Sub-21" temporada="2019"/>
              <PlaceLiga imgLiga="/imagen/liga/eurocopas21.png" nameLiga="Mundial Sub-20" temporada="2013"/>
              <PlaceLiga imgLiga="/imagen/liga/eurocopas19.png" nameLiga="Eurocopa Sub-19" temporada="2019"/>
              <PlaceLiga imgLiga="/imagen/liga/olimpicos.png" nameLiga="Juegos Olimpicos" temporada="2020"/>
            </div>
          </section>


        {/* EQUIPOS-JUGADORES-ENTRENADORES-ARBITROS */}
          <section className="py-5">
            <div className="bg-[#FFFFFF49] p-4">
              <div className="flex justify-center gap-x-4 text-white py-3">
                    <a href="#">Equipos</a>
                    <a href="#">Jugadores</a>
                    <a href="#">Entrenadores</a>
                    <a href="#">Arbitros</a>
              </div>

              <div  className="grid grid-cols-4 gap-y-4 gap-x-8">
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/lliga.png" name="Primera Division"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/lliga.png" name="Segunda Division"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/lliga3.png" name="Segunda Division B"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/premier.png" name="Premier League"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/bundesliga.png" name="Bundesliga"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/seriea.png" name="Seria A"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/ligue1.png" name="Ligue 1"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/primeira.png" name="Primeira Liga"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/eredivisie.png" name="Eredivisie"/>
                <PlaceCategoria imagen="https://www.bdfutbol.com/img/leagues/brasileirao.png" name="Brasileirao"/>
              </div>
            </div>
          </section>


        {/* BLOG */}
          <section className="py-5">
            <div className="text-white flex justify-between items-center py-3">
              <h1 className="text-[22px]">Blog</h1>
              <h1>Mas Articulos</h1>
            </div>

            <div  className="bg-gradient-to-l from-[#83bbe2] to-[#b9b9b9] grid grid-cols-[1fr,1fr,1fr,1fr]">
              <div className="item-center justify-center m-5 ">
                <h3 className="text-[15px]">Version 15.12</h3>
                <img src="https://blog.bdfutbol.com/wp-content/uploads/2022/04/cup-winners-logo-210033238-1.jpg" alt="version12" className="p-4"/>
                <a href="#" className="text-[14px]">Nueva actualización de la web, principalmente para ampliar la base de datos. Las novedades son: Temporadas 1960-1970 de la liga…</a>
              </div>

              <div className="item-center justify-center m-5">
                <h3 className="text-[15px]">Version 15.11</h3>
                <img src="https://blog.bdfutbol.com/wp-content/uploads/2022/03/emb_0021-1.png" alt="version11" className="p-4"/>
                <a href="#" className="text-[14px]">Novedades muy importantes en esta nueva actualización de BDFutbol. Lo más destacado es la inclusión de la liga brasileña (desde…
                10/3/2022 19:02:03</a>
              </div>

              <div className="item-center justify-center m-5">
                <h3 className="text-[15px]">Version 15.10</h3>
                <img src="https://blog.bdfutbol.com/wp-content/uploads/2022/01/92780b.jpg" alt="version10" className="p-4"/>
                <a href="#" className="text-[14px]">Llega la primera actualización de este año 2022, con unas cuantas novedades interesantes en cuanto a ampliación de la base…
                8/1/2022 19:33:15</a>
              </div>

              <div className="item-center justify-center m-5">
                <h3 className="text-[15px]">Version 15.9</h3>
                <img src="https://blog.bdfutbol.com/wp-content/uploads/2021/11/Sin-titulo.jpg" alt="version9" className="p-4"/>
                <a href="#" className="text-[14px]">En esta actualización intermedia ampliamos los históricos de la liga portuguesa (10 temporadas más) y la liga italiana (2 temporadas…
                23/11/2021 19:12:25</a>
              </div>
            </div> 
          </section>

        
        {/* CUADROS */}
          <section className="py-3">
            <div className="grid grid-cols-5 gap-y-4 gap-x-4 py-5">
              <PlaceCuadro name="Servicio de Datos" imagen="https://www.bdfutbol.com/img/icons/data.png"/>
              <PlaceCuadro name="API" imagen="https://www.bdfutbol.com/img/icons/api.png"/>
              <PlaceCuadro name="Trivial" imagen="https://www.bdfutbol.com/img/icons/trivial.png"/>
              <PlaceCuadro name="Enlaces" imagen="https://www.bdfutbol.com/img/icons/links.png"/>    
              <PlaceCuadro name="Completitud" imagen="https://www.bdfutbol.com/img/icons/info.png"/>        
            </div>
            <br/>
            <div className="border-2 w-44 flex h-10">
              <h1 className="text-white m-auto">Notificar Error</h1>
            </div>
          </section>


        {/* FOOTER */}
          <footer className="py-5 flex justify-between text-[13px]">
            <div className="text-white">
              <a href="#"><img src="https://www.bdfutbol.com/img/logo_bdfutbol_white.png" alt="logo" className="w-[110px] h-[20px]"/>
              v15.12.2</a><br /><br />
              <p>Última actualización: 20/06/2022</p><br />
              <p>Jugadores: 90.178</p>
              <p>Entrenadores: 5.255</p>
              <p>Árbitros: 3.294</p>
              <p>Partidos: 245.359</p><br />
              <p>Colaboran sport</p>
              <p>bonosdecasasdeapuestas.com</p>
              <p>betting-india.pro</p>
            </div>

            <div className="grid grid-cols-3 text-white gap-x-12">
              <div className="grid grid-row">
                <p>Secciones</p><br />
                <a href="#">Ligas</a>
                <a href="#">Competiciones</a>
                <a href="#">Rankings</a>
                <a href="#">Equipos</a>
                <a href="#">Jugadores</a>
                <a href="#">Entrenadores</a>
                <a href="#">Arbitros</a>
                <a href="#">Seleccion Espanola</a>
                <a href="#">Comunidad</a>
                <a href="#">Servicio de Datos</a>
              </div>         

              <div className="grid grid-row">
                <p>Otros</p><br />
                <a href="#">Informacion</a>
                <a href="#">API</a>
                <a href="#">Trivial</a>
                <a href="#">Enlaces</a>
                <a href="#">Completitud</a>
                <a href="#">Foro</a>
                <a href="#">Blog</a>
                <a href="#">Contacto</a>
                <a href="#">Donar</a> 
                <a href="#">BDBasket</a> 
              </div>
  
              <div>
                <a href="#">↑</a>
              </div>
            </div>
          </footer>


        {/* REDES SOCIALES */}
          <footer className="text-white py-8 flex justify-between text-[13px]">
            <div>© 2008—2022 Base de Datos Histórica de Fútbol.</div>
            <div className="flex gap-x-4">
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="facebook" className="w-[32px] h-[32px]"/></a>
              <a href="#"><img src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670151.png?token=exp=1657508086~hmac=554bd0db9f1ae15fa86ff9323b1dd1c7" alt="Twitter" className="w-[32px] h-[32px]"/></a>
              <a href="#"><img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504802.png?token=exp=1657508140~hmac=0d2d7d299b69ca87f54b27fdafac4429" alt="Paypal" className="w-[32px] h-[32px]"/></a>
              <a href="#"><img src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670291.png?token=exp=1657508169~hmac=875ae1cdb1de88b2dfad506c496781c6" alt="Rss" className="w-[32px] h-[32px]"/></a>
              <a href="#"><img src="https://cdn-icons.flaticon.com/png/512/5323/premium/5323491.png?token=exp=1657508223~hmac=a9649577798ad44c4a4fa7d6cdafc36b" alt="Forum" className="w-[32px] h-[32px]"/></a>
            </div>
          </footer>

      </div>
    </div>
  )
}