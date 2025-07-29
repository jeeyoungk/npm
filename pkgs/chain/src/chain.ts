export type Next<I, O> = (input: I) => O

export type Middleware<I1, O1, Args extends unknown[], I2 = I1, O2 = O1> = (
  input: I2,
  next: (input: I1) => O1,
  ...args: Args
) => O2;

export function chain<I, O>(fn: Next<I, O>): Chain<I, O> {
  return new Chain(fn)
}

export class Chain<I, O> {
  private readonly fn: Next<I, O>
  constructor(fn: Next<I, O>) {
    this.fn = fn
  }

  with<Args extends unknown[] = [], In2 = I, Out2 = O>(
    middleware: Middleware<I, O, Args, In2, Out2>,
    ...args: Args
  ): Chain<In2, Out2> {
    return new Chain((input: In2) => middleware(input, this.fn, ...args));
  }

  named(name: string): (input: I) => O {
    const obj = { [name]: (...args: Parameters<typeof this.fn>) => this.fn(...args) };
    const f = obj[name] as typeof this.fn & { displayName: string };
    f.displayName = name;
    return f;
  }
}

export function withDefaultOnError<I, O>(input: I, fn: Next<I, O>, defaultValue: O): O {
  try {
    return fn(input)
  } catch (error) {
    return defaultValue
  }
}