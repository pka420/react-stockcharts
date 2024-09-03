export * from './withDeviceRatio';
export * from './withSize';

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

export function hexToRGBA(inputHex: any, opacity: any) {
  const hex = inputHex.replace('#', '');
  if (inputHex.indexOf('#') > -1 && (hex.length === 3 || hex.length === 6)) {
    const multiplier = hex.length === 3 ? 1 : 2;

    const r = parseInt(hex.substring(0, 1 * multiplier), 16);
    const g = parseInt(hex.substring(1 * multiplier, 2 * multiplier), 16);
    const b = parseInt(hex.substring(2 * multiplier, 3 * multiplier), 16);

    const result = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    return result;
  }
  return inputHex;
}

interface ColorStop {
  stop: number; // value between 0 and 1
  color: string;
}

interface ChartConfig {
  height: number;
}

interface MoreProps {
  chartConfig: ChartConfig;
}

export function createVerticalLinearGradient(stops: ColorStop[]) {
  return function (moreProps: MoreProps, ctx: CanvasRenderingContext2D): CanvasGradient {
    const {
      chartConfig: { height },
    } = moreProps;

    const grd = ctx.createLinearGradient(0, height, 0, 0);
    stops.forEach(each => {
      grd.addColorStop(each.stop, each.color);
    });

    return grd;
  };
}
