import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js"

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithFibonacciInteractiveIndicator from "lib/charts/CandleStickChartWithFibonacciInteractiveIndicator";

class FibonacciInteractiveIndicatorPage extends React.Component {
	render() {
		return (
			<ContentSection title={FibonacciInteractiveIndicatorPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/FIBB-RETRACEMENTS-INTERACTIVE-INDICATOR.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithFibonacciInteractiveIndicator data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

FibonacciInteractiveIndicatorPage.title = "Fibonacci Retracement";

export default FibonacciInteractiveIndicatorPage;
