import React, {Fragment} from "react"
import "./App.scss"
import "font-awesome/css/font-awesome.min.css"

import Players from "./tabs/players/Players"
import CustomTabs from "./CustomTabs"
import Meta from "./tabs/meta/Meta"

type tabContentProps = {
  id: string,
  active?: boolean,
  children: any
}

const TabContent = ({id, active = false, children}: tabContentProps) => (
  <div
    className={`tab-pane fade ${active ? "show active" : ""}`}
    id={`nav-${id}`}
  >
    {children}
  </div>
)

export default function App() {
  return (
    <Fragment>
      <CustomTabs/>
      <div className="tab-content" id="nav-tabContent">
        <TabContent id="players" active={true}>
          <Players/>
        </TabContent>
        <TabContent id="meta">
          <Meta/>
        </TabContent>
      </div>
    </Fragment>
  )
}
