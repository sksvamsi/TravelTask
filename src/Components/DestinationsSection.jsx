import React from "react";
import "./DestinationsSection.css";
import Charminar from "../assets/Charminar.jpg";
import Tajmahal from "../assets/Tajmahal.jpg";
import Eiffel from "../assets/EiffelTower.jpg"

const DestinationsSection = () => {
  return (
    <section className="destinations-section">
      <h2 className="section-title">Popular Destinations</h2>
      <div className="destination-grid">
        <div className="destination-card">
          <img src={Charminar} alt="Destination 1" />
          <h3 className="destination-name">Charminar</h3>
          <p className="destination-description">
            Charminar was built by Sultan Mohammed Quli Qutb Shah in 1591. It is
            said that this square shaped structure with four pillars and
            intricate carvings was built in honour of his wife, Bhagmati.
            However, the actual reason behind building Charminar is still not
            clear. As per a popular belief, Charminar was built to acknowledge
            the elimination of the plague which had affected the entire city
            immensely during that era. It is believed that the Sultan had prayed
            for the end of this plague with which his people were suffering.
            Hence, as the plague ended, he built the charminar as a tribute to
            Allah. The four pillars are also said to be dedicated to the first
            four caliphs of Islam.
          </p>
        </div>
        <div className="destination-card">
          <img src={Tajmahal} alt="Destination 2" />
          <h3 className="destination-name">TajMahal</h3>
          <p className="destination-description">
            The Taj Mahal is located on the right bank of the Yamuna River in a
            vast Mughal garden that encompasses nearly 17 hectares, in the Agra
            District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan
            in memory of his wife Mumtaz Mahal with construction starting in
            1632 AD and completed in 1648 AD, with the mosque, the guest house
            and the main gateway on the south, the outer courtyard and its
            cloisters were added subsequently and completed in 1653 AD. The
            existence of several historical and Quaranic inscriptions in Arabic
            script have facilitated setting the chronology of Taj Mahal. For its
            construction, masons, stone-cutters, inlayers, carvers, painters,
            etc.
          </p>
        </div>
        <div className="destination-card">
          <img src={Eiffel} alt="Destination 3" />
          <h3 className="destination-name">Eiffel Tower</h3>
          <p className="destination-description">
          The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889. Eiffel Tower, Parisian landmark that is also a technological masterpiece in building-construction history. When the French government was organizing the International Exposition of 1889 to celebrate the centenary of the French Revolution, a competition was held for designs for a suitable monument. More than 100 plans were submitted, and the Centennial Committee accepted that of the noted bridge engineer Gustave Eiffel. Eiffel’s concept of a 300-metre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
