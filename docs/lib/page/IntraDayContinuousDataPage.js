

import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";

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
						<aside dangerouslySetInnerHTML={{ __html: require("md/INTRA-DAY-CONTINUOUS") }}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

IntraDayContinuousDataPage.title = "Intra day with Continuous scale";

export default IntraDayContinuousDataPage;
