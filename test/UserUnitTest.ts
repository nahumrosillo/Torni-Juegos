module CalculationsTests {
    export class SimpleMathTests extends tsUnit.TestClass {

        private target = new Calculations.SimpleMath();

        addTwoNumbersWith1And2Expect3() {
            var result = this.target.addTwoNumbers(1, 2);

            this.areIdentical(3, result);
        }

        addTwoNumbersWith3And2Expect5() {
            var result = this.target.addTwoNumbers(3, 2);

            this.areIdentical(4, result); // Deliberate error
        }
    }
}
