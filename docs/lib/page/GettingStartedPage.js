import React from "react";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js";

class GettingStartedPage extends React.Component {
	render() {
		return (
			<ContentSection title={GettingStartedPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/GETTING-STARTED.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

GettingStartedPage.title = "Getting Started";

export default GettingStartedPage;
