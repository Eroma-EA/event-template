import "./Header.scss";

const Header = () => {
  return (
    <header className="header" aria-label="Сайт тақырыбы">
      <div className="header__inner">
        <h1 className="header__title">ТОЙ КҮНІ</h1>
        <h2 className="header__names">Айдос & Айгерім</h2>
      </div>
    </header>
  );
};

export default Header;
