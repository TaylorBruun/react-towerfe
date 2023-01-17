import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { RootState } from "../app/store"
import { TowerEvent } from "../interfaces/event"

export const EventDetails = () => {
  let selectedId = useLocation()
  let retrievedParams = useParams()
  const events = useAppSelector((state: RootState) => state.events.value)
  let selectedEvent: TowerEvent | undefined

  function checkId() {
    console.log("id:", selectedId)
    console.log("params:", retrievedParams)
  }

  useEffect(()=>{
    selectedEvent = events.find((e) => e.id == retrievedParams.eventId)
  }), []

  return (
    <>
      <button className="btn btn-primary" onClick={checkId}>
        Log Details
      </button>
      <h6>{selectedEvent?.name}</h6>
    </>
  )
}
