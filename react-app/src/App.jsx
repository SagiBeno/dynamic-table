import React from "react";
import MyTable from './Components/MyTable'
import './App.css'

export default class App extends React.Component {
  render() {
    return <div>
      <MyTable data="M_CSK_S F_D_SZ CYER F_TY_G_"/>
    </div>
  }
}