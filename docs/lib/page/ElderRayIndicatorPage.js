import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import OHLCChartWithElderRayIndicator from "lib/charts/OHLCChartWithElderRayIndicator";

class ElderRayIndicatorPage extends React.Component {
	render() {
		return (
			<ContentSection title={ElderRayIndicatorPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/ELDER-RAY-INDICATOR.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <OHLCChartWithElderRayIndicator data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

ElderRayIndicatorPage.title = "ElderRay";

export default ElderRayIndicatorPage;
