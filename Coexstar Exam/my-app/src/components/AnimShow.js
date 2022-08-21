import React from 'react'

export default function AnimShow(){
    var navList = document.getElementById("nav-lists");
    return(
        navList.classList.add("_Menus-show")
    )
}