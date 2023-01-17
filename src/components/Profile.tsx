import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useAppDispatch } from "../app/hooks"

export const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  


  const getToken = async () => {
    const token = await getAccessTokenSilently({
      audience: "https://TayDev.com",
      scope: "read:current_user",
    })
    console.log(token);
  }

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <h2>{user!.nickname}</h2>
          <p>{user!.email}</p>
          <p></p>
        </div>
      )}
    </>
  )
}
