type Mods = Record<string, boolean | string>;

export function classNames(
  mainCls: string,
  mods: Mods = {},
  arrCls: string[] = [],
): string {
  return [
    mainCls,
    ...arrCls,
    ...Object.entries(mods)
      .filter(([className, bool]) => Boolean(bool))
      .map((cortageEl) => cortageEl[0]),
  ].join(' ');
}
