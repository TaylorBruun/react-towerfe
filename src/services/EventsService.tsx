import axios from "axios";
import { TowerEvent } from "../interfaces/event";

class EventsService {


  async getEvents(): Promise<[TowerEvent]> {
    const res = await axios.get("http://localhost:3000/api/events");
    return res.data;
  }

  getEventById(eventId: string) {
    return console.error("Method not implemented");
  }

  createEvent(eventData: {}) {
    return console.error("Method not implemented");
  }

  getEventsForMyTickets() {
    return console.error("Method not implemented");
  }
}

export const eventsService = new EventsService();
