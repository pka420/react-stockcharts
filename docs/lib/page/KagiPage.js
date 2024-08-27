import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import Kagi from "lib/charts/Kagi";

class KagiPage extends React.Component {

	render() {
		return (
			<ContentSection title={KagiPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/KAGI.md" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => <Kagi data={this.props.lotsOfData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

KagiPage.title = "Kagi";

export default KagiPage;
