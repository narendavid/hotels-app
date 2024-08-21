interface Props {
    back?: boolean
    title: string
}

const Header = ({ back = true, title }: Props) => {
    return (
        <div className="flex justify-between pb-10">
            {
                back &&
                <span onClick={() => history.back()} className="material-symbols-outlined text-2xl hover:scale-125 transition cursor-pointer">
                    keyboard_backspace
                </span>
            }
            <h1 className="text-2xl text-center">{title}</h1>
            <div></div>
        </div>
    )
}

export default Header