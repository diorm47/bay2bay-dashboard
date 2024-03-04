import React, { useState } from "react";
import "./users-page.css";
import { ReactComponent as AddBtn } from "../../assets/icons/add-btn.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import Switch from "../../components/switch/switch";

function UsersPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? (
        <div className="overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}
      {!modal ? (
        <div className="users_page">
          <div className="page_title">
            <h1>Пользователи</h1>
          </div>
          <div className="users_page_top">
            <p>Всего пользователей: 0</p>
            <p>Пользователей онлайн: 0</p>
            <p>Пользователи ожидающие активации: 0</p>
          </div>
          <div className="user_search">
            <p>Поиск пользователей</p>
            <input type="text" />
            <div className="save_btn">
              <button>Подтвердить</button>
            </div>
            <AddBtn onClick={() => setModal(2)} />
          </div>
          <div className="users_list">
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn" onClick={() => setModal(1)}>
                Редактировать
              </button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn" onClick={() => setModal(1)}>
                Редактировать
              </button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn" onClick={() => setModal(1)}>
                Редактировать
              </button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
          </div>
          <div className="page_title mb_34px">
            <h1>Заблокированные</h1>
          </div>
          <div className="user_search">
            <p>Поиск пользователей</p>
            <input type="text" />
            <div className="save_btn">
              <button>Подтвердить</button>
            </div>
            <AddBtn />
          </div>
          <div className="users_list">
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
          </div>
          <div className="page_title mb_34px">
            <h1>Ожидающие активации</h1>
          </div>
          <div className="user_search">
            <p>Поиск пользователей</p>
            <input type="text" />
            <div className="save_btn">
              <button>Подтвердить</button>
            </div>
            <AddBtn />
          </div>
          <div className="users_list">
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
            <div className="users_list_item">
              <div className="users_list_name">
                <p>Имя пользователя</p>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </div>
              <button class="edit_btn">Редактировать</button>
              <div className="switch">
                <Switch />
                <p>Заблокировать</p>
              </div>
            </div>
          </div>
          <div className="save_btn">
            <button>Сохранить</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 1 ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Редактирование пользователя</h3>
          </div>{" "}
          <div className="user_edi_modal">
            <div className="user_edit_item">
              <p>Имя пользователя:</p>
              <input type="text" value='Имя пользователя' />
            </div>
            <div className="user_edit_item">
              <p>ID пользователя:</p>
              <input type="text" value='ID пользователя' />
            </div>
            <div className="user_edit_item">
              <p>Пароль пользователя:</p>
              <input type="text" value='Пароль пользователя' />
            </div>
            <div className="user_edit_item">
              <p>Депозит пользователя:</p>
              <input type="text" value='Депозит пользователя' />
            </div>
            <div className="user_edit_item">
              <p>Кол-во заказов:</p>
              <input type="text" value='Кол-во заказов' />
            </div>
            <div className="user_edit_item">
              <p>Нестандартное звание пользователя:</p>
              <input type="text" value='Нестандартное звание пользователя'/>
            </div>
            <div className="user_edit_item">
              <p>CSS цвет юзернейма:</p>
              <input type="text" value='CSS цвет юзернейма' />
            </div>
            <div className="user_edit_item">
              <p>Выбор значка:</p>
              <div class="shop_modal_select user_modal_select">
                <div class="shop_modal_select_wrapper">
                  <p>Название значка</p>
                  <p>Название значка</p>
                  <p className="active_select">Название значка</p>
                  <p>Название значка</p>
                </div>
                <h2>
                  Для выбора нескольких <br /> вариантов удерживайте Ctrl
                </h2>
              </div>
            </div>
            <div className="user_edit_item">
              <p>Выбор баннера:</p>
              <div class="shop_modal_select user_modal_select">
                <div class="shop_modal_select_wrapper">
                  <p>Название баннера</p>
                  <p>Название баннера</p>
                  <p className="active_select">Название баннера</p>
                  <p>Название баннера</p>
                </div>
                <h2>
                  Для выбора нескольких <br /> вариантов удерживайте Ctrl
                </h2>
              </div>
            </div>
            <div className="user_edit_item">
              <p>Уровень пользователя:</p>
              <select name="" id="">
                <option value="">Уровень</option>
                <option value="">Уровень</option>
                <option value="">Уровень</option>
              </select>
            </div>
            <div className="user_edit_item ais">
              <p>Заметка:</p>
              <textarea value="Заметка"></textarea>
            </div>
          </div>
          <div className="save_btn">
            <button>Сохранить</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {modal == 2 ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Добавление пользователя</h3>
          </div>{" "}
          <div className="user_edi_modal">
            <div className="user_edit_item">
              <p>Логин пользователя:</p>
              <input type="text" />
            </div>
            <div className="user_edit_item">
              <p>Имя пользователя:</p>
              <input type="text" />
            </div>
            <div className="user_edit_item">
              <p>ID пользователя:</p>
              <input type="text" />
            </div>
            <div className="user_edit_item">
              <p>Пароль пользователя:</p>
              <input type="text" />
            </div>
            <div className="user_edit_item">
              <p>Секретный код пользователя:</p>
              <input type="text" />
            </div>
            <div className="user_edit_item">
              <p>CSS цвет юзернейма:</p>
              <input type="text" />
            </div>
            <div className="user_edit_item">
              <p>Уровень пользователя:</p>
              <input type="text" />
            </div>
          </div>
          <div className="save_btn">
            <button>Сохранить</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default UsersPage;
