import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import PointAndFigure from "lib/charts/PointAndFigure";

class PointAndFigurePage extends React.Component {
	render() {
		return (
			<ContentSection title={PointAndFigurePage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/POINT-AND-FIGURE.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => <PointAndFigure data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

PointAndFigurePage.title = "Point & Figure";


export default PointAndFigurePage;
