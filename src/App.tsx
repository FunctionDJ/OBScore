import React, {Fragment} from "react"
import "./App.scss"

import "font-awesome/css/font-awesome.min.css"

import {Tabs, Tab} from "react-bootstrap"

import Players from "./tabs/Players"

export default function App() {
  return (
    <Fragment>
      <Tabs defaultActiveKey="players" id="uncontrolled">
        <Tab eventKey="players" title="Players" className="p-0">
          <Players/>
        </Tab>
        <Tab eventKey="meta" title="Meta">
          Bruh.jpg
          <i className="fa fa-thumbs-up"></i>
        </Tab>
      </Tabs>
    </Fragment>
  )
}
