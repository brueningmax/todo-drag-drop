import { useDispatch, useSelector } from 'react-redux';
import SVG from '../../../../assets/icons/bin.svg'
import api from '../../../../axios'

export default function CompletedColumnHead({ user }) {
    const dispatch = useDispatch()

    const token = useSelector(store => store.user.token)
    const isAdmin = useSelector(store => store.user.user.isAdmin)

    const deleteCompleted = async () => {
        let config = {
            headers: { 
              'Authorization': `Bearer ${token}`
            },
          };
        const response = await api.delete('todos/deleteCompleted', config)
        if (response.status === 204) {
            dispatch(deleteCompleted)
        } else {
            alert('Etwas ist schief gelaufen. Bitte versuche es noch einmal')
        }
    }

    return (
        <div className="flex h-10 justify-between items-center w-full px-1.5">
            <p className="text-center" >
                Erledigt
            </p>
            {isAdmin &&
            <button className="flex justify-center items-center btn bg-urgent hover:bg-red-600 " onClick={deleteCompleted}>
                <img src={SVG} className='w-6 invert' />
            </button>
            }
        </div>
    )
}