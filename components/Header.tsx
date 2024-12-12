import { count } from "console"
import { OnlineUsers } from "./OnlineUsers"
import { CountContext } from "@/contexts/CountContext"
import { useContext } from "react"

export const Header = () => {

    const countCtx = useContext(CountContext)
    return (
        <header>
            <h1 className="text-3xl">titulo da pg ({countCtx?.onlineCount})</h1>
            <OnlineUsers/> 
        </header>
    )
}