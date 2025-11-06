import "./InvitationText.scss";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const InvitationText = () => {
  useScrollReveal();
  return (
    <div className="invitation-text scroll-reveal">
      <div className="invitation-text__block elegant-reveal">
        <h2 className="invitation-text__title shine-text">Құрметті қонақтар!</h2>
        <p className="invitation-text__content romantic-reveal">
          Алла қалауымен біздің бақытты күнімізді бөлісуге шақырамыз!
        </p>
      </div>

      <div className="invitation-text__block stagger-children">
        <div className="invitation-text__family">
          <h3 className="floating">Құда түсетін жақ:</h3>
          <p>Әкесі: Асқар Серікұлы</p>
          <p>Анасы: Әсел Нұрланқызы</p>
          <p>Ұлымыз: Айдос</p>
        </div>

        <div className="invitation-text__family">
          <h3 className="floating">Құдалық қабылдайтын жақ:</h3>
          <p>Әкесі: Мұрат Қайратұлы</p>
          <p>Анасы: Гүлнар Бақытқызы</p>
          <p>Қызымыз: Айгерім</p>
        </div>
      </div>

      <div className="invitation-text__block fade-up">
        <div className="invitation-text__blessing romantic-reveal">
          <p>
            Ақ тілекпен аттанып, ақ босағадан аттағалы отырған жас жұбайларға ақ жол тілеп, құтты
            қонағымыз болыңыздар!
          </p>
        </div>
      </div>

      <div className="invitation-text__block elegant-reveal">
        <div className="invitation-text__details stagger-children">
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
