import React from 'react'
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
import Moon from '../../assets/icons/homepage/Moon.png'
import Rain from '../../assets/icons/homepage/Rain.png'
import Security from '../../assets/icons/homepage/Security.png'
import Backups from '../../assets/icons/homepage/Backups.png'
import UserAdd from '../../assets/icons/homepage/Adduser.png'
import OS from '../../assets/icons/homepage/AberturaChamado.png'
import CustomSearchBar from '../../components/custom/searchbar/CustomSearchBar';

const LayoutSite = () => {

  const handleSearch = (query : string) => {
    console.log("Estou Buscando por ...")
  }

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
            <p>25°</p>
            <img src={Rain} alt="Chuva"/>{/*esse icone vai mudar para sol noite de acordo com retorno api*/}
          </div>
          <div className={style.cityDate}>
              <p className={style.cityName}>Goiânia</p>{/*Nome da Cidade deve ser alterada de acordo com retorno da api*/}
              <p className={style.daysAndYear}>Terça-Feira 2025</p>{/*Dia da semana e ano deve mudar de acordo com a api*/}
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