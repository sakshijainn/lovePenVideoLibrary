import React from 'react'
import "./SidebarRow.css"
const SidebarRow = ({selected , Icon,title}) => {
    return (
        <div className={`sidebar-row ${selected && "selected"}`}>
            <Icon className="sidebar_row_icon"/>
            <h2 className="sidebar_row_title">{title}</h2>
            
        </div>
    )
}

export default SidebarRow
