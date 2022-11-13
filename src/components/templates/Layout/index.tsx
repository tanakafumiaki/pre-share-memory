import React from "react";
import Button from "../../atoms/Button";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Button 
                border="none"
                color="pink"
                height = "200px"
                onClick={() => console.log("You clicked on the pink circle!")}
                radius = "50%"
                width = "200px"
                children = "I'm a pink circle!"
            />
            <Button 
                border="none"
                color="red"
                height = "50px"
                onClick={() => console.log("You clicked on the red Button!")}
                radius = "5%"
                width = "150px"
                children = "Button"
            />
        </>
    )
}

export default Layout
