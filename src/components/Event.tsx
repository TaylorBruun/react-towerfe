import { useEffect } from "react"
import { useAppDispatch } from "../app/hooks"
import { TowerEvent } from "../interfaces/event"
import { eventsService } from "../services/EventsService"
import { addEvents } from "../slices/EventsSlice"
import "./Event.css"

export const Event = (props: { event: TowerEvent }) => {
  return (
    <>
      <div className="event-card col-3 p-2 m-2">
        <h6 className="text-muted">{formatDate(props.event.startDate)}</h6>
        <h3 className={(props.event.isCanceled ? 'text-decoration-line-through':undefined)}>{props.event.name}</h3>
        <h5>{props.event.location}</h5>
        <h6 className={(props.event.capacity <= 0) ? "text-danger" : undefined}>
          Tickets remaining: {props.event.capacity.toString()}
        </h6>
        <h6>{props.event.id}</h6>
      </div>
    </>
  )

  function formatDate(rawDate: Date) {
    return new Date(rawDate).toLocaleDateString()
  }
}
