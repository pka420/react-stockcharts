import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js"

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import MovingAverageCrossOverAlgorithmV1 from "lib/charts/MovingAverageCrossOverAlgorithmV1";

class AnnotationsPage extends React.Component {
	render() {
		return (
			<ContentSection title={AnnotationsPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{type => <MovingAverageCrossOverAlgorithmV1  data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/MA-CROSSOVER-ALGORITHM.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}
AnnotationsPage.title = "MA Crossover - Using text annotation";

export default AnnotationsPage;
