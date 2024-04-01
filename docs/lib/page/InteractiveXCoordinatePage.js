import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithInteractiveXCoordinate from "lib/charts/CandleStickChartWithInteractiveXCoordinate";

class InteractiveXCoordinatePage extends React.Component {
	render() {
		return (
			<ContentSection title={InteractiveXCoordinatePage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithInteractiveXCoordinate data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{ __html: require("md/INTERACTIVE-Y-COORDINATE") }}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

InteractiveXCoordinatePage.title = "Interactive X Coordinate";

export default InteractiveXCoordinatePage;
