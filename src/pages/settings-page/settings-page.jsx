import React, { useState } from "react";
import "./settings-page.css";
import { ReactComponent as Next } from "../../assets/icons/settings-next.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as AddNavEl } from "../../assets/icons/add-nav-el.svg";
import Switch from "../../components/switch/switch";

function SettingsPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? (
        <div className="overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}
      {!modal ? (
        <div className="settings_page">
          <div className="settings_page_link" onClick={() => setModal(1)}>
            <p>Открытие и закрытие форума</p>
            <Next />
          </div>
          <div className="settings_page_link_line"></div>
          <div className="settings_page_link" onClick={() => setModal(2)}>
            <p>Основные настройки</p>
            <Next />
          </div>
          <div className="settings_page_link_line"></div>
          <div className="settings_page_link" onClick={() => setModal(3)}>
            <p>Автоматический цензор</p>
            <Next />
          </div>
          <div className="settings_page_link_line"></div>
          <div className="settings_page_link" onClick={() => setModal(4)}>
            <p>Регистрация пользователей</p>
            <Next />
          </div>
          <div className="settings_page_link_line"></div>
          <div className="settings_page_link" onClick={() => setModal(5)}>
            <p>Теги</p>
            <Next />
          </div>
          <div className="settings_page_link_line"></div>
          <div className="settings_page_link" onClick={() => setModal(6)}>
            <p>Публичная навигация</p>
            <Next />
          </div>
          <div className="settings_page_link_line"></div>
          <div className="settings_page_link" onClick={() => setModal(7)}>
            <p>Виджеты</p>
            <Next />
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 1 ? (
        <div className="modal_wrapper settings_page_modal">
          <div className="modal_wrapper_title">
            <h3>Открытие и закрытие форума</h3>
            <p>Здесь можно открывать и закрывать форум</p>
          </div>
          <div className="open_close_forum">
            <div className="open_close_forum_left">
              <p>
                Сообщение, отображаемое <br /> при закрытом форуме:
              </p>
            </div>
            <div className="open_close_forum_right">
              <div class="pref_checks">
                <input type="checkbox" name="" id="" checked />
                <p>Форум открыт</p>
              </div>
              <div className="open_close_forum_right_box">
                <p>
                  Sorry, we're currently unavailable. Please check back later.
                </p>
              </div>
              <span>
                Когда форум закрыт, это сообщение будет отображаться посетителям
                сайта.
              </span>
              <div className="save_btn">
                <button>Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 2 ? (
        <div className="modal_wrapper settings_page_modal">
          <div className="modal_wrapper_title">
            <h3>Основные настройки</h3>
          </div>
          <div className="main_settings">
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>Название форума:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <input type="text" value="XenForo" />
                <br />
                <span>
                  Название вашего форума. Оно будет отображаться в верхней части
                  страниц <br /> и использоваться в электронных письмах.
                </span>
              </div>
            </div>
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>Краткое название:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <input type="text" />
                <br />
                <span>
                  В идеале оно должно содержать не более 12 символов. Это может
                  отображаться, <br /> когда полное название слишком длинное,
                  например, когда пользователь <br /> добавляет ваше приложение
                  на домашний экран своего мобильного устройства.
                </span>
              </div>
            </div>
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>
                  Страница форумов <br /> по умолчанию:
                </p>
              </div>
              <div class="nodes_page_content_item_right">
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked />
                  <p>Форумы</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked />
                  <p>Новые сообщения</p>
                </div>

                <span>
                  При входе в раздел форумов пользователи будут попадать на эту
                  страницу <br /> по умолчанию. Они смогут получить доступ к
                  альтернативной странице <br /> с помощью параметров
                  вспомогательной навигации.
                </span>
              </div>
            </div>
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left"></div>
              <div class="nodes_page_content_item_right">
                <div className="save_btn">
                  <button>Сохранить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {modal == 3 ? (
        <div className="modal_wrapper settings_page_modal">
          <div className="modal_wrapper_title">
            <h3>Автоматический цензор</h3>
            <p>
              На текст, созданный пользователем, будут распространяться правила
              цензуры, которые вы определяете здесь.
            </p>
          </div>
          <div className="main_settings">
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>Символ цензуры:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <input type="text" value="*" />
              </div>
            </div>
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>Слова для цензуры:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <div className="censorship_inputs">
                  <div className="censorship_inputs_left">
                    <input type="text" placeholder="Слово или фраза" />
                    <input type="text" placeholder="Замена (необязательно)" />
                  </div>
                  <div className="censorship_inputs_right">
                    <input type="button" value="-" />
                    <input type="button" value="+" />
                  </div>
                </div>
              </div>
            </div>

            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left"></div>
              <div class="nodes_page_content_item_right">
                <div className="save_btn">
                  <button>Сохранить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 4 ? (
        <div className="modal_wrapper settings_page_modal">
          <div className="modal_wrapper_title">
            <h3>Регистрация пользователей</h3>
          </div>
          <div className="main_settings">
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>
                  Настройка <br /> регистрации:
                </p>
              </div>
              <div class="nodes_page_content_item_right">
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked />
                  <p>Включить регистрацию</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked />
                  <p>Включить ручное утверждение</p>
                </div>

                <span>
                  Если этот параметр выбран, администратору необходимо будет
                  вручную <br /> утверждать пользователей до завершения их
                  регистрации.
                </span>
              </div>
            </div>
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>Приветствие нового пользователя:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked />
                  <p>Начните приветственную беседу по регистрации</p>
                </div>
                <br />
                <input type="text" placeholder="Текст" />
                <br /> <br />
                <select name="" id="">
                  <option value="">От кого</option>
                  <option value="">От кого</option>
                </select>
              </div>
            </div>
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>
                  Присваивать <br /> пользователю при <br /> регистрации
                  уровень:
                </p>
              </div>
              <div class="nodes_page_content_item_right">
                <select name="" id="">
                  <option value="">Уровень</option>
                  <option value="">Уровень</option>
                </select>
              </div>
            </div>
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left">
                <p>
                  Ограничение длины <br /> имени пользователя:
                </p>
              </div>
              <div class="nodes_page_content_item_right">
                <div className="user_name_count">
                  <div className="user_name_count_box">
                    <div className="user_name_count_box_item">
                      <span>13</span>
                      <p className="brr">+</p>
                      <p>-</p>
                    </div>
                    -
                    <div className="user_name_count_box_item">
                      <span>13</span>
                      <p className="brr">+</p>
                      <p>-</p>
                    </div>
                  </div>
                  <p>Персонажи</p>
                </div>
                <span>
                  Здесь определяется минимальная и максимальная длина имен
                  пользователей. Используйте 0, <br /> чтобы отключить
                  ограничение. Длина имен пользователей не должна превышать 50
                  символов.
                </span>
              </div>
            </div>
            <div class="nodes_page_content_item ais">
              <div class="nodes_page_content_item_left"></div>
              <div class="nodes_page_content_item_right">
                <div className="save_btn">
                  <button>Сохранить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 6 ? (
        <div className="modal_wrapper settings_page_modal public_navigation_modal">
          <div className="modal_wrapper_title">
            <h3>публичная навигация</h3>
            <div className="add_nav_elements" onClick={() => setModal(8)}>
              <AddNavEl />
            </div>
          </div>
          <div className="public_navigation">
            <h2>Header</h2>
          </div>
          <div className="public_navigation_title">
            <p onClick={() => setModal(9)}>Главная</p>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Новые сообщения</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Новые сообщения профилей</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Мои темы</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Темы с моими сообщениями</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Темы без ответов</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Отслеживаемые темы</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_title">
            <p onClick={() => setModal(9)}>Магазины</p>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_title">
            <p onClick={() => setModal(9)}>Записки</p>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation">
            <h2>Footer</h2>
          </div>
          <div className="public_navigation_title">
            <p onClick={() => setModal(9)}>Покупателям</p>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_title">
            <p onClick={() => setModal(9)}>Магазинам</p>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>

          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>

          <div className="public_navigation_title">
            <p onClick={() => setModal(9)}>Информация</p>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <div className="public_navigation_item">
            <div className="public_navigation_item_link">
              <p onClick={() => setModal(9)}>Название</p>
            </div>
            <div className="public_navigation_item_actions">
              <p>10</p>
              <Switch />
              <Delete />
            </div>
          </div>
          <span>Отображение всех элементов</span>
          <div className="save_btn public_nav_btn">
            <button>Сохранить</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 8 ? (
        <div className="modal_wrapper settings_page_modal">
          <div className="modal_wrapper_title">
            <h3>публичная навигация / добавление</h3>
          </div>
          <div className="public_nav_add">
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Название:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Порядок отображения:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <div class="user_name_count_box_item user_name_count_box_item_add_pub">
                  <span>13</span>
                  <p class="brr">+</p>
                  <p>-</p>
                </div>
              </div>
            </div>
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Тип:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked="" />
                  <p>Родительский узел</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked="" />
                  <p>Дочерний узел</p>
                </div>
                <div className="add_pub_nav_radios">
                  <div>
                    <input type="radio" name="" id="" />
                    <p>Header</p>
                  </div>
                  <div>
                    <input type="radio" name="" id="" />
                    <p>Footer</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Ссылка:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>
            <div className="save_btn">
              <button>Сохранить</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {modal == 9 ? (
        <div className="modal_wrapper settings_page_modal">
          <div className="modal_wrapper_title">
            <h3>публичная навигация / редактирование</h3>
          </div>
          <div className="public_nav_add">
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Название:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Порядок отображения:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <div class="user_name_count_box_item user_name_count_box_item_add_pub">
                  <span>13</span>
                  <p class="brr">+</p>
                  <p>-</p>
                </div>
              </div>
            </div>
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Тип:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked="" />
                  <p>Родительский узел</p>
                </div>
                <div class="pref_checks">
                  <input type="checkbox" name="" id="" checked="" />
                  <p>Дочерний узел</p>
                </div>
                <div className="add_pub_nav_radios">
                  <div>
                    <input type="radio" name="" id="" />
                    <p>Header</p>
                  </div>
                  <div>
                    <input type="radio" name="" id="" />
                    <p>Footer</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nodes_page_content_item ">
              <div class="nodes_page_content_item_left">
                <p>Ссылка:</p>
              </div>
              <div class="nodes_page_content_item_right">
                <input type="text" />
              </div>
            </div>
            <div className="save_btn">
              <button>Сохранить</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SettingsPage;
