import { useState } from "react";

export default function NewUserOverlay() {
    const [user, setUser] = useState('');
    const [login, setLogin] = useState('');


    return (
        <div className="flex flex-col rounded-md gap-4 items-start bg-white p-4">
            <div className="flex flex-col items-start w-full">
                <label>Benutzer</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" className="input w-full" />
            </div>
            <div className="flex flex-col items-start w-full">
                <label>Login</label>
                <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" className="input w-full" />
            </div>
            <button className="btn w-52 bg-low text-white hover:bg-highlight_low">Benutzer anlegen</button>
            <button className="btn w-52 bg-urgent text-white hover:bg-highlight_urgent">Abbrechen</button>
        </div>
    )
}