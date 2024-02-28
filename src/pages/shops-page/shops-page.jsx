import React, { useState } from "react";
import "./shops-page.css";
import { ReactComponent as AddShop } from "../../assets/icons/ad-shop.svg";
import { ReactComponent as UploadBtn } from "../../assets/icons/upload.svg";
import { ReactComponent as Logotype } from "../../assets/icons/logo.svg";

function ShopsPage() {
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
            <h3>Добавление/редактирование магазина </h3>
          </div>
          <div className="shop_modal">
            <div className="shop_modal_inputs">
              <div className="shop_modal_input">
                <p>Название магазина</p>
                <input type="text" />
              </div>
              <div className="shop_modal_input">
                <p> ID магазина</p>
                <input type="text" />
              </div>{" "}
            </div>
            <div className="shop_modal_inputs">
              <div className="shop_modal_input">
                <p>Депозит магазина</p>
                <input type="text" />
              </div>
              <div className="shop_modal_input">
                <p>Максимальное количество создаваемых тем</p>
                <input type="text" />
              </div>{" "}
            </div>
            <div className="shop_modal_inputs">
              <div className="shop_modal_input">
                <p>Количество сделок</p>
                <input type="text" />
              </div>
              <div className="shop_modal_input">
                <p>CSS цвет юзернейма владельца магазина</p>
                <input type="text" />
              </div>{" "}
              <div className="shop_modal_input">
                <p>CSS цвет юзернейма сотрудников магазина</p>
                <input type="text" />
              </div>{" "}
            </div>
            <div className="shop_modal_input">
              <p>Мини-описание магазина:</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="shop_modal_input">
              <p>Общее описание магазина:</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="add_mini_header_item add_del_banner">
              <div className="add_mini_header_item_title">
                <p>Баннер:</p>
              </div>
              <div className="add_mini_header_item_upload">
                <UploadBtn />
              </div>
              <span>JPEG, PNG, GIF</span>
            </div>
            <div className="add_mini_header_item add_del_banner">
              <div className="add_mini_header_item_title">
                <p>Логотип:</p>
              </div>
              <div className="add_mini_header_item_upload">
                <Logotype />
              </div>
            </div>
            <div className="shop_modal_inputs shop_modal_selects">
              <div className="shop_modal_select">
                <p>Отображение значков в магазине:</p>
                <div className="shop_modal_select_wrapper">
                  <p>Название баннера</p>
                  <p>Название баннера</p>
                  <p>Название баннера</p>
                  <p>Название баннера</p>
                </div>
                <h2>
                  Для выбора нескольких <br /> вариантов удерживайте Ctrl
                </h2>
              </div>
              <div className="shop_modal_select">
                <p>
                  Отображение значков на профиле <br /> владельца магазина
                </p>
                <div className="shop_modal_select_wrapper">
                  <p>Значок</p>
                  <p>Значок</p>
                  <p>Значок</p>
                  <p>Значок</p>
                </div>
                <h2>
                  Для выбора нескольких <br /> вариантов удерживайте Ctrl
                </h2>
              </div>
              <div className="shop_modal_select">
                <p>Отображение баннеров в магазине</p>
                <div className="shop_modal_select_wrapper">
                  <p>Значок</p>
                  <p>Значок</p>
                  <p>Значок</p>
                  <p>Значок</p>
                </div>
                <h2>
                  Для выбора нескольких <br /> вариантов удерживайте Ctrl
                </h2>
              </div>
            </div>
            <div className="shop_modal_input">
              <p>Владелец магазина:</p>
              <input type="text" />
            </div>
            <div className="shop_modal_input">
              <p>Срок аренды</p>
              <input type="date" />
            </div>
            <div className="shop_modal_input shop_modal_date">
              <p>Ограничение по количеству сотрудников в магазине</p>
              <input type="text" value='5'/>
              <div className="shop_modal_date_inc shop_modal_date_increm">
                <p>-</p>
              </div>
              <div className="shop_modal_date_inc shop_modal_date_deccrem">
                <p>+</p>
              </div>
            </div>
            <div className="save_btn shop_save_btn">
            <button >Добавить изменения</button>

            </div>
          </div>
        </div>
      ) : (
        <div className="page_wrapper shops_page">
          <div className="add_shop_btn">
            <AddShop onClick={() => setModal(true)} />
          </div>
          <div className="name_shop_input">
            <p>Название магазина</p>
            <input type="text" />
            <div className="save_btn">
              <button>Подтвердить</button>
            </div>
          </div>
          <div className="shops_page_list">
            <div className="shops_page_list_title">
              <h4>Магазины</h4>
            </div>
            <div className="shops_page_list_item">
              <div className="save_btn">
                <button className="shops_page_list_item_name_shop">
                  Название магазина
                </button>
              </div>
              <div className="shops_page_list_item_desc">
                <p>Темы: 120</p>
                <span>Количество ответов: 43</span>
              </div>
              <input
                type="text"
                className="shops_page_list_item_pass"
                placeholder="Пароль"
              />
              <div className="shops_page_list_item_actions">
                <div className="save_btn">
                  <button>Удалить</button>
                </div>
                <button className="edit_btn" onClick={() => setModal(true)}>
                  Редактировать
                </button>
              </div>
            </div>
            <div className="shops_page_list_item">
              <div className="save_btn">
                <button className="shops_page_list_item_name_shop">
                  Название магазина
                </button>
              </div>
              <div className="shops_page_list_item_desc">
                <p>Темы: 120</p>
                <span>Количество ответов: 43</span>
              </div>
              <input
                type="text"
                className="shops_page_list_item_pass"
                placeholder="Пароль"
              />
              <div className="shops_page_list_item_actions">
                <div className="save_btn">
                  <button>Удалить</button>
                </div>
                <button className="edit_btn" onClick={() => setModal(true)}>
                  Редактировать
                </button>
              </div>
            </div>
            <div className="shops_page_list_item">
              <div className="save_btn">
                <button className="shops_page_list_item_name_shop">
                  Название магазина
                </button>
              </div>
              <div className="shops_page_list_item_desc">
                <p>Темы: 120</p>
                <span>Количество ответов: 43</span>
              </div>
              <input
                type="text"
                className="shops_page_list_item_pass"
                placeholder="Пароль"
              />
              <div className="shops_page_list_item_actions">
                <div className="save_btn">
                  <button>Удалить</button>
                </div>
                <button className="edit_btn" onClick={() => setModal(true)}>
                  Редактировать
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShopsPage;
