import SVG from '../../../../assets/icons/newTodo.svg'

export default function NotAssignedColumnHead({ user }) {
    return (
        <div className="flex h-10 justify-between items-center w-full px-1.5">
            <p className="text-center" >
                {user.name}
            </p>
            <button className="flex justify-center items-center btn bg-lightBlue ">
                <img src={SVG} className='w-6 invert'/>
            </button>
        </div>
    )
}
