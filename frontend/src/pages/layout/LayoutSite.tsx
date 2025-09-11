import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PathRoutes from '../../config/RoutesPath'
import style from './LayoutSite.module.css';
import UserIcon from '../../assets/icons/homepage/userpng.svg';
import HomeIcon from '../../assets/icons/homepage/home.png'
import Dashboard from '../../assets/icons/homepage/DashBoard.png'
import Logout from '../../assets/icons/homepage/Exit.png'
import Note from '../../assets/icons/homepage/adicionar.png'
import TodoList from '../../assets/icons/homepage/ToDoList.png'
import Sun from '../../assets/icons/homepage/Clima.png'
import Clouds from '../../assets/icons/homepage/Clouds.svg'
import Wet from '../../assets/icons/homepage/Wet.svg'
import Rain from '../../assets/icons/homepage/Rain.png'
import Security from '../../assets/icons/homepage/Security.png'
import Backups from '../../assets/icons/homepage/Backups.png'
import UserAdd from '../../assets/icons/homepage/Adduser.png'
import OS from '../../assets/icons/homepage/AberturaChamado.png'
import CustomSearchBar from '../../components/custom/searchbar/CustomSearchBar';
import { ApiClimaTempo } from '../../services/ApiClimaTempo/ApiClimaTempo';

interface ClimaTempoApi{
  temperatura : string, 
  clima       : string,
  cidade      : string,
  dia         : string,
  diaMesAno   : string
}

const LayoutSite = () => {

  const getApiClimaTempo = async() => {
    const clima = await ApiClimaTempo();
    return clima;
  }

  const handleSearch = (query : string) => {
    console.log("Estou Buscando por ...")
  }

  const [clima, setClima] = useState<ClimaTempoApi | null>(null);

  useEffect(() => {
   getApiClimaTempo()
    .then(dataApi => setClima(dataApi))
    .catch(error => console.error(error));
}, []);
  

  return (
    <div className={style.containerSite}>
      <header>
        <div className={style.search}>
          <CustomSearchBar placeholder='Busca no ERP' onSearch={handleSearch}/>
        </div>
        <div className={style.fastButtons}>
          <div className={style.imgcontainer}>
            <img src={Note}/>
          </div>
          <div className={style.imgcontainer}>
            <img src={TodoList}/>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.climateIconAndTemp}>
            <p>{clima?.temperatura}</p>
            <img 
              src={clima?.clima === "chuva" ? Rain :
                clima?.clima === "nublado" ? Clouds:
                clima?.clima === "chuva forte" ? Wet:
                clima?.clima === "céu limpo" ? Sun : Sun 
              } alt="tempo"/>
          </div>
          <div className={style.cityDate}>
              <p className={style.cityName}>{clima?.cidade}</p>
              <p className={style.daysAndYear}> {`${clima?.dia} ${clima?.diaMesAno}`}</p>
  </div>
</div>
       
      </header>
      <nav>
          <div>
            <img src = {UserIcon}/>
          </div>
          <div>
            <img src = {HomeIcon}/>
          </div>
          <div>
            <img src = {Dashboard}/>
          </div>
          <div>
            <img src = {Logout}/>
          </div>
      </nav>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default LayoutSite