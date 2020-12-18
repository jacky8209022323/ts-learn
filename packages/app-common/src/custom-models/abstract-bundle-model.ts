export abstract class AbstractBundleModel<T extends AbstractBundleModel<T>> {
  [key: string]: any;
  from(source: any): this {
    Object.keys(source).forEach(k => this[k] = source[k]);
    return this;
  }

  abstract checkRequired(): T
}