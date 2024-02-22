import React, { useState } from "react";
import "./shops-page.css";
import { ReactComponent as AddShop } from "../../assets/icons/ad-shop.svg";

function ShopsPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* {modal ? (
        <div className="overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )} */}

      {/* {modal ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Добавление/редактирование магазина </h3>
          </div>
        </div>
      ) : ( */}
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
                <button className="edit_btn">Редактировать</button>
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
                <button className="edit_btn">Редактировать</button>
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
                <button className="edit_btn">Редактировать</button>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
}

export default ShopsPage;
