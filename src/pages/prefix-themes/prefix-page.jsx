import React, { useState } from "react";
import "./prefix-page.css";
import { ReactComponent as AddNew } from "../../assets/icons/add-new.svg";

function PrefixPage() {
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
            <h3>Создание/редактирование префикса</h3>
          </div>
          <div className="prefix_modal">
            <div className="prefix_modal_input">
              <p>Название префикса</p>
              <input type="text" name="" id="" />
            </div>
            <div className="prefix_modal_input">
              <p>Выберете баннер:</p>
              <div className="pref_checks">
                <input type="checkbox" name="" id="" />
                <p>Заполненный</p>
              </div>
              <div className="pref_checks">
                <input type="checkbox" name="" id="" />
                <p>Незаполненный</p>
              </div>
            </div>

            <div className="prefix_modal_inputs">
              <div className="prefix_modal_input">
                <p>CSS цвета текста префикса</p>
                <input value="#2F74FA" type="text" name="" id="" />
              </div>
              <div className="prefix_modal_input">
                <p>CSS цвета префикса</p>
                <input value="#2F74FA" type="text" name="" id="" />
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
            <h1>префиксы тем</h1>
          </div>

          <div className="add_new_btn" onClick={() => setModal(true)}>
            <AddNew />
          </div>

          <div className="save_btn prefix_btn">
            <button>Префикс</button>
          </div>
          <div className="name_shop_input">
            <p>Название:</p>
            <input type="text" />
            <div className="shops_page_list_item_actions">
              <div className="save_btn" onClick={() => setModal(true)}>
                <button> Редактировать</button>
              </div>
              <button className="edit_btn">Удалить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PrefixPage;
