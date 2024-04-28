import * as React from 'react'

type props = {
    name: string
};

const Greeting: React.FC<props> = props => {
    return (
        <p>Hi {props.name}</p>
    )
}

export default Greeting