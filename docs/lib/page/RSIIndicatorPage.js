import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithRSIIndicator from "lib/charts/CandleStickChartWithRSIIndicator";

class RSIIndicatorPage extends React.Component {

	render() {
		return (
			<ContentSection title={RSIIndicatorPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithRSIIndicator data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/RSI-INDICATOR.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

RSIIndicatorPage.title = "RSI and ATR";

export default RSIIndicatorPage;
