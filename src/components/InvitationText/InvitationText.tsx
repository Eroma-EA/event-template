import './InvitationText.scss';

const InvitationText = () => {
  return (
    <div className="invitation-text">
      <div className="invitation-text__block">
        <h2 className="invitation-text__title">Құрметті қонақтар!</h2>
        <p className="invitation-text__content">
          Алла қалауымен біздің бақытты күнімізді бөлісуге шақырамыз!
        </p>
      </div>

      <div className="invitation-text__block">
        <div className="invitation-text__family">
          <h3>Құда түсетін жақ:</h3>
          <p>Әкесі: Асқар Серікұлы</p>
          <p>Анасы: Әсел Нұрланқызы</p>
          <p>Ұлымыз: Айдос</p>
        </div>
        
        <div className="invitation-text__family">
          <h3>Құдалық қабылдайтын жақ:</h3>
          <p>Әкесі: Мұрат Қайратұлы</p>
          <p>Анасы: Гүлнар Бақытқызы</p>
          <p>Қызымыз: Айгерім</p>
        </div>
      </div>

      <div className="invitation-text__block">
        <div className="invitation-text__blessing">
          <p>
            Ақ тілекпен аттанып, ақ босағадан аттағалы отырған жас жұбайларға
            ақ жол тілеп, құтты қонағымыз болыңыздар!
          </p>
        </div>
      </div>

      <div className="invitation-text__block">
        <div className="invitation-text__details">
          <p className="invitation-text__date">Күні: 6 қараша, 2025 жыл</p>
          <p className="invitation-text__time">Уақыты: 17:00</p>
          <p className="invitation-text__location">Мекен-жайы: "Ақ Сарай" мейрамханасы</p>
          <p className="invitation-text__address">Абай даңғылы, 150</p>
        </div>
      </div>
    </div>
  );
};

export default InvitationText;