import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartForContinuousIntraDay from "lib/charts/CandleStickChartForContinuousIntraDay";

class IntraDayContinuousDataPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

	render() {
		return (
			<ContentSection title={IntraDayContinuousDataPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<CandleStickChartForContinuousIntraDay data={this.props.intraDayContinuousData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/INTRA-DAY-CONTINUOUS.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

IntraDayContinuousDataPage.title = "Intra day with Continuous scale";

export default IntraDayContinuousDataPage;
