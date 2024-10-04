
function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="bg-slate-500 opacity-80 px-2 h-fit w-fit rounded-xl text-slate-200 text-sm font-extralight">
            {children}
        </button>
    )
}

export default Button
