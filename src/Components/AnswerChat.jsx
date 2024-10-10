import propType from 'prop-types';

function AnswerChat({ children, type = "answer" }) {

    const classType = {
        answer: "bg-blue-300 lg:text-lg lg:font-semibold text-black h-fit w-fit px-2 py-1 my-2 rounded-e-2xl rounded-t-2xl text-sm font-thin mr-3 ml-1",
        question: "bg-blue-100 lg:text-lg lg:font-semibold text-black h-fit w-fit px-2 py-1 my-2 rounded-l-2xl rounded-t-2xl text-sm font-thin mr-1 ml-auto"
    }
    return (
        <div className={classType[type]}>
            {children}
        </div>
    )
}

AnswerChat.propTypes = {
    children: propType.string,
    type: propType.string,
}

export default AnswerChat
