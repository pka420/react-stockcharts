import React from "react";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Markdown from "lib/Markdown.js";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import VolumeProfileBySessionChart from "lib/charts/VolumeProfileBySessionChart";

class VolumeProfileBySessionPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<ContentSection title={VolumeProfileBySessionPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref={this.myRef}>
							{(type) => (<VolumeProfileBySessionChart data={this.props.lotsOfData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/VOLUME-PROFILE-BY-SESSION.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

VolumeProfileBySessionPage.title = "Volume profile by Session";

export default VolumeProfileBySessionPage;
