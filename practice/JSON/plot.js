d3.json("samples.json").then(function(data){
    console.log("hello!  Welcome to my json data.");
    console.log(data);
});

d3.json("samples.json").then(function(data){
    let firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': ' + value);});

});
