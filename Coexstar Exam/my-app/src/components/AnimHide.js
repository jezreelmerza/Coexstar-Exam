import React from 'react'

export default function AnimHide(){
    var navList = document.getElementById("nav-lists");
    return(
        navList.classList.remove("_Menus-show")
    )
}