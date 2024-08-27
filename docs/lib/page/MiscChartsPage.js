import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import AreaChartWithZoomPan from "lib/charts/AreaChartWithZoomPan";

class MiscChartsPage extends React.Component {
	render() {
		return (
			<ContentSection title={MiscChartsPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/SINGLE-VALUE-TOOLTIP.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => <AreaChartWithZoomPan data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

MiscChartsPage.title = "Misc Charts";

export default MiscChartsPage;
