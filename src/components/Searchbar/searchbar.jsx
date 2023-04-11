import { useEffect, useState } from "react"
import SVG from '../../assets/icons/filter.svg'

export default function SearchBar() {

    const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    const types = ['Buchhaltung', 'Jahresabschluss', 'Steuern', 'Personalwesen', 'Sonstiges'];
    const priorities = ['Löhne', 'Hoch', 'Mittel', 'Niedrig'];
    const statuses = ['offen', 'In Bearbeitung', 'erledigt', 'Jahresdeklaration', 'zur Kontrolle', 'MWST',];
    const [years, setYears] = useState([])

    const [selectedCustomer, setSelectedCustomer] = useState('')
    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [selectedPriority, setSelectedPriority] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')


    useEffect(() => {
        let yearsCopy = []
        const currentYear = new Date().getFullYear()
        for (let i = -2; i <= 2; i++) {
            yearsCopy.push(currentYear + i)
        }
        setYears(yearsCopy)
    }, [])   
    
    return (
        <form className="flex w-min gap-12 bg-white justify-items-start py-1.5 px-6 border-black rounded-full">
    {/* Customer */}
            <input className={`my-1 border-b-2 border-lightGray ${selectedCustomer ? 'text-black' : 'text-darkGray'}`} type="text" placeholder="Kundenname..." onChange={setSelectedCustomer} />
            {/* Month */}
            <div className="flex">
                <select className={`my-1 border-b-2 border-r-2 border-lightGray w-32 text-center ${selectedMonth ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedMonth}>
                <option value={selectedMonth} disabled hidden>Monat</option>
                {months.map(month => <option className="text-black " key={month} value={month}>{month}</option>)}
            </select>
    {/* Year */}
                <select className={`my-1 border-b-2 border-lightGray w-32 text-center ${selectedYear ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedYear}>
                <option value={selectedYear} disabled hidden>Jahr</option>
                {years.map(year => <option className="text-black " key={year} value={year}>{year}</option>)}
            </select>
            </div>
    {/* Type */}
            <select className={`my-1 border-b-2 border-lightGray ${selectedType ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedType}>
                <option value={selectedType} disabled hidden>Auftag</option>
                {types.map(type => <option className="text-black " key={type} value={type}>{type}</option>)}
            </select>
    {/* Priority */}
            <select className={`my-1 border-b-2 border-lightGray ${selectedPriority ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedPriority}>
                <option value={selectedPriority} disabled hidden>Priorität</option>
                {priorities.map(priority => <option className="text-black " key={priority} value={priority}>{priority}</option>)}
            </select>
    {/* Status */}
            <select className={`my-1 border-b-2 border-lightGray ${selectedStatus ? 'text-black' : 'text-darkGray'}`} value="" onChange={setSelectedStatus}>
                <option value={selectedStatus} disabled hidden>Stand</option>
                {statuses.map(status => <option className="text-black" key={status} value={status}>{status}</option>)}
                {months.map(month => <option className="text-black " key={month} value={month}>{month}</option>)}
            </select>
            <button className="flex justify-center items-center btn bg-lightBlue">
                <img src={SVG} className='w-6 invert' />
            </button>
        </form>
    )
}