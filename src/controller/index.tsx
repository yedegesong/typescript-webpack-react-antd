/// <reference path="../../typings/tsd.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TimePicker } from 'antd';
import 'antd/lib/index.css';  

function onChange(time) {
	console.log(time);
	if (time) {
		console.log(time.toLocaleTimeString('zh-CN', { hour12: false })); // Get time string
	}
}
ReactDOM.render(
    <TimePicker onChange={onChange} />,
    document.getElementById("example")
);

