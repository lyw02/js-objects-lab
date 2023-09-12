const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        { owner : "Pat Smith", address : "1 Main Street" }, 
        { owner : "Sheila Dwyer", address : "2 High Street" }
    ],
    type : 'Toyota Corolla 1.8',
    registration : '201WD1058'
};

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