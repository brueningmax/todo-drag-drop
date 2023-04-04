const Overlay = ({ visibilityCondition, exitFunction, children }) => {

    const handleClose = (e) => {
        if (e.target.id == 'background') {
            exitFunction(!visibilityCondition);
        }
    }

    return (
        <div id='background' className={`fixed top-0 left-0 right-0 bottom-0 bg-blue-800 bg-opacity-80 flex items-center justify-center ${visibilityCondition ? 'visible' : 'hidden'
            } z-50`} onClick={(e) => handleClose(e)}>
            {children}
        </div>
    )

}
export default Overlay;
