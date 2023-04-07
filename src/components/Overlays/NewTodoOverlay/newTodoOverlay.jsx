import { useEffect, useState } from "react"

export default function NewTodoOverlay({ exitFunction }) {
    const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    const types = ['Buchhaltung', 'Jahresabschluss', 'Steuern', 'Personalwesen', 'Sonstiges'];
    const priorities = ['Löhne', 'Hoch', 'Mittel', 'Niedrig'];
    const statuses = ['offen', 'In Bearbeitung', 'erledigt', 'Jahresdeklaration', 'zur Kontrolle', 'MWST',];

    const [selectedCustomer, setSelectedCustomer] = useState('')
    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [selectedPriority, setSelectedPriority] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')
    const [years, setYears] = useState([])

    useEffect(() => {
        let yearsCopy = []
        const currentYear = new Date().getFullYear()
        for (let i = -2; i <= 2; i++) {
            yearsCopy.push(currentYear + i)
        }
        setYears(yearsCopy)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, login)
        exitFunction(false)
    }
    return (
        <form className="overlay">
            <input className={`py-1 border-b-2 border-lightGray w-full ${selectedCustomer ? 'text-black' : 'text-darkGray'}`} type="text" placeholder="Kundenname..." onChange={setSelectedCustomer} />
            {/* Type */}
            <select className={`py-1 w-full border-b-2 border-lightGray ${selectedType ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedType}>
                <option value={selectedType} disabled hidden>Auftag</option>
                {types.map(type => <option className="text-black" key={type} value={type}>{type}</option>)}
            </select>
            {/* Priority */}
            <select className={`py-1 w-full border-b-2 border-lightGray ${selectedPriority ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedPriority}>
                <option value={selectedPriority} disabled hidden>Priorität</option>
                {priorities.map(priority => <option className="text-black" key={priority} value={priority}>{priority}</option>)}
            </select>
            {/* Month */}
            <div className="flex w-full gap-1">
                <p className="text-darkGray text-center">Zeitraum:</p>
                <select className={`py-1 border-b-2 border-r-2 border-lightGray w-32 text-center ${selectedMonth ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedMonth}>
                    <option value={selectedMonth} disabled hidden>Monat</option>
                    {months.map(month => <option className="text-black" key={month} value={month}>{month}</option>)}
                </select>
                {/* Year */}
                <select className={`py-1 border-b-2 border-lightGray w-32 text-center ${selectedYear ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedYear}>
                    <option value={selectedYear} disabled hidden>Jahr</option>
                    {years.map(year => <option className="text-black" key={year} value={year}>{year}</option>)}
                </select>
            </div>
            <div className="w-full flex flex-col items-start">
            <label>Bemerkunden</label>
            <textarea className="w-full input"></textarea>
            </div>
            <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-low text-white hover:bg-highlight_low">Todo speichern</button>
            <button onClick={(e) => handleSubmit(e)} className="btn w-full bg-urgent text-white hover:bg-highlight_urgent">Abbrechen</button>
        </form>
    )
}