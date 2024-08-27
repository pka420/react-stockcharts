import React from "react";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js";

import CandleStickChartWithCHMousePointer from "lib/charts/CandleStickChartWithCHMousePointer";

class MousePointerPage extends React.Component {
	render() {
		return (
			<ContentSection title={MousePointerPage.title}>
				<Row>
					<Section colSpan={2}>
						<CandleStickChartWithCHMousePointer data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/MOUSEPOINTER.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

MousePointerPage.title = "Mouse pointer";

export default MousePointerPage;
