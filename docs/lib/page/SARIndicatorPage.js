import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithSAR from "lib/charts/CandleStickChartWithSAR";

class ForceIndexIndicatorPage extends React.Component {
	render() {
		return (
			<ContentSection title={ForceIndexIndicatorPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithSAR data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/SAR-INDICATOR.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

ForceIndexIndicatorPage.title = "SAR";

export default ForceIndexIndicatorPage;
