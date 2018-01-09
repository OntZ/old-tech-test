describe("Question 1", function() {
    
    it("duplicate array works", function() {
		var input = [5,4,3,2,1];
        var result = Question1(input);
        expect(result).toEqual([5,4,3,2,1,5,4,3,2,1]);
    });
	
	it("duplicate array does not modify original array", function() {
		var input = [5,4,3,2,1];
        var result = Question1(input);
        expect(input).toEqual([5,4,3,2,1]);
    });
});

describe("Question 2", function() {
    
    it("reverse array works", function() {
		var input = [5,4,3,2,1];
        var result = Question2(input);
        expect(result).toEqual([1,2,3,4,5]);
    });
	
	it("reverse array does not modify original array", function() {
		var input = [5,4,3,2,1];
        var result = Question2(input);
        expect(input).toEqual([5,4,3,2,1]);
    });
});

describe("Question 3", function() {
    
    it("test case 1", function() {
        var result = Question3([1,3,6,2,6,3,6,7,3,1], 6);
        expect(result).toEqual(3);
    });
	
    it("test case 2", function() {
        var result = Question3([1,3,6,2,6,3,6,7,3,1], 3);
        expect(result).toEqual(3);
    });
	
    it("test case 3", function() {
        var result = Question3([1,3,6,2,6,3,6,7,3,1], "bob");
        expect(result).toEqual(0);
    });
	
});


describe("Question 4", function() {
	function createDeck() {
		var result=[];
		for (var suit in {"♠":0, "♥":0, "♦":0, "♣":0}) {
			for (var i=1; i<=13; i++) {
				var cardNumber;
				switch (i) {
					case 1: cardNumber = "A"; break;
					case 11: cardNumber = "J"; break;
					case 12: cardNumber = "Q"; break;
					case 13: cardNumber = "K"; break;
					default: cardNumber = i; break;
				}
				result.push(suit+cardNumber);
			}
		}
		return result;
	}
    
    it("order is different", function() {
		var deck = createDeck();
		var otherDeck = createDeck();
        Question4(deck);
		expect(deck.length).toEqual(otherDeck.length);
        expect(deck).not.toEqual(otherDeck);
    });
	
    it("order is random enough", function() {
		var positions = {};
		for (var i=0; i<500; i++) {
			var deck = createDeck();
			Question4(deck);
			var positionOfAceOfSpades = deck.indexOf("♠A");
			//console.log("ace found at " + positionOfAceOfSpades);
			positions[positionOfAceOfSpades] = (positions[positionOfAceOfSpades] || 0) + 1;
		}
		
		for (var i=0; i<52; i++) {
			if (!positions[i]) {
				fail("Card never appeared at position "+ i +" in the shuffled deck");
			} else {
				console.log("Card appeared at index "+i +" "+positions[i]+" times");
			}
		}	

		expect(true).toBeTruthy();
	});
	
    it("all cards are present", function() {
		var deck = createDeck();
		var otherDeck = createDeck();
        Question4(deck);
		
        expect(deck.sort()).toEqual(otherDeck.sort());
    });
	
});

describe("Question 5", function() {
    
    it("Reversing words in a string works", function() {
		var input = "the cat sat on the mat";
        var result = Question5(input);
        expect(result).toEqual("mat the on sat cat the");
    });
	
    it("Reversing words in a string works", function() {
		var input = "the name's bond james bond";
        var result = Question5(input);
        expect(result).toEqual("bond james bond name's the");
    });
});
