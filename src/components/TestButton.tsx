import React from "react"
import { eventsService } from "../services/EventsService"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { RootState } from "../app/store"
import { addEvents } from "../slices/EventsSlice"
import { accountService } from "../services/AccountService"
import { useAuth0 } from "@auth0/auth0-react"

export const TestButton = () => {
  const dispatch = useAppDispatch()
  let account = {}

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const getToken = async () => {
    const token = await getAccessTokenSilently({
      audience: "https://TayDev.com",
      scope: "read:current_user",
    })
    console.log(token)
  }

  async function getAccount() {
    let res = await accountService.getAccount()
    account = res
    console.log(account)
  }

  const events = useAppSelector((state: RootState) => state.events.value)

  return (
    <>
      <button className="btn btn-outline-primary p-2 m-2" onClick={getAccount}>Test Button</button>
    </>
  )
}
