import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithStandardDeviationChannel from "lib/charts/CandleStickChartWithStandardDeviationChannel";

class EquidistantChannelPage extends React.Component {
	render() {
		return (
			<ContentSection title={EquidistantChannelPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/STANDARD-DEVIATION-CHANNEL.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithStandardDeviationChannel data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

EquidistantChannelPage.title = "Standard Deviation Channel";

export default EquidistantChannelPage;
