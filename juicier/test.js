class Demo {
  async start() {
    console.log("start");
    let res = await this.asyncFunction();
    console.log(res);
  }

  asyncFunction() {
    return new Promise(resolve => {
      setTimeout(() => resolve("end"), 1000);
    });
  }
}

let demo = new Demo();
demo.start();
