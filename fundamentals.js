const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        { owner : "Pat Smith", address : "1 Main Street" }, 
        { owner : "Sheila Dwyer", address : "2 High Street" }
    ],
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : 1.8
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration: { year: 201, county: "WD", number: 1058 }
};

console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log("Reg. = " + aCar.registration.year + "-" + aCar.registration.county + "-" + aCar.registration.number);

aCar.mileage = 10000
aCar.colour = {
    exteriorColour : "red",
    interiorFabric : {
        texture : "leather",
        shade : "cream"
    }
}

console.log(aCar.owner);

console.log('First owner : ' + `${aCar.previous_owners[0].owner} - ${aCar.previous_owners[0].address}`);

for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

for (let i = 0; i < aCar.previous_owners.length; i += 1) {
    console.log(aCar.previous_owners[i].owner);
}