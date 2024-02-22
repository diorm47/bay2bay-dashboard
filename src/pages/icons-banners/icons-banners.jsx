import React, { useState } from "react";
import "../prefix-themes/prefix-page.css";
import "./icons-banners.css";
import { ReactComponent as UploadBtn } from "../../assets/icons/upload.svg";

import { ReactComponent as Icon } from "../../assets/icons/icon.svg";

function IconsBanners() {
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
            <h3>Добавление/редактирование баннера</h3>
          </div>
          <div className="prefix_modal">
            <div className="add_mini_header_item add_del_banner">
              <div className="add_mini_header_item_title">
                <p>Значок:</p>
              </div>
              <div className="add_mini_header_item_upload">
                <UploadBtn />
              </div>
              <span>JPEG, PNG, GIF</span>
            </div>
            <div className="prefix_modal_input">
              <p>Название баннера</p>
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
            <h1>Значки и баннеры</h1>
          </div>

          <div className="icons_banners">
            <div className="icons_banners_items">
              <div className="icons_banners_item">
                <div className="save_btn add_icons">
                  <button onClick={() => setModal(true)}>
                    Добавить значок
                  </button>
                </div>
                <div className="icons_banners_it">
                  <p>Значок:</p>
                  <Icon />
                </div>
                <div className="icons_banners_it">
                  <p>Название:</p>
                  <input type="text" value="Название значка" />
                </div>
                <div class="shops_page_list_item_actions">
                  <button class="edit_btn" onClick={() => setModal(true)}>
                    Редактировать
                  </button>
                  <div class="save_btn">
                    <button>Удалить</button>
                  </div>
                </div>
              </div>
              <div className="icons_banners_item">
                <div className="save_btn add_icons">
                  <button onClick={() => setModal(true)}>
                    Добавить значок
                  </button>
                </div>
                <div className="icons_banners_it">
                  <p>Значок:</p>
                  <div class="save_btn">
                    <button>Отображение баннера</button>
                  </div>
                </div>
                <div className="icons_banners_it">
                  <p>Название:</p>
                  <input type="text" value="Название значка" />
                </div>
                <div class="shops_page_list_item_actions">
                  <button class="edit_btn" onClick={() => setModal(true)}>
                    Редактировать
                  </button>
                  <div class="save_btn">
                    <button>Удалить</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="save_btn">
              <button>Сохранить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IconsBanners;
