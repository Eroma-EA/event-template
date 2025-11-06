import type { FC } from "react";
import "./Venue.scss";

const VENUE_ADDRESS = "Central Park, New York, NY"; // replace with actual address

const Venue: FC = () => {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(VENUE_ADDRESS)}`;
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(VENUE_ADDRESS)}&output=embed`;

  return (
    <section className="venue">
      <div className="venue__inner container">
        <h3 className="venue__title">Место проведения</h3>
        <p className="venue__address">{VENUE_ADDRESS}</p>

        <div className="venue__map">
          <iframe title="map" src={embed} loading="lazy" />
        </div>

        <p className="venue__actions">
          <a className="venue__link" href={mapsUrl} target="_blank" rel="noreferrer">
            Открыть в Google Maps
          </a>
        </p>
      </div>
    </section>
  );
};

export default Venue;
