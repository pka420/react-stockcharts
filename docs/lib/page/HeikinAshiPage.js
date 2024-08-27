import Markdown from "lib/Markdown.js";
import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import HeikinAshi from "lib/charts/HeikinAshi";

class HeikinAshiPage extends React.Component {
	render() {
		return (
			<ContentSection title={HeikinAshiPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/HEIKIN-ASHI.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => <HeikinAshi data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

HeikinAshiPage.title = "Heikin Ashi";

export default HeikinAshiPage;
