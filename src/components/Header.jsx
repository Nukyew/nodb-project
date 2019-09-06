import React from 'react'
import Nav from './Nav'

export default function Header(props) {
    return(
        <header>
            <h1>Gift Finder</h1>
            <Nav switchView={props.switchView}/>
        </header>
    )
}