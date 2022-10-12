// trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };

// layout = {
//     title: "Drinks Ordered",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percent Ordered"}
// };

// Plotly.newPlot("plotDrinks", [trace], layout);

// trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };

// layout = {
//     title: "Drinks Ordered"
// };

// Plotly.newPlot("plotDrinks", [trace], layout);


trace = {
    x: [13, 22, 22, 14, 21, 9, 11, 32],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: "markers",
    type: "scatter"
};

layout = {
    title: "Scatter Plot",
    xaxis: {title: "x-numbers"},
    yaxis: {title: "y-numbers"}
};

Plotly.newPlot("plotScatter", [trace], layout);