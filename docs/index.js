import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

import React from "react";
import { createRoot } from 'react-dom/client';

import Chart from "./lib/charts/CandleStickChartWithDarkTheme";

const ReadME = require("md/MAIN.md");

require("stylesheets/re-stock");

document.getElementById("content").innerHTML = ReadME;

const parseDate = timeParse("%Y-%m-%d");

loadPage();

function loadPage() {
	fetch("data/MSFT.tsv")
		.then(response => response.text())
		.then(data => tsvParse(data, d => {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;

			return d;
		}))
		.then(data => {
			const root = createRoot(document.getElementById("chart"));
            root.render(<Chart data={data} type="hybrid"/>);
		});
}
