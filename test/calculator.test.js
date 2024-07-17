// test/calculator.test.js

(async () => {
    const { expect } = await import('chai');
    const { add, subtract, multiply, divide } = await import('../calculator.js');
  
    describe('Calculator', function() {
        describe('add', function() {
            it('should add two numbers correctly', function() {
                expect(add(2, 3)).to.equal(5);
                expect(add(-2, -3)).to.equal(-5);
                expect(add(-2, 3)).to.equal(1);
            });
        });
  
        describe('subtract', function() {
            it('should subtract two numbers correctly', function() {
                expect(subtract(5, 3)).to.equal(2);
                expect(subtract(-5, -3)).to.equal(-2);
                expect(subtract(-5, 3)).to.equal(-8);
            });
        });
  
        describe('multiply', function() {
            it('should multiply two numbers correctly', function() {
                expect(multiply(2, 3)).to.equal(6);
                expect(multiply(-2, -3)).to.equal(6);
                expect(multiply(-2, 3)).to.equal(-6);
            });
        });
  
        describe('divide', function() {
            it('should divide two numbers correctly', function() {
                expect(divide(6, 3)).to.equal(2);
                expect(divide(-6, -3)).to.equal(2);
                expect(divide(-6, 3)).to.equal(-2);
            });
  
            it('should throw an error when dividing by zero', function() {
                expect(() => divide(6, 0)).to.throw('Division by zero is not allowed.');
            });
        });
    });
  })();
  