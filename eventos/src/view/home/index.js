import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import EventCard from "../components/eventCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./home.css";
import { useSelector } from "react-redux";

function Home({ match }) {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const userEmail = useSelector(state => state.userEmail)

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsList = [];
      let eventsRef = collection(db, "eventos");
      if (match.params.route === "my-events") {
        eventsRef = query(eventsRef, where("user", "==", userEmail));
      }
      const querySnapshot = await getDocs(eventsRef);
      querySnapshot.forEach((doc) => {
        if (doc.data().title.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
          eventsList.push({
            id: doc.id,
            ...doc.data(),
          });
        }
      });
      setEvents(eventsList);
    };
    fetchEvents();
  }, [match.params.route, search, userEmail]);


  return (
    <>
      <Navbar />
      <div className="row p-5">
        <h3 className="text-center pb-4">Eventos publicados</h3>
        <input
          type="text"
          className="form-control text-center"
          placeholder="Pesquisar evento pelo título..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row p-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            img={event.image}
            title={event.title}
            description={event.description}
            views={event.views}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
