import { getEventListeners } from "events"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { RootState } from "../app/store"
import { eventsService } from "../services/EventsService"
import { addEvents } from "../slices/EventsSlice"
import { Event } from "./Event"

export const EventGrid = () => {
  const events = useAppSelector((state: RootState) => state.events.value)
  const dispatch = useAppDispatch()
  const { isLoading, error, data } = useQuery("events", () => getEvents())

  async function getEvents() {
    let res = await eventsService.getEvents()
    dispatch(addEvents(res))
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {events.map((e) => (
            <Event key={e.id} event={e}></Event>
          ))}
        </div>
      </div>
    </>
  )
}
