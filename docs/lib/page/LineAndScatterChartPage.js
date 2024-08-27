import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import LineAndScatterChart from "lib/charts/LineAndScatterChart";

class LineAndScatterChartPage extends React.Component {

	render() {
		return (
			<ContentSection title={LineAndScatterChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => (<LineAndScatterChart data={this.props.compareData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/SCATTER-CHART.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

LineAndScatterChartPage.title = "Line & Scatter";

export default LineAndScatterChartPage;
