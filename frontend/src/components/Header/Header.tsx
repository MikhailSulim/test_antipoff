import './Header.scss';
import { MOBILE_SCREEN_WIDTH } from '../../utils/constants';
import { useWindowWidth } from '../../hooks/useWindowWidth';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { persistor } from '../../redux/store';

interface HeaderProps {
  main: boolean;
  data?: {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}

const Header: React.FC<HeaderProps> = ({ main, data }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBack = () => {
    navigate(-1);
  };

  const handleExit = () => {
    dispatch(logoutUser());
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge();
    });
    // alert("До свидания")
  };

  const windowWidth = useWindowWidth();
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    windowWidth > MOBILE_SCREEN_WIDTH ? setMobile(false) : setMobile(true);
  }, [windowWidth]);

  return (
    <header className="header">
      {main ? (
        <div className="header__container">
          <h1 className="header__title">Наша команда</h1>
          <p className="header__description">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      ) : (
        <>
          <div className="header__container">
            <div className="header__partner">
              <img
                className="header__image"
                src={data?.avatar}
                alt="фото специалиста"
              />
              <div className="header__partner-info">
                <h1 className="header__title">{`${data?.first_name} ${data?.last_name}`}</h1>
                <p className="header__role">Партнёр</p>
              </div>
            </div>
          </div>

          {mobile ? (
            <button
              type="button"
              className="header__btn-mob header__btn-mob_back"
              onClick={goBack}
            >
              <svg>
                <use xlinkHref="images/sprite.svg#back" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="header__btn header__btn_back"
              onClick={goBack}
            >
              Назад
            </button>
          )}
        </>
      )}
      {mobile ? (
        <button
          type="button"
          className="header__btn-mob header__btn-mob_exit"
          onClick={handleExit}
        >
          <svg>
            <use xlinkHref="images/sprite.svg#exit" />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="header__btn header__btn_exit"
          onClick={handleExit}
        >
          Выход
        </button>
      )}
    </header>
  );
};

export default Header;
