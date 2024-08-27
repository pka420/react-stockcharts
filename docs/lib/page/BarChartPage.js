import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js"

import BarChart from "lib/charts/BarChart";

class BarChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<ContentSection title={BarChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<BarChart data={this.props.barData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/BAR-CHART.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

BarChartPage.title = "Bar Chart";

export default BarChartPage;
