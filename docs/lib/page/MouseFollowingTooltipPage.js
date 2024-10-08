import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithHoverTooltip from "lib/charts/CandleStickChartWithHoverTooltip";

class MouseFollowingTooltipPage extends React.Component {
	render() {
		return (
			<ContentSection title={MouseFollowingTooltipPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => (<CandleStickChartWithHoverTooltip  data={this.props.someData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/HOVER-TOOLTIP.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

MouseFollowingTooltipPage.title = "Hover Tooltip";

export default MouseFollowingTooltipPage;
