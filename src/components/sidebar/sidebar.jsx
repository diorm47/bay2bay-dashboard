import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar_wrapper">
      <h3>Панель администратора</h3>
      <div className="sidebar_links">
        <NavLink to="/settings">
          <p>Настройки</p>
        </NavLink>
        <NavLink to="/shops">
          <p>Магазины</p>
        </NavLink>
        <NavLink to="/prefix">
          <p>Префиксы тем</p>
        </NavLink>
        <NavLink to="/icons-banners">
          <p>Значки и баннеры</p>
        </NavLink>

        <NavLink to="/nodes">
          <p>Узлы</p>
        </NavLink>
        <NavLink to="/users">
          <p>Уровни пользователей</p>
        </NavLink>
        <NavLink to="/users">
          <p>Пользователи</p>
        </NavLink>
        <NavLink to="/ads">
          <p>Реклама и связь</p>
        </NavLink>
        <NavLink to="/team">
          <p>Команда сайта</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
