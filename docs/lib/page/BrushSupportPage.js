import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithBrush from "lib/charts/CandleStickChartWithBrush";
import Markdown from "lib/Markdown.js"


class BrushSupportPage extends React.Component {
	render() {
		return (
			<ContentSection title={BrushSupportPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/BRUSH-INTERACTIVE-INDICATOR.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithBrush data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

BrushSupportPage.title = "Brush";

export default BrushSupportPage;
