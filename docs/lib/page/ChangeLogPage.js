import React from "react";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import Markdown from "lib/Markdown.js"

class ChangeLogPage extends React.Component {
	render() {
		return (
			<ContentSection title={ChangeLogPage.title}>
				<Row>
					<Section colSpan={2}>
						<Markdown md_file="md/CHANGE-LOG.md" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
}

ChangeLogPage.title = "Change log";

export default ChangeLogPage;
