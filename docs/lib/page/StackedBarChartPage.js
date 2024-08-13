
import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import StackedBarChart from "lib/charts/StackedBarChart";

class StackedBarChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<ContentSection title={StackedBarChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<StackedBarChart data={this.props.groupedBarData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{ __html: require("md/STACKED-BAR-CHART") }}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

StackedBarChartPage.title = "Stacked Bar Chart";

export default StackedBarChartPage;
