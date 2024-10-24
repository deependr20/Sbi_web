import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
            <div className='bg-[#20CAFD] md:px-0 px-1 py-3 md:py-2'>
                <div className='flex gap-4 md:justify-end justify-center  md:pr-[10rem]'>
                    <Button name="Dentor Access" image="src/assets/header/debtor_access.webp" />
                    <Button name="Client Access" image="src/assets/header/client_access.webp" />
                    <Button name="Vision & Mission" />
                </div>
            </div>
    )
}

export default Header