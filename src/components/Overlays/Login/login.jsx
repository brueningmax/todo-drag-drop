import { useState } from "react"
import Overlay from "../BaseOverlay/baseOverlay"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../../Redux/Slices/userSlice"


export default function Login() {
    const dispatch = useDispatch()

    const user = useSelector(store => store.user.user)
    
    const [visibility, setVisibility] = useState(true)
    const [userName, setUserName] = useState(undefined)
    const [passwort, setPasswort] = useState(undefined)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: 15,
            name: userName,
        }
        localStorage.setItem("jts-todo-user", JSON.stringify(user))
        dispatch(setUser(user))
        setVisibility(false)
    }

    return (
        <Overlay customStyling="bg-darkBlue bg-opacity-100" visibilityCondition={visibility} exitFunction={setVisibility}>
            <form className="overlay">
                <div className="flex justify-between w-full">
                    <label >Benutzername</label>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="input w-40" autoComplete="username" />
                </div>
                <div className="flex justify-between w-full">
                    <label>Passwort</label>
                    <input value={passwort} onChange={(e) => setPasswort(e.target.value)} type="password" className="input w-40" autoComplete="current-password" />
                </div>
                <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-low text-white hover:bg-highlight_low">Login</button>
                <button onClick={(e) => { e.preventDefault(); exitFunction(false) }} className="btn w-full bg-urgent text-white hover:bg-highlight_urgent">Schliessen</button>
            </form>
        </Overlay>
    )
}