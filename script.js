// Simule la connexion de l'utilisateur
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Vérification simple pour simuler la connexion
    if (username === "user" && password === "password") {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('dashboard').classList.add('logged-in'); // Affiche le message défilant
        return false;
    } else {
        document.getElementById('error-message').innerText = "Nom d'utilisateur ou mot de passe incorrect.";
        return false;
    }
}

function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('dashboard').classList.remove('logged-in'); // Masque le message défilant lors de la déconnexion
}

// Mise à jour de la date et de l'heure en bas à gauche
function updateDateTime() {
    var currentDateTime = new Date();
    var hours = currentDateTime.getHours().toString().padStart(2, '0');
    var minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentDateTime.getSeconds().toString().padStart(2, '0');
    var date = currentDateTime.toLocaleDateString();

    document.getElementById('currentDateTime').innerHTML = `${date} ${hours}:${minutes}:${seconds}`;
}

// Actualisation de l'heure toutes les secondes
setInterval(updateDateTime, 1000);
