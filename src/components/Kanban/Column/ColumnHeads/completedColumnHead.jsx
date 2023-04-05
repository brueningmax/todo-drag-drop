import SVG from '../../../../assets/icons/bin.svg'

export default function CompletedColumnHead({ user }) {
    return (
        <div className="flex h-10 justify-between items-center w-full px-1.5">
            <p className="text-center" >
                Erledigt
            </p>
            <button className="flex justify-center items-center btn bg-urgent hover:bg-red-600 ">
                <img src={SVG} className='w-6 invert' />
            </button>
        </div>
    )
}