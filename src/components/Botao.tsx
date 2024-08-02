interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    const corClasses = {
        green: 'bg-gradient-to-r from-green-500 to-green-800',
        blue: 'bg-gradient-to-r from-blue-500 to-blue-800',
        gray: 'bg-gradient-to-r from-gray-500 to-gray-800',
      };

    return (
        <button onClick={props.onClick} className={`
        ${corClasses[cor]}
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}