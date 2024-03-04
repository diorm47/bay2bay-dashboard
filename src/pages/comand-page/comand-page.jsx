import React, { useState } from "react";
import { ReactComponent as AddModer } from "../../assets/icons/add-moder.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import "./comand-page.css";
import avatar from "../../assets/images/avatar.png";

function CommandPage() {
  const [modal, setModal] = useState(false);
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  return (
    <>
      {modal ? (
        <div className="overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}

      {modal ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Редактирование прав модератора</h3>
          </div>
          <div className="team_page_modal">
            <div
              className={
                content1
                  ? "team_page_modal_block team_page_modal_block_visible"
                  : "team_page_modal_block"
              }
            >
              <div
                className="team_page_modal_block_title"
                onClick={() => setContent1(!content1)}
              >
                <h3>Права для форума</h3>
                <ArrowDown />
              </div>

              <div className="team_page_modal_block_content">
                <div className="team_page_modal_item">
                  <p>Использование поиска по форуму</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Требовать включение двухфактроной аутентификации</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Использование Forum Chat</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Редактирование своего ID</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Редактирование своего нестандартного звания</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Редактирование своего лого в профиле</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Редактирование своего баннера в профиле</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>

                <div className="team_page_modal_item">
                  <p>Создавать диалоги с пользователями</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p>штук в 15 минут</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Приглашать пользователей в диалог</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p> штук в один диалог</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Создавать свои темы</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p>штук в 15 минут</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Редактирование своих тем</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p> минут после создания темы</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Удаление своих тем</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p> минут после создания темы</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Редактирование своих сообщений</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p> минут после создания темы</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Удаление своих тем</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p> минут после создания темы</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Редактирование своих сообщений</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p> минут после создания сообщения</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Удаление своих сообщений</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p> минут после создания сообщения</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Создавать сообщения в темах</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p>штук в 15 минут</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Создавать сообщения в профилях пользователей</p>
                  <div className="team_page_modal_item_inputs team_page_modal_item_inputs_secondary">
                    <div>
                      <input type="radio" />
                      <p>Да, без ограничений</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Да, с ограничением до </p>
                      <input type="text" />
                      <p>штук в 15 минут</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>

                <div className="team_page_modal_item">
                  <p>Ставить реакции на сообщения</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Цитировать чужие сообщения</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="team_page_modal_item">
                  <p>Цитировать свои сообщения</p>
                  <div className="team_page_modal_item_inputs">
                    <div>
                      <input type="radio" />
                      <p>Да</p>
                    </div>
                    <div>
                      <input type="radio" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="save_btn">
                  <button>Сохранить</button>
                </div>
              </div>
            </div>

            <div
              className={
                content2
                  ? "team_page_modal_block team_page_modal_block_visible"
                  : "team_page_modal_block"
              }
            >
              <div
                className="team_page_modal_block_title"
                onClick={() => setContent2(!content2)}
              >
                <h3>Права для панели администратора</h3>
                <ArrowDown />
              </div>

              <div className="team_page_modal_block_content">
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Настройки:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Настройки"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Управление открытием и закрытием форума</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Управление основными настройками</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Управление автоматическим цензором</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Управление регистрацией пользователей</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Управление тегами</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Управление публичной навигацией</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Магазины:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Магазины"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Добавление / Редактирование магазинов</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Удаление магазинов</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Префиксы тем:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Префиксы тем"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Добавление префиксов</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Редактирование префиксов</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Удаление префиксов</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Значки и баннеры:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Значки и баннеры"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Добавление значков и баннеров</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Редактирование значков и баннеров</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Удаление значков и баннеров</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Узлы:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Узлы"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Добавление узлов</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Редактирование узлов</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Удаление узлов</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Уровни пользователей:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Уровни пользователей"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Добавление уровней</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Редактирование прав уровней</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Удаление уровней</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Пользователи:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Пользователи"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Добавление пользователей</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Блокировка / Разблокировка пользователей</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Редактирование прав пользователей</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Удаление пользователей</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Активация / Отклонение пользователей</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Связь:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Связь"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>
                        Управление вкладкой "Рекламный Мини-баннер (Header)"
                      </p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>
                        Управление вкладкой "Рекламный Мини-баннер (Sidebar)"
                      </p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Управление вкладкой "Рассылка через уведомления"</p>
                    </div>
                  </div>
                </div>
                <div class="nodes_page_content_item ais">
                  <div class="nodes_page_content_item_left">
                    <p>Команда сайта:</p>
                  </div>
                  <div class="nodes_page_content_item_right">
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Просмотр страницы "Команда сайта"</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Добавление модераторов</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Редактирование прав модераторов по форуму</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Редактирование прав модераторов по админ-панели</p>
                    </div>
                    <div class="pref_checks">
                      <input type="checkbox" name="" id="" checked="" />
                      <p>Удаление модераторов из команды сайта</p>
                    </div>
                  </div>
                </div>
                <div className="save_btn">
                  <button>Сохранить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="page_wrapper team_page team_page_wrapper">
          <div className="team_page_title">
            <h2>команда сайта</h2>
          </div>
          <div className="add_moder">
            <AddModer />
          </div>
          <div className="team_list">
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
            <div className="team_list_item">
              <div className="team_list_item_left">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Модератор</span>
                </div>
              </div>
              <div className="team_list_item_right">
                <button class="edit_btn" onClick={() => setModal(true)}>
                  Редактировать права
                </button>
                <div class="save_btn">
                  <button>Удалить из команды</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CommandPage;
