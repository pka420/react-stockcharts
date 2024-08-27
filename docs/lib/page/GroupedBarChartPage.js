import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import GroupedBarChart from "lib/charts/GroupedBarChart";

class GroupedBarChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<ContentSection title={GroupedBarChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<GroupedBarChart data={this.props.groupedBarData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/GROUPED-BAR-CHART.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

GroupedBarChartPage.title = "Grouped Bar Chart";

export default GroupedBarChartPage;
