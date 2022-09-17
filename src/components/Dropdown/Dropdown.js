import React from 'react';
import './Dropdown.scss'

const Dropdown = () => {
    return (
            <div className="btn-group dropstart shadow-lg">
                <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Виберіть жанр
                </button>
                <ul className="dropdown-menu ">
                    <li className='pointer dropdown-item'>РПГ</li>
                    <li className='pointer dropdown-item'>Шутер</li>
                    <li className='pointer dropdown-item'>Екшен</li>
                    <li className='pointer dropdown-item'>Гонки</li>
                    <li className='pointer dropdown-item'>Глибокий сюжет</li>
                    <li className='pointer dropdown-item'>Відкритий всіт</li>
                </ul>
            </div>
    );
};

export default Dropdown;