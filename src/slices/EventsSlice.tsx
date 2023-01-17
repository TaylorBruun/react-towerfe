import { createSlice } from "@reduxjs/toolkit"
import { TowerEvent } from "../interfaces/event"
import { PayloadAction } from "@reduxjs/toolkit"

export interface EventsState {
  value: TowerEvent[]
}

const initialState: EventsState = {
  value: [],
}

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvents: (state, action: PayloadAction<TowerEvent[]>) => {
      state.value = action.payload
    },
  },
})

export const { addEvents } = eventsSlice.actions

export default eventsSlice.reducer
