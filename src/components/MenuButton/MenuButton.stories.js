import { useState } from "react";
import MenuButton from "./MenuButton";

export default {
    title: 'Components/MenuButton',
    component: MenuButton,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
};


export const Primary = {
    render: () => {
        const [isOpen, setOpen] = useState();

        return (
            <MenuButton clickFn={setOpen(!isOpen)} isOpen={isOpen} />

        )
    }

}