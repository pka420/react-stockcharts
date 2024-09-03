export * from './Annotate';
export * from './BarAnnotation';
export * from './LabelAnnotation';
export * from './SvgPathAnnotation';
export * from './Label';

interface PathParams {
  x: number;
  y: number;
}

const halfWidth = 10; // Example value, adjust as needed
const bottomWidth = 20; // Example value, adjust as needed
const height = 30; // Example value, adjust as needed

export function buyPath({ x, y }: PathParams): string {
  return (
    `M${x} ${y} ` +
    `L${x + halfWidth} ${y + halfWidth} ` +
    `L${x + bottomWidth} ${y + halfWidth} ` +
    `L${x + bottomWidth} ${y + height} ` +
    `L${x - bottomWidth} ${y + height} ` +
    `L${x - bottomWidth} ${y + halfWidth} ` +
    `L${x - halfWidth} ${y + halfWidth} ` +
    'Z'
  );
}

export function sellPath({ x, y }: PathParams): string {
  return (
    `M${x} ${y} ` +
    `L${x + halfWidth} ${y - halfWidth} ` +
    `L${x + bottomWidth} ${y - halfWidth} ` +
    `L${x + bottomWidth} ${y - height} ` +
    `L${x - bottomWidth} ${y - height} ` +
    `L${x - bottomWidth} ${y - halfWidth} ` +
    `L${x - halfWidth} ${y - halfWidth} ` +
    'Z'
  );
}
