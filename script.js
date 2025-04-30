
const questions = [
    {
        text: "Les joueurs du Stade Lamballais étaient obligés de porter des crampons trop petits pour eux.",
        answer: "VRAI",
        explanation: "Ils avaient instauré cette règle pour « mieux ressentir le ballon »..."
    },
    {
        text: "Lors de la saison 1975-1976, les joueurs du Stade Lamballais retournaient leur maillot pour cacher leurs sponsors.",
        answer: "VRAI",
        explanation: "Les joueurs refusaient d’être des « hommes sandwichs »..."
    },
    {
        text: "Les joueurs du MFP refusaient de jouer contre les clubs affiliés à des partis politiques de droite.",
        answer: "FAUX",
        explanation: "Le MFP n’a jamais refusé de jouer des matchs pour des raisons politiques."
    },
    {
        text: "Alain Séradin n’avait pas de sac de sport, mais un panier en osier.",
        answer: "VRAI",
        explanation: "Encore aujourd’hui, Alain Séradin se déplace au stade avec son panier en osier."
    },
    {
        text: "Just Fontaine était proche des idées du MFP.",
        answer: "VRAI",
        explanation: "Après un match d’Anderlecht, ils ont discuté de leur vision commune du football."
    }
];

let current = 0;

function showQuestion() {
    document.getElementById("question").textContent = questions[current].text;
    document.getElementById("explanation").textContent = "";
    document.getElementById("next").style.display = "none";
}

function answer(choice) {
    const q = questions[current];
    if (choice === q.answer) {
        document.getElementById("explanation").textContent = "Bonne réponse ! " + q.explanation;
    } else {
        document.getElementById("explanation").textContent = "Mauvaise réponse. " + q.explanation;
    }
    document.getElementById("next").style.display = "inline-block";
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "<p>Quiz terminé. Merci d’avoir participé !</p>";
    }
}

window.onload = showQuestion;
