import Team from '../../assets/icons/group-chat.svg'
import Client from '../../assets/icons/briefcase.svg'
import Gears from '../../assets/icons/settings.svg'
import Overlay from '../Overlays/BaseOverlay/baseOverlay'
import UserSettingsOverlay from '../Overlays/UserSettings/userSettings'
import CustomerSettingsOverlay from '../Overlays/CustomerSettings/customerSettings'
import OwnUserOverlay from '../Overlays/OwnUserSettings/ownUserSettings'
import { useState } from 'react'


export default function Sidebar() {
    const [userSettingsVisibility, setUserSettingsVisibility] = useState(false)
    const [customerSettingsVisibility, setCustomerSettingsVisibility] = useState(false)
    const [ownUserSettingsVisibility, setOwnUserSettingsVisibility] = useState(false)
    return (
        <div className="bg-sky-900 w-14 flex flex-col items-center pt-24 gap-5">
            <button className="flex justify-center items-center btn bg-lightBlue mt-2.5" onClick={() => setUserSettingsVisibility(true)}>
                <img src={Team} className='invert' />
            </button>
            <Overlay visibilityCondition={userSettingsVisibility} exitFunction={setUserSettingsVisibility} >
                <UserSettingsOverlay exitFunction={setUserSettingsVisibility} />
            </Overlay>
            <button className="flex justify-center items-center btn bg-lightBlue mt-2.5" onClick={() => setCustomerSettingsVisibility(true)}>
                <img src={Client} className='w-8 invert' />
            </button>
            <Overlay visibilityCondition={customerSettingsVisibility} exitFunction={setCustomerSettingsVisibility} >
                <CustomerSettingsOverlay exitFunction={setCustomerSettingsVisibility} />
            </Overlay>
            <button className="flex justify-center items-center btn bg-lightBlue mt-2.5" onClick={() => setOwnUserSettingsVisibility(true)}>
                <img src={Gears} className='w-8 invert' />
            </button>
            <Overlay visibilityCondition={ownUserSettingsVisibility} exitFunction={setOwnUserSettingsVisibility} >
                <OwnUserOverlay exitFunction={ownUserSettingsVisibility} />
            </Overlay>
        </div>
    )
}