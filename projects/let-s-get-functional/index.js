// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { filter, reduce } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./seve-monahan.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.filter(array, (object) => object.gender === "male").length;
};

var femaleCount = function(array){
    var counter = function(number, object) {
        return object.gender === "female" ? ++number : number ;
    }

    return _.reduce(array, counter, 0);
}

var oldestCustomer = function(array){
    var findOldest = function(accumulator, current){
        if(current.age > accumulator.age){
            accumulator = current;
        }

        return accumulator;
    }

    var customer = _.reduce(array, findOldest);

    return customer.name;
};

var youngestCustomer = function(array){
    var findYoungest = function(accumulator, current){
        if(current.age < accumulator.age){
            accumulator = current;
        }

        return accumulator;
    }

    var customer = _.reduce(array, findYoungest);

    return customer.name;
};


var averageBalance = function(array){
    var startCondition = {
        totalBalance: 0,
        totalCustomers: 0
    }

    var findTotalBalancePlusCustomerNumber = function(accumulator, current){
        accumulator.totalCustomers++;
        var customerBalanceString = current.balance.slice(1);
        customerBalanceString = customerBalanceString.replace(',', '');
        accumulator.totalBalance += parseFloat(customerBalanceString);

        return accumulator;
    }

    var balanceCondition = _.reduce(array, findTotalBalancePlusCustomerNumber, startCondition);

    return (balanceCondition.totalBalance/balanceCondition.totalCustomers);
};

var firstLetterCount = function(array, letter){

    var startsWithLetter = (object) => object.name[0].toUpperCase() === letter.toUpperCase();
    return (_.filter(array, startsWithLetter)).length;
};

var friendFirstLetterCount = function(array, customer, letter){
    var customerObject = _.reduce(array, (a,o) => o.name === customer ? o : a);

    return firstLetterCount(customerObject.friends, letter);
};

var friendsCount = function(array, name){

    var nameMatchesSoughtName = function(friendObject){
        //console.log(friendObject);
        var result = friendObject.name === name;
        //console.log (result);
        return result;
    }

    var friendsObjectContainsName = function(o){
        var filteredList = _.filter(o.friends, nameMatchesSoughtName);
        return filteredList.length > 0;
    };

    var accumulate = function(a, o){
        if (friendsObjectContainsName(o)){
            a.push(o.name);
        }

        return a;
    }

    var friendsObjects = _.reduce(array, accumulate, []);

    //console.log(friendsObjects);

    return friendsObjects;
}

var topThreeTags = function(array){
    function countTags(acc, object){
        var tags = object.tags;

        _.forEach(tags, (tag) => {
                if (tag in acc){
                     acc[tag]++;
                }else{
                      acc[tag] = 1;
                }
        });

        return acc;
    }
    var tagNumbers = _.reduce(array, countTags, {});
    console.log(tagNumbers);

    var numsArray = [];
    for(var key in tagNumbers){
        numsArray.push(tagNumbers[key]);
    }
    var newNumsArray = (numsArray.sort().reverse()).slice(0,3);
    console.log(newNumsArray);

    var results = [];
    for(var key2 in tagNumbers){
            if(newNumsArray.includes(tagNumbers[key2])){
                results.push(key2);
            }
    }

    return results;
};
topThreeTags(customers);

var genderCount = function(array){
    function countGenders(acc, object){
        var gender = object.gender;

        if (gender in acc){
            acc[gender]++;
        }else{
            acc[gender] = 1;
        }

        return acc;
    }
    return _.reduce(array, countGenders, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
