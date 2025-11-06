import "./Header.scss";

const Header = () => {
  return (
    <header className="header" aria-label="Сайт тақырыбы">
      <div className="header__inner stagger-children">
        <h1 className="header__title shine-text">ТОЙ КҮНІ</h1>
        <h2 className="header__names romantic-reveal">Айдос & Айгерім</h2>
      </div>
    </header>
  );
};

export default Header;
