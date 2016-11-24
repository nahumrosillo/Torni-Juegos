// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new CalculationsTests.SimpleMathTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());
