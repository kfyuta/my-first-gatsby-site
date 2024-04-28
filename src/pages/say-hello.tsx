import React from "react"
import Greeting from "../components/greeting"

const SayHello: React.FC = () => {
    return (
        <div>
            <Greeting name ="Megan" />
            <Greeting name ="Olivia" />
            <Greeting name ="Edword" />
        </div>
    )
}

export default SayHello