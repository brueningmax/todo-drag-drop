import { useState } from "react"
import Overlay from "../BaseOverlay/baseOverlay"
export default function Login({ user, submitFunction }) {
    const [visibility, setVisibility] = useState(user === '')
    const [userName, setUserName] = useState('')
    const [passwort, setPasswort] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        submitFunction('user')
        setVisibility(false)
    }

    return (
        <Overlay customStyling="bg-darkBlue bg-opacity-100" visibilityCondition={visibility}>
            <form className="overlay">
                <div className="flex flex-col items-start w-full">
                    <label>Benutzername</label>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="input w-full" />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label>Passwort</label>
                    <input value={passwort} onChange={(e) => setPasswort(e.target.value)} type="text" className="input w-full" />
                </div>
                <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-low text-white hover:bg-highlight_low">Login</button>
                <button onClick={(e) => { e.preventDefault(); exitFunction(false) }} className="btn w-full bg-urgent text-white hover:bg-highlight_urgent">Schliessen</button>
            </form>
        </Overlay>
    )
}