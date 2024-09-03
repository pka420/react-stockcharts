export { ChartCanvas, ChartCanvasContext } from './ChartCanvas';
export * from './Chart';
export * from './GenericChartComponent';
export * from './GenericComponent';
export * from './MoreProps';
export * from './utils';
export * from './zoom';
import { head } from './utils';

type IterateeFunction<T> = (item: T) => [string | number | symbol, any];

export function toObject<T>(
  array: T[],
  iteratee: IterateeFunction<T> = (item: T): [string, T] => [String(item), item],
): Record<string | number | symbol, any> {
  return array.reduce(
    (returnObj, a) => {
      const [key, value] = iteratee(a);
      return {
        ...returnObj,
        [key]: value,
      };
    },
    {} as Record<string | number | symbol, any>,
  );
}

import { ScaleContinuousNumeric } from 'd3-scale';
import { DefaultPlotData, TimeInterval, XAccessor } from './types';

interface Props {
  widthRatio: number;
}

interface MoreProps {
  xScale: ScaleContinuousNumeric<number, number>;
  xAccessor: XAccessor;
  plotData: DefaultPlotData[];
}

export function timeIntervalBarWidth(interval: TimeInterval) {
  return function (props: Props, moreProps: MoreProps): number {
    const { widthRatio } = props;
    const { xScale, xAccessor, plotData } = moreProps;

    const first = xAccessor(head(plotData));
    return Math.abs(xScale(interval.offset(first, 1)) - xScale(first)) * widthRatio;
  };
}
