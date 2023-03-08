import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import EventCard from "../components/eventCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./home.css";

function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const eventsList = [];
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "eventos"));
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
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="row p-5">
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
