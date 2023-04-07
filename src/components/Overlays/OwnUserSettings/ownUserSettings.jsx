import { useState } from "react";

export default function OwnUserOverlay({ exitFunction }) {
    const [user, setUser] = useState('');
    const [login, setLogin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, login)
        exitFunction(false)
    }
    return (
        <form className="overlay">
            <div className="flex flex-col items-start w-full">
                <label>Benutzer</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" className="input w-full" />
            </div>
            <div className="flex flex-col items-start w-full">
                <label>Passwort</label>
                <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" className="input w-full" />
            </div>
            <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-low text-white hover:bg-highlight_low">Änderung speichern</button>
            <button onClick={(e) => { e.preventDefault(); exitFunction(false) }} className="btn w-full bg-urgent text-white hover:bg-highlight_urgent">Abbrechen</button>
        </form>
    )
}