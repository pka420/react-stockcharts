import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js";

import CandleStickChartWithZoomPan from "lib/charts/CandleStickChartWithZoomPan";

class SvgVsCanvasPage extends React.Component {
	render() {
		return (
			<ContentSection title={SvgVsCanvasPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/SVG-VS-CANVAS.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser type="svg">
							{(type) => <CandleStickChartWithZoomPan data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

SvgVsCanvasPage.title = "Svg vs Canvas";

export default SvgVsCanvasPage;
