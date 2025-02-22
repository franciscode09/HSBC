let isLoggedIn = false;
let accountName = "Utilisateur";
let balance = 1000; // Solde initial

// Informations personnelles
let firstName = "Jean";
let lastName = "Dupont";
let birthDate = "01/01/1990";
let gender = "Masculin";
let city = "Paris";
let nationality = "Française";

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "Veuillez remplir tous les champs.";
        return false;
    }

    if (username === "user" && password === "1234") {
        isLoggedIn = true;
        accountName = username;
        showDashboard();
        return false;
    } else {
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
        return false;
    }
}

function showDashboard() {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('accountName').textContent = accountName;
    document.getElementById('balance').textContent = `${balance} €`;

    // Affichage des informations personnelles
    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName;
    document.getElementById('birthDate').textContent = birthDate;
    document.getElementById('gender').textContent = gender;
    document.getElementById('city').textContent = city;
    document.getElementById('nationality').textContent = nationality;

    document.getElementById('accountNumber').textContent = "1234567890";
    document.getElementById('rib').textContent = "FR76 1234 5678 9876 5432 1234 567";

    updateDateTime();
    setInterval(updateDateTime, 1000); // Mettre à jour chaque seconde
}

function logout() {
    isLoggedIn = false;
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    const now = new Date();

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    dateTimeElement.textContent = currentDateTime;
}

function showTransferForm() {
    document.getElementById('transfer').classList.remove('hidden');
}

function handleTransfer() {
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const transferMessage = document.getElementById('transfer-message');

    // Vérification des champs
    if (!recipient || !amount || amount <= 0) {
        transferMessage.textContent = "Veuillez entrer un destinataire et un montant valide.";
        return false;
    }

    // Vérification du solde
    if (amount > balance) {
        transferMessage.textContent = "Solde insuffisant pour effectuer ce virement.";
        return false;
    }

    // Effectuer le virement
    balance -= amount;
    document.getElementById('balance').textContent = `${balance} €`;
    transferMessage.textContent = `Virement de ${amount} € effectué vers ${recipient}.`;

    return false;
}
