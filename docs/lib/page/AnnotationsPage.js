import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js"

import CandleStickChartWithAnnotation from "lib/charts/CandleStickChartWithAnnotation";

class AnnotationsPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<ContentSection title={AnnotationsPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<CandleStickChartWithAnnotation  data={this.props.someData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/ANNOTATIONS.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

AnnotationsPage.title = "Annotations";

export default AnnotationsPage;
