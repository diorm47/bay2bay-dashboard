import React, { useState } from "react";
import "./nodes-page.css";
import { ReactComponent as AddLogo } from "../../assets/icons/add-logo.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as AddNode } from "../../assets/icons/add-node.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

function NodePage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? (
        <div className="overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}

      {!modal ? (
        <div className="nodes_page">
          <div className="page_title">
            <div className="add_node_btn">
              <AddNode onClick={() => setModal(1)} />
            </div>
          </div>
          <div className="nodes_page_content">
            <div className="nodes_page_content_list_item">
              <div className="nodes_page_content_list_item_left">
                <Menu />
                <p>Основная категория</p>
              </div>
              <div className="nodes_page_content_list_item_right">
                <Edit />
                <Delete />
              </div>
            </div>
            <div className="nodes_page_content_list_item">
              <div className="nodes_page_content_list_item_left">
                <Chat />
                <p>Главный форум</p>
              </div>
              <div className="nodes_page_content_list_item_right">
                <Edit onClick={() => setModal(2)} />
                <Delete />
              </div>
            </div>
            <div className="nodes_page_content_list_item">
              <div className="nodes_page_content_list_item_left">
                <Chat />
                <p>Главный форум</p>
              </div>
              <div className="nodes_page_content_list_item_right">
                <Edit onClick={() => setModal(3)} />
                <Delete />
              </div>
            </div>
            <div className="nodes_page_content_list_item">
              <div className="nodes_page_content_list_item_left">
                <Chat />
                <p>Главный форум</p>
              </div>
              <div className="nodes_page_content_list_item_right">
                <Edit onClick={() => setModal(4)} />
                <Delete />
              </div>
            </div>
            <div className="all_el_node">
              <p>Показаны все элементы</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 1 ? (
        <div className="modal_wrapper node_modal">
          <div className="modal_wrapper_title">
            <h3>Добавить узел</h3>
          </div>{" "}
          <div class="pref_checks">
            <input type="checkbox" name="" id="" />
            <p>Раздел-категория</p>
          </div>
          <div class="pref_checks">
            <input type="checkbox" name="" id="" />
            <p>Раздел-обсуждение</p>
          </div>
          <div class="pref_checks">
            <input type="checkbox" name="" id="" />
            <p>Раздел-ссылка</p>
          </div>
          <div className="save_btn">
            <button>Создать</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 2 ? (
        <div className="modal_wrapper node_modal_block">
          <div className="page_title">
            <h1>Создание / редактирование страницы «Раздел-категория»</h1>
          </div>
          <div className="nodes_page_content">
            <div className="nodes_page_content_item">
              <div className="nodes_page_content_item_left">
                <p>Название:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>

            <div className="nodes_page_content_item ais">
              <div className="nodes_page_content_item_left">
                <p>Описание:</p>
                <span>
                  Вы можете <br /> использовать HTML
                </span>
              </div>
              <div className="nodes_page_content_item_right">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />{" "}
                <span>
                  Текст (или HTML), который вы вставляете здесь, должен быть
                  допустимым в теге <code>p</code>.
                </span>
              </div>
            </div>

            <div className="nodes_page_content_item ais">
              <div className="nodes_page_content_item_left"></div>
              <div className="nodes_page_content_item_right">
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>Отображать в списке узлов</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Видимость раздела только пользователям с повышенным <br />{" "}
                    статусом и команде форума
                  </p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Видимость раздела только команде форума и некоторым <br />{" "}
                    пользователям»
                  </p>
                </div>

                <div className="node_user">
                  <input type="text" placeholder="Имя пользователя" />
                  <Add />
                </div>
              </div>
            </div>
            <div className="node_actions">
              <div class="shops_page_list_item_actions">
                <div class="save_btn">
                  <button>Сохранить</button>
                </div>
                <button class="edit_btn">Удалить</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 3 ? (
        <div className="modal_wrapper node_modal_block">
          <div className="page_title">
            <h1>Создание / редактирование страницы «Раздел-обсуждение</h1>
          </div>
          <div className="nodes_page_content">
            <div className="nodes_page_content_item">
              <div className="nodes_page_content_item_left">
                <p>Логотип:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <AddLogo />
              </div>
            </div>
            <div className="nodes_page_content_item">
              <div className="nodes_page_content_item_left">
                <p>Название:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>

            <div className="nodes_page_content_item ais">
              <div className="nodes_page_content_item_left">
                <p>Описание:</p>
                <span>
                  Вы можете <br /> использовать HTML
                </span>
              </div>
              <div className="nodes_page_content_item_right">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />{" "}
                <span>
                  Текст (или HTML), который вы вставляете здесь, должен быть
                  допустимым в теге <code>p</code>.
                </span>
              </div>
            </div>

            <div className="nodes_page_content_item ais">
              <div className="nodes_page_content_item_left">
                <p>Родительский узел:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <input type="text" value="Главная категория" />
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>Отображать в списке узлов</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Видимость раздела только пользователям с повышенным <br />{" "}
                    статусом и команде форума
                  </p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Видимость раздела только команде форума и некоторым <br />{" "}
                    пользователям»
                  </p>
                </div>

                <div className="node_user">
                  <input type="text" placeholder="Имя пользователя" />
                  <Add />
                </div>

                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>Запрещено создавать новые темы</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Создавать темы могут только пользователи с повышенным
                    статусом и команда форума
                  </p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>Создавать темы могут только некоторые пользователи</p>
                </div>

                <div className="node_user">
                  <input type="text" placeholder="Имя пользователя" />
                  <Add />
                </div>
              </div>
            </div>
            <div className="node_actions">
              <div class="shops_page_list_item_actions">
                <div class="save_btn">
                  <button>Сохранить</button>
                </div>
                <button class="edit_btn">Удалить</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 4 ? (
        <div className="modal_wrapper node_modal_block">
          <div className="page_title">
            <h1>Создание / редактирование страницы «Раздел-ссылка»</h1>
          </div>
          <div className="nodes_page_content">
            <div className="nodes_page_content_item">
              <div className="nodes_page_content_item_left">
                <p>Логотип:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <AddLogo />
              </div>
            </div>
            <div className="nodes_page_content_item">
              <div className="nodes_page_content_item_left">
                <p>Название:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>

            <div className="nodes_page_content_item ais">
              <div className="nodes_page_content_item_left">
                <p>Описание:</p>
                <span>
                  Вы можете <br /> использовать HTML
                </span>
              </div>
              <div className="nodes_page_content_item_right">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />{" "}
                <span>
                  Текст (или HTML), который вы вставляете здесь, должен быть
                  допустимым в теге <code>p</code>.
                </span>
              </div>
            </div>

            <div className="nodes_page_content_item">
              <div className="nodes_page_content_item_left">
                <p>Часть URL-адреса:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>

            <div className="nodes_page_content_item ais">
              <div className="nodes_page_content_item_left">
                <p>Родительский узел:</p>
              </div>
              <div className="nodes_page_content_item_right">
                <input type="text" value="Главная категория" />
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>Отображать в списке узлов</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Видимость раздела только пользователям с повышенным <br />{" "}
                    статусом и команде форума
                  </p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Видимость раздела только команде форума и некоторым <br />{" "}
                    пользователям»
                  </p>
                </div>

                <div className="node_user">
                  <input type="text" placeholder="Имя пользователя" />
                  <Add />
                </div>
              </div>
            </div>
            <div className="node_actions">
              <div class="shops_page_list_item_actions">
                <div class="save_btn">
                  <button>Сохранить</button>
                </div>
                <button class="edit_btn">Удалить</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NodePage;
