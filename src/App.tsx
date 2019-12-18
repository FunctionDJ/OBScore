import React, {Fragment} from "react"
import "./App.scss"
import "font-awesome/css/font-awesome.min.css"
// import {Tabs, Tab} from "react-bootstrap"

import Players from "./tabs/Players"
import CustomTabs from "./CustomTabs"

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
          Bruh.jpg
          <i className="fa fa-thumbs-up"></i>
        </TabContent>
      </div>
      {/*<Tabs defaultActiveKey="players" id="uncontrolled">
        <Tab eventKey="players" title="Players" className="p-0">
          <Players/>
        </Tab>
        <Tab eventKey="meta" title="Meta">
          Bruh.jpg
          <i className="fa fa-thumbs-up"></i>
        </Tab>
      </Tabs>*/}
    </Fragment>
  )
}
