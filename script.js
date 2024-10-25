const userInput = document.getElementById("input1"); 
const userInput2 = document.getElementById("input2");
// Boutons
const userButton = document.getElementById("btn1");
const userButton2 = document.getElementById("btn2");
// Listes pour ajouter les éléments
const incomeList = document.getElementById("income-list");
const expenseList = document.getElementById("expenses-list");

let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    const description = userInput.value;
    const amount = parseFloat(userInput2.value);

    if (description && amount && amount > 0 ) {
        totalIncome += amount;
        document.getElementById("p1").innerHTML = `$${totalIncome.toFixed(2)}`;
        
        const li = document.createElement("li");
        li.innerHTML = `<span>${description}</span> <span>$${amount.toFixed(2)}</span> 
        <button class="rubbish"><i class="fa-solid fa-trash-can"></i></button>`;
        incomeList.appendChild(li);

        userInput.value = "";
        userInput2.value = "";
        
        // Suppression d'un revenu
        const rubbish = li.querySelector(".rubbish");
        rubbish.addEventListener("click", function() {
            totalIncome -= amount;
            document.getElementById("p1").innerHTML = `$${totalIncome.toFixed(2)}`;
            reset();
            li.remove();
        });
        
        reset();
    } else {
        alert("Veuillez entrer une description et un montant.");
    }
}

function addExpense() {
    const description = userInput.value;
    const amount = parseFloat(userInput2.value);

    if (description && amount && amount > 0) {
        totalExpense += amount;
        document.getElementById("p3").innerHTML = `$${totalExpense.toFixed(2)}`;
        
        const li = document.createElement("li");
        li.innerHTML = `<span>${description}</span> <span>$${amount.toFixed(2)}</span>
        <button class="rubbish"><i class="fa-solid fa-trash-can"></i></button>`;
        expenseList.appendChild(li);

        userInput.value = "";
        userInput2.value = "";

        // Suppression d'une dépense
        const rubbish = li.querySelector(".rubbish");
        rubbish.addEventListener("click", function() {
            totalExpense -= amount;
            document.getElementById("p3").innerHTML = `$${totalExpense.toFixed(2)}`;
            reset();
            li.remove();
        });
        
        reset();
    } else {
        alert("Veuillez entrer une description et un montant.");
    }
}

function reset() {
    const available = totalIncome - totalExpense;
    document.getElementById("p2").innerHTML = `$${available.toFixed(2)}`;
}

// Écouteurs d'événements pour les boutons
userButton.addEventListener("click", addIncome);
userButton2.addEventListener("click", addExpense);

