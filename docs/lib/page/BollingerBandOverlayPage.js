

import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import CandleStickChartWithBollingerBandOverlay from "lib/charts/CandleStickChartWithBollingerBandOverlay";
import Markdown from "lib/Markdown.js"


class BollingerBandOverlayPage extends React.Component {
	render() {
		return (
			<ContentSection title={BollingerBandOverlayPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <CandleStickChartWithBollingerBandOverlay data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/BOLLINGER-BAND-OVERLAY.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

BollingerBandOverlayPage.title = "Bollinger Band";

export default BollingerBandOverlayPage;
