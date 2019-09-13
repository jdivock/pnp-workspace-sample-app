import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';

// eslint-disable-next-line
import {toPromise} from 'rxjs/operators';
import {fibonacci, fibonacciObservable} from '../fibonacci';

describe(`fibonacci`, () => {
  it(`should work for negative values`, () => {
    expect(fibonacci(-10)).toEqual(-55);
    expect(fibonacci(-9)).toEqual(34);
    expect(fibonacci(-8)).toEqual(-21);
    expect(fibonacci(-7)).toEqual(13);
    expect(fibonacci(-6)).toEqual(-8);
    expect(fibonacci(-5)).toEqual(5);
    expect(fibonacci(-4)).toEqual(-3);
    expect(fibonacci(-3)).toEqual(2);
    expect(fibonacci(-2)).toEqual(-1);
    expect(fibonacci(-1)).toEqual(1);
  });

  it(`should work for zero values`, () => {
    expect(fibonacci(-0)).toEqual(0);
    expect(fibonacci(+0)).toEqual(0);
  });

  it(`should work for positive values`, () => {
    expect(fibonacci(+1)).toEqual(1);
    expect(fibonacci(+2)).toEqual(1);
    expect(fibonacci(+5)).toEqual(5);
    expect(fibonacci(+10)).toEqual(55);
  });

  it(`should return -Infinity for -Infinity`, () => {
    expect(fibonacci(-Infinity)).toEqual(-Infinity);
  });

  it(`should return +Infinity for +Infinity`, () => {
    expect(fibonacci(+Infinity)).toEqual(+Infinity);
  });
});

describe(`fibonacciObservable`, () => {
  it(`should return the initial term as first value`, async () => {
    await expect(
      fibonacciObservable(10)
        .take(1)
        .toPromise(),
    ).resolves.toEqual(55);
  });

  it(`should work with multiple terms`, async () => {
    await expect(
      fibonacciObservable(1)
        .take(6)
        .toArray()
        .toPromise(),
    ).resolves.toEqual([1, 1, 2, 3, 5, 8]);
  });
});
