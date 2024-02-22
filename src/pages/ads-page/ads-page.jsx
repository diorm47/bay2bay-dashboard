import React, { useState } from "react";
import "./ads-page.css";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as UploadBtn } from "../../assets/icons/upload.svg";

function AdsPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? (
        <div className="overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}
      {!modal ? (
        <div className="ads_page">
          <div className="page_title">
            <h1>Реклама и связь</h1>
          </div>
          <div className="ads_page_links">
            <div className="ads_page_link" onClick={() => setModal(1)}>
              <h3>Рекламный Мини-баннер (Header)</h3>
              <ArrowRight />
            </div>
            <div className="ads_page_link" onClick={() => setModal(2)}>
              <h3>Рекламный Мини-баннер (Sidebar)</h3>
              <ArrowRight />
            </div>
            <div className="ads_page_link" onClick={() => setModal(3)}>
              <h3>Рассылка через уведомления</h3>
              <ArrowRight />
            </div>
            <div className="ads_page_link" onClick={() => setModal(4)}>
              <h3>Рассылка через ЛС</h3>
              <ArrowRight />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {modal == 1 ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Рекламный Мини-баннер (Header)</h3>
          </div>{" "}
          <div className="add_mini_header">
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Баннер:</p>
                </div>
                <div className="add_mini_header_item_upload">
                  <UploadBtn />
                </div>
                <span>JPEG, PNG, GIF</span>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Баннер:</p>
                </div>
                <div className="add_mini_header_item_upload">
                  <UploadBtn />
                </div>
                <span>JPEG, PNG, GIF</span>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Баннер:</p>
                </div>
                <div className="add_mini_header_item_upload">
                  <UploadBtn />
                </div>
                <span>JPEG, PNG, GIF</span>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>

            <div className="save_btn ads_save_btn">
              <button>Сохранить изменения</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {modal == 2 ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Рекламный Мини-баннер (Sidebar)</h3>
          </div>{" "}
          <div className="add_mini_header">
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Баннер:</p>
                </div>
                <div className="add_mini_header_item_upload">
                  <UploadBtn />
                </div>
                <span>JPEG, PNG, GIF</span>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Баннер:</p>
                </div>
                <div className="add_mini_header_item_upload">
                  <UploadBtn />
                </div>
                <span>JPEG, PNG, GIF</span>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Баннер:</p>
                </div>
                <div className="add_mini_header_item_upload">
                  <UploadBtn />
                </div>
                <span>JPEG, PNG, GIF</span>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Баннер:</p>
                </div>
                <div className="add_mini_header_item_upload">
                  <UploadBtn />
                </div>
                <span>JPEG, PNG, GIF</span>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>

            <div className="save_btn ads_save_btn">
              <button>Сохранить изменения</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {modal == 3 ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Рассылка через уведомления</h3>
          </div>{" "}
          <div className="add_mini_header">
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>От кого:</p>
                </div>
                <div className="add_mini_header_item_select">
                  <select name="" id="">
                    <option value="">Выбор пользователя</option>
                    <option value="">Выбор пользователя</option>
                    <option value="">Выбор пользователя</option>
                  </select>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Название темы сообщения:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Описание сообщения:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Часть URL-адреса:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>URL адрес:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
                <div className="add_mini_header_item_radio">
                  <input type="radio" checked />
                  <p>Кнопка</p>
                </div>
              </div>
            </div>
            <div className="sdfbg">
              <input type="checkbox" name="" id="" checked />
              <p>Рассылка только владельцам магазинов</p>
              <p></p>
            </div>

            <div className="save_btn ads_save_btn">
              <button>Отправить</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
          {modal == 4 ? (
        <div className="modal_wrapper">
          <div className="modal_wrapper_title">
            <h3>Рассылка через ЛС</h3>
          </div>{" "}
          <div className="add_mini_header">
            <div className="add_mini_header_item_wrapper">
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>От кого:</p>
                </div>
                <div className="add_mini_header_item_select">
                  <select name="" id="">
                    <option value="">Выбор пользователя</option>
                    <option value="">Выбор пользователя</option>
                    <option value="">Выбор пользователя</option>
                  </select>
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Название темы сообщения:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
              </div>
              <div className="add_mini_header_item">
                <div className="add_mini_header_item_title">
                  <p>Описание сообщения:</p>
                </div>
                <div className="add_mini_header_item_input">
                  <input type="text" />
                </div>
              </div>
             
            </div>
            <div className="sdfbg">
              <input type="checkbox" name="" id="" checked />
              <p>Рассылка только владельцам магазинов</p>
              <p></p>
            </div>

            <div className="save_btn ads_save_btn">
              <button>Отправить</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdsPage;
