import React, { useState } from "react";
import "./comand-page.css";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";

function CommandPage() {
  const [modal, setModal] = useState(false);
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
            <h3>Редактирование прав уровня</h3>
          </div>
          <div className="team_page_modal">
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
      ) : (
        <div className="page_wrapper team_page">
          <div className="page_title">
            <h1>Уровни пользователей</h1>
          </div>
          <div className="team_page_iputs">
            <div className="team_page_input">
              <p>Уровень пользователя</p>
              <input type="text" />
            </div>
            <div className="team_page_input">
              <p>Количество реакций</p>
              <input type="text" />
            </div>
            <div className="team_page_input">
              <p>Количество сообщений</p>
              <input type="text" />
            </div>
            <div className="team_page_actions">
              <Edit onClick={() => setModal(true)} />
              <Delete />
              <Add />
            </div>
          </div>
          <div className="save_btn">
            <button>Сохранить</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CommandPage;
