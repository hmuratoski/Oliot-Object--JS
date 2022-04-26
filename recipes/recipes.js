// Luo array-muuttuja, johon tehdään reseptit
let recipes = [
    {
        name: "Carbonara Pasta",
        cookingTime: 30,
        ingredients: [
            'ham',
            'pasta'
        ]
    },
    {
        name: "Bougatsa",
        cookingTime: 10,
        ingredients: [
            'flour',
            'water'
        ]
    },
    {
        name: "Lasagne",
        cookingTime: 30,
        ingredients: [
            'minced meat',
            'lasagne pasta',
            'tomato sauce',
            'bechamel sauce'
            
        ]
    }
];
//Hae tulostuselementti muuttujaan
let element = document.getElementById("printHere");
// for plus foreach loop
let html = "<table><tr><th>Name</th><th>Cooking Time</th><th>Ingredients</th></tr>";
recipes.forEach(recipe => {
    html += "<tr>";
    html += "<td>" + recipe.name + "</td>";
    html += "<td>" + recipe.cookingTime + "</td>";
    html += "<td>" + recipe.ingredients + "</td>";
    html += "</tr>";
});
html += "</table>";
element.innerHTML = html;

/**ANOTHER WAY
// Luo uusi table-elementti
let table = document.createElement('table');
// Looppaa array läpi
for ( let i = 0; i < recipes.length; i++ ) {
    // Luo uusi tr-elementti
    let tr = document.createElement('tr');
    // Luo uusi td-elementti
    let td = document.createElement('td');
    // Laita reseptin nimi solulle
    td.innerHTML = recipes[i].name;
    // Lisää td trlle
    tr.appendChild(td);
    // Lisää tr tablelle
    table.appendChild(tr);
}
// Lisää table domiin
element.appendChild(table);
**/