import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import HorizontalBarChart from "lib/charts/HorizontalBarChart";

class HorizontalBarChartPage extends React.Component {
	render() {
		return (
			<ContentSection title={HorizontalBarChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => (<HorizontalBarChart data={this.props.horizontalBarData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/HORIZONTAL-BAR-CHART.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

HorizontalBarChartPage.title = "Horizontal Bar Chart";

export default HorizontalBarChartPage;
