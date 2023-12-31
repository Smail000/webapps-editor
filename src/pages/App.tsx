import React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import * as style from "./App.module.less"

import SomePage from "./SomePage/SomePage"
import DemoUI from "./DemoUI/DemoUI"
import PageNotFound from "./PageNotFound/PageNotFound"
import LogicEditor from "./LogicEditor/LogicEditor"

import reloader from "../tools/reloader"
import { io } from "socket.io-client"

const socket = io()
reloader(socket)

export default function App() {
    return (
        <Router>
            <div className={style.wrapper}>
                <Routes>
                    <Route path="/" element={<SomePage />} />
                    <Route path="/demo" element={<DemoUI />} />
                    <Route path="/logic" element={<LogicEditor />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    )
}