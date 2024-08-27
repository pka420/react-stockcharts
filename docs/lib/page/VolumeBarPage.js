import React from "react";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js"

import CandleStickStockScaleChartWithVolumeBarV1 from "lib/charts/CandleStickStockScaleChartWithVolumeBarV1";
import CandleStickStockScaleChartWithVolumeBarV2 from "lib/charts/CandleStickStockScaleChartWithVolumeBarV2";
import CandleStickStockScaleChartWithVolumeBarV3 from "lib/charts/CandleStickStockScaleChartWithVolumeBarV3";

class VolumeBarPage extends React.Component {
	render() {
		return (
			<ContentSection title={VolumeBarPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/VOLUME-BAR-INTRO.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<CandleStickStockScaleChartWithVolumeBarV1 data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/VOLUME-BAR.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<CandleStickStockScaleChartWithVolumeBarV2 data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/VOLUME-BAR-Contd.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<CandleStickStockScaleChartWithVolumeBarV3 data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/VOLUME-BAR-Contd2.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

VolumeBarPage.title = "Volume bar";

export default VolumeBarPage;
