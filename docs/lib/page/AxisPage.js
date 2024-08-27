import React from "react";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js"

import ChartWithAxis from "lib/charts/ChartWithAxis";

class AxisPage extends React.Component {
	render() {
		return (
			<ContentSection title={AxisPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <ChartWithAxis data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/AXIS.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

AxisPage.title = "Axis";

export default AxisPage;
