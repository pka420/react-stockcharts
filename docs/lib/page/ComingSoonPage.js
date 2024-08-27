import React from "react";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js";

class ComingSoonPage extends React.Component {
	render() {
		return (
			<ContentSection title={ComingSoonPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/COMING-SOON.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

ComingSoonPage.title = "Coming soon";

export default ComingSoonPage;
