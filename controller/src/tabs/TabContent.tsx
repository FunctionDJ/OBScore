import React from "react"

type tabContentProps = {
  id: string,
  active?: boolean,
  children: any
}

export default function TabContent({id, active = false, children}: tabContentProps) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`nav-${id}`}
    >
      {children}
    </div>
  )
}
