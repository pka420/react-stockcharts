

import React, { Component } from "react";
import PropTypes from "prop-types";

import { drawOnCanvas, renderSVG } from "./EdgeCoordinateV3";
import GenericChartComponent from "../GenericChartComponent";
import { getMouseCanvas } from "../GenericComponent";

import { isNotDefined } from "../utils";

class MouseCoordinateX extends Component {
	constructor(props) {
		super(props);
		this.renderSVG = this.renderSVG.bind(this);
		this.drawOnCanvas = this.drawOnCanvas.bind(this);
	}
	drawOnCanvas(ctx, moreProps) {
		const props = helper(this.props, moreProps);
		if (isNotDefined(props)) return null;

		drawOnCanvas(ctx, props);
	}
	renderSVG(moreProps) {
		const props = helper(this.props, moreProps);
		if (isNotDefined(props)) return null;

		return renderSVG(props);
	}
	render() {
		return <GenericChartComponent
			svgDraw={this.renderSVG}
			clip={false}
			canvasDraw={this.drawOnCanvas}
			canvasToDraw={getMouseCanvas}
			drawOn={["mousemove", "pan", "drag"]}
		/>;
	}
}

MouseCoordinateX.propTypes = {
	displayFormat: PropTypes.func.isRequired,
	yAxisPad: PropTypes.number,
	rectWidth: PropTypes.number,
	rectHeight: PropTypes.number,
	orient: PropTypes.oneOf(["bottom", "top", "left", "right"]),
	at: PropTypes.oneOf(["bottom", "top", "left", "right"]),
	fill: PropTypes.string,
	opacity: PropTypes.number,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	textFill: PropTypes.string,
	snapX: PropTypes.bool
};

function customX(props, moreProps) {
	const { xScale, xAccessor, currentItem, mouseXY } = moreProps;
	const { snapX } = props;
	const x = snapX
		? xScale(xAccessor(currentItem))
		: mouseXY[0];

	const { displayXAccessor } = moreProps;
	const { displayFormat } = props;
	const coordinate = snapX
		? displayFormat(displayXAccessor(currentItem))
		: displayFormat(xScale.invert(x));
	return { x, coordinate };
}

MouseCoordinateX.defaultProps = {
	yAxisPad: 0,
	rectWidth: 80,
	rectHeight: 20,

	// rectRadius: 5,
	// stroke: "#684F1D",
	strokeOpacity: 1,
	strokeWidth: 1,

	orient: "bottom",
	at: "bottom",

	fill: "#525252",
	opacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	textFill: "#FFFFFF",
	snapX: true,
	customX: customX,
};

function helper(props, moreProps) {
	const { show, currentItem } = moreProps;
	const { chartConfig: { height } } = moreProps;

	if (isNotDefined(currentItem)) return null;

	const { customX } = props;

	const { orient, at } = props;
	const { stroke, strokeOpacity, strokeWidth } = props;
	const { rectRadius, rectWidth, rectHeight } = props;
	const { fill, opacity, fontFamily, fontSize, textFill } = props;

	const edgeAt = (at === "bottom")
		? height
		: 0;

	const {
		x,
		coordinate
	 } = customX(props, moreProps);

	const type = "vertical";
	const y1 = 0, y2 = height;
	const hideLine = true;

	const coordinateProps = {
		coordinate,
		show,
		type,
		orient,
		edgeAt,
		hideLine,
		fill, opacity, fontFamily, fontSize, textFill,
		stroke, strokeOpacity, strokeWidth,
		rectWidth,
		rectHeight,
		rectRadius,
		arrowWidth: 0,
		x1: x,
		x2: x,
		y1,
		y2
	};
	return coordinateProps;
}

export function getXCoordinate(y, displayValue, props, moreProps) {
	const { width } = moreProps;

	const { orient, at, rectWidth, rectHeight, dx } = props;
	const { fill, opacity, fontFamily, fontSize, textFill, arrowWidth } = props;
	const { stroke, strokeOpacity, strokeWidth } = props;

	const x1 = 0, x2 = width;
	const edgeAt = (at === "right")
		? width
		: 0;

	const type = "horizontal";
	const hideLine = true;

	const coordinateProps = {
		coordinate: displayValue,
		show: true,
		type,
		orient,
		edgeAt,
		hideLine,
		fill,
		opacity,

		fontFamily,
		fontSize,
		textFill,

		stroke,
		strokeOpacity,
		strokeWidth,

		rectWidth,
		rectHeight,

		arrowWidth,
		dx,
		x1,
		x2,
		y1: y,
		y2: y,
	};
	return coordinateProps;
}

export default MouseCoordinateX;
