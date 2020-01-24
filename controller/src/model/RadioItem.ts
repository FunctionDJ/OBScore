export default abstract class RadioItem<T> {
  constructor(
    readonly code: string,
    readonly short: string,
    readonly long: string,
    readonly type: T
  ) {}
}