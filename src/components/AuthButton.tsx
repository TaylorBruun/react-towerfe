import { useAuth0 } from "@auth0/auth0-react"

export const AuthButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  if (isAuthenticated) {
    return (
      <button
        className="btn p-2 m-2 btn-outline-light"
        onClick={() => logout({returnTo: window.location.origin})}
      >
        Log Out
      </button>
    )
  }
  return (
    <button
      className="btn p-2 m-2 btn-light"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  )
}
