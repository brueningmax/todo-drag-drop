import Team from '../../assets/icons/group-chat.svg'
import Client from '../../assets/icons/briefcase.svg'
import Gears from '../../assets/icons/settings.svg'

export default function Sidebar() {
    return (
        <div className="bg-sky-900 w-14 flex flex-col items-center pt-24 gap-5">
            <button className="flex justify-center items-center btn bg-lightBlue mt-2.5">
                <img src={Team} className='invert' />
            </button>
            <button className="flex justify-center items-center btn bg-lightBlue mt-2.5">
                <img src={Client} className='w-8 invert' />
            </button>
            <button className="flex justify-center items-center btn bg-lightBlue mt-2.5">
                <img src={Gears} className='w-8 invert' />
            </button>
        </div>
    )
}