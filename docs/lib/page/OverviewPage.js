import React from "react";
import Markdown from "lib/Markdown.js";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

class OverviewPage extends React.Component {
	render() {
		return (
			<ContentSection title={OverviewPage.title}>
				<Row>
					<Section  colSpan={2}>
						<Markdown md_file="md/OVERVIEW.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

OverviewPage.title = "Overview";

export default OverviewPage;
