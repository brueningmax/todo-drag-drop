import { useState } from "react";

export default function UserSettingsOverlay({ exitFunction }) {
    const [selectedUser, setSelectedUser] = useState('');
    const [advancedRights, setadvancedRights] = useState(false);
    const [availableUsers, setAvailableUsers] = useState(['diana', 'hurda'])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, login)
        exitFunction(false)
    }
    return (
        <form className="overlay">
            <select className={`py-1 text-center w-full text-start border-b-2 ${selectedUser ? 'text-black' : 'text-darkGray'}`} value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
                <option value='' disabled hidden>Benutzer wählen</option>
                {availableUsers.map(user => <option className="text-black" key={user} value={user}>{user}</option>)}
            </select>
            <div className="flex  justify-between w-full">
                <label>Kann Todos verteilen:</label>
                <input value={advancedRights} onChange={(e) => setadvancedRights(e.target.value)} type="checkbox" className="input" />
            </div>
            <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-low text-white hover:bg-highlight_low">Änderung speichern</button>
            <button onClick={(e) => { e.preventDefault(); exitFunction(false) }} className="btn w-full bg-high text-white hover:bg-highlight_high">Passwort zurücksetzen</button>
            <button onClick={(e) => { e.preventDefault(); exitFunction(false) }} className="btn w-full bg-urgent text-white hover:bg-highlight_urgent">Benutzer löschen</button>
            <button onClick={(e) => { e.preventDefault(); exitFunction(false) }} className="btn w-full bg-urgent text-white hover:bg-highlight_urgent">Abbrechen</button>
        </form>
    )
}