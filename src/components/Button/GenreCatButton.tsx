import type { ReactNode } from "react"

interface GenreCatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

const GenreCatButton = ({children, ...props}:GenreCatButtonProps)=> {
    return (
        <button className="bg-zinc-800 p-1 text-white rounded" {...props}>{children}</button>
    )
}

export default GenreCatButton