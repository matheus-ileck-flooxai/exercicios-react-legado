import React from "react"

export function MapPropsToChildren(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props })
    })
}