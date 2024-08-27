import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js"
import BubbleChart from "lib/charts/BubbleChart";

class BubbleChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<ContentSection title={BubbleChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<BubbleChart data={this.props.bubbleData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/BUBBLE-CHART.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

BubbleChartPage.title = "Bubble Chart";

export default BubbleChartPage;
