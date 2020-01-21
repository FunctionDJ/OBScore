import React, {Fragment} from "react"
import "./App.scss"
import "font-awesome/css/font-awesome.min.css"

import Players from "./tabs/players/Players"
import CustomTabs from "./CustomTabs"
import Meta from "./tabs/meta/Meta"
import TabContent from "./tabs/TabContent"

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
