import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js"

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithGannFan from "lib/charts/CandleStickChartWithGannFan";

class GannFanPage extends React.Component {
	render() {
		return (
			<ContentSection title={GannFanPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/GANN-FAN.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithGannFan data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

GannFanPage.title = "Gann Fan";

export default GannFanPage;
