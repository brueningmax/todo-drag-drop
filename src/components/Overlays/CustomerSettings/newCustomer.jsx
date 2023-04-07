import { useState } from "react";

export default function NewCustomerSettingsOverlay({ exitFunction,editToggle }) {
    const [selectedCustomers, setSelectedCustomers] = useState('');
    const [availableCustomers, setAvailableCustomers] = useState(['xyz GmbH', 'Assi AG'])
    const [advancedRights, setadvancedRights] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, login)
        exitFunction(false)
    }
    return (
        <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col items-start w-full">
                <label>Name:</label>
                <input value={advancedRights} onChange={(e) => setadvancedRights(e.target.value)} type="text" className="input w-full" />
            </div>
            <div className="flex flex-col items-start w-full">
                <label>Adresse:</label>
                <textarea value={advancedRights} onChange={(e) => setadvancedRights(e.target.value)} type="text" className="input w-full" />
            </div>
            <div className="flex flex-col items-start w-full">
                <label>Ansprechpartner:</label>
                <textarea value={advancedRights} onChange={(e) => setadvancedRights(e.target.value)} type="text" className="input w-full" />
            </div>
            <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-low text-white hover:bg-highlight_low">Neuen Kunden speichern</button>
            <button onClick={(e) => { e.preventDefault(); editToggle(true) }} className="btn w-full bg-high text-white hover:bg-highlight_high">Bestandskunden bearbeiten</button>
        </div>
    )
}