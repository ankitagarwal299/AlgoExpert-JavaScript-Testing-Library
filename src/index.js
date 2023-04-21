function describe(testSuiteName, func) {
  // Write your code here.
  console.log(`beginning test suite ${testSuiteName}`);

  try {
    func();
    console.log(`successfully completed test suite ${testSuiteName}`);
  } catch (error) {
    const { testCaseName, errorMessage } = error;
    console.error(
      `failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${errorMessage}`
    );
  }
}

function it(testCaseName, func) {
  // Write your code here.
  console.log(`beginning test case ${testCaseName}`);

  try {
    func();
    console.log(`successfully completed test case ${testCaseName}`);
  } catch (errorMessage) {
    throw { testCaseName, errorMessage };
  }
}

function expect(actual) {
  // Write your code here.
  return new ExpectFunctions(actual);
}

class ExpectFunctions {
  constructor(actual) {
    this.actual = actual;
  }

  toExist() {
    if (this.actual == null) {
      throw `expected value to exist but got ${JSON.stringify(this.actual)}`;
    }
  }

  toBe(expected) {
    if (this.actual !== expected) {
      throw `expected ${JSON.stringify(this.actual)} to be ${JSON.stringify(
        expected
      )}`;
    }
  }

  toBeType(type) {
    if (typeof this.actual !== type) {
      throw `expected ${JSON.stringify(
        this.actual
      )} to be of type ${type} but got ${typeof this.actual}`;
    }
  }
}

describe("Passing Test Suite", () => {
  it("Passing Test Case1", () => {
    let values = ["1", 2, null, undefined, () => {}, {}, []];
    for (const value of values) {
      //expect(value).toBe(value);
    }

    //expect([{},[],()=>{}]).toBe([{},[],()=>{}]);Not Equal
    const fn = () => {};
    expect(fn).toBe(fn);
  });
});

/*

I am confused as of why it is able to compare values with it 
{} == {} NOT equal understood

[{},[],()=>{}] == [{},[],()=>{}] Not Equal ?

for(const value of values){
      expect(value).toBe(value); after iterating now it is equal, Why?
  }
*/
