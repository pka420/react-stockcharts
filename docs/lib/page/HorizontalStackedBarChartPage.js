import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import HorizontalStackedBarChart from "lib/charts/HorizontalStackedBarChart";

class HorizontalBarChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<ContentSection title={HorizontalBarChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<HorizontalStackedBarChart data={this.props.horizontalGroupedBarData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/HORIZONTAL-STACKED-BAR-CHART.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

HorizontalBarChartPage.title = "Horizontal Stacked Bar";

export default HorizontalBarChartPage;
