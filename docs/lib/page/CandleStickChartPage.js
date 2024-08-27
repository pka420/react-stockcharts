import React from "react";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js"

import CandleStickChart from "lib/charts/CandleStickChart";
import CandleStickStockScaleChart from "lib/charts/CandleStickStockScaleChart";

class CandleStickChartPage extends React.Component {
	render() {
		return (
			<ContentSection title={CandleStickChartPage.title}>
				<Row title="">
					<Section colSpan={2}>
						<CandleStickChart data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/CANDLESTICK.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<CandleStickStockScaleChart data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/CANDLESTICK-IMPROVED.md" />
					</Section>
				</Row>
				<Row title="stocktime scale">
					<Section colSpan={2}>
						<Markdown md_file="md/FINANCETIMESCALE.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

CandleStickChartPage.title = "Candlestick Chart";

export default CandleStickChartPage;
