import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithMACDIndicator from "lib/charts/CandleStickChartWithMACDIndicator";

class MACDIndicatorPage extends React.Component {
	render() {
		return (
			<ContentSection title={MACDIndicatorPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/MACD-INDICATOR.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => (<CandleStickChartWithMACDIndicator data={this.props.lotsOfData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

MACDIndicatorPage.title = "MACD";

export default MACDIndicatorPage;
