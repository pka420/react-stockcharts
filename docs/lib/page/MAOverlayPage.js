import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithMA from "lib/charts/CandleStickChartWithMA";

class MAOverlayPage extends React.Component {
	render() {
		return (
			<ContentSection title={MAOverlayPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithMA data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/MOVING-AVERAGE-OVERLAY.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

MAOverlayPage.title = "Moving Average";

export default MAOverlayPage;
