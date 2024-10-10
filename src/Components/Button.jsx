
function Button({ children, onClick, disabled }) {
    return (
        <button disabled={disabled} onClick={onClick} className="bg-slate-100 opacity-80 px-2 h-fit w-fit rounded-xl text-blue-950 text-sm font-extralight lg:text-lg">
            {children}
        </button>
    )
}

export default Button
