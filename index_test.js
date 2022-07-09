var expect = chai.expect;

describe(MyFunctions, function() {
    describe('#updateScore', function() {
        it('should print the updated scores to the console.', function() {
            var x =updateScore();
            expect(x).to.equal(`
                Player 1 Score: ${p1Score}
                Player 2 Score: ${p2Score}
                `);
        });
    });
});