import { useState } from "react";

export default function ExistingCustomerSettingsOverlay({ exitFunction, editToggle }) {
    const [selectedCustomers, setSelectedCustomers] = useState('');
    const [advancedRights, setadvancedRights] = useState(false);
    const [availableCustomers, setAvailableCustomers] = useState(['xyz GmbH', 'Assi AG'])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, login)
        exitFunction(false)
    }
    return (
        <div className="flex flex-col w-full gap-4">
            <div className="flex w-full justify-between gap-2.5">
                <select className={`py-1 text-center grow text-start border-b-2 ${selectedCustomers ? 'text-black' : 'text-darkGray'}`} value={selectedCustomers} onChange={e => setSelectedCustomers(e.target.value)}>
                    <option value='' disabled hidden>Kunden wählen</option>
                    {availableCustomers.map(customer => <option className="text-black" key={customer} value={customer}>{customer}</option>)}
                </select>
                <button onClick={() => editToggle(false)} className="btn bg-low hover:bg-highlight_low">ADD</button>
            </div>
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
            <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-low text-white hover:bg-highlight_low">Änderung speichern</button>
            <button onClick={(e) => { e.preventDefault(); exitFunction(false) }} className="btn w-full bg-urgent text-white hover:bg-highlight_urgent">Kunden löschen</button>
            </div>
    )
}