import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithClickHandlerCallback from "lib/charts/CandleStickChartWithClickHandlerCallback";

class ClickHandlerCallbackPage extends React.Component {
	render() {
		return (
			<ContentSection title={ClickHandlerCallbackPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/CLICK-CALLBACK-INTERACTIVE-INDICATOR.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithClickHandlerCallback data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

ClickHandlerCallbackPage.title = "Click callback";

export default ClickHandlerCallbackPage;
