const questions = [
    {
        text: "Les joueurs du Stade Lamballais étaient obligés de porter des crampons trop petits pour eux.",
        answer: "VRAI",
        explanation: "Ils avaient instauré cette règle pour « mieux ressentir le ballon ». D’après Ivan Le Drogoff, ancien défenseur au Stade Lamballais, « si tu n’avais pas de panaris au pied après deux semaines, c’est que tu avais triché ! »."
    },
    {
        text: "Lors de la saison 1975-1976, les joueurs du Stade Lamballais retournaient leur maillot pour cacher leurs sponsors.",
        answer: "VRAI",
        explanation: "Tous les joueurs du MFP refusaient d’être des « hommes sandwichs », coincés entre des sponsors à l’avant et à l’arrière des maillots."
    },
    {
        text: "Les joueurs du MFP refusaient de jouer contre les clubs affiliés à des partis politiques de droite.",
        answer: "FAUX",
        explanation: "Le MFP n’a jamais refusé de jouer des matchs pour des raisons politiques. À l’inverse, ils étaient régulièrement traités de communistes en raison de leur affinité avec le Parti communiste."
    },
    {
        text: " Alain Séradin, défenseur du Stade Lamballais dans les années 1970, n’avait pas de sac de sport, mais … un panier en osier.",
        answer: "VRAI",
        explanation: "Pour lui, c’était une manière de pousser à son paroxysme la transgression des règles établies dans le football. Encore aujourd’hui, Alain Séradin se déplace au stade avec son panier en osier."
    },
    {
        text: "Just Fontaine, meilleur buteur de l’histoire sur une édition de Coupe du monde (13 buts, en 1958), était proche des idées du MFP.",
        answer: "VRAI",
        explanation: "Les anciens de Lamballe racontent encore leur rencontre avec la star française. Après un match d’Anderlecht, ils se sont retrouvés à l’Hôtel des colonies, à Bruxelles, pour discuter de leur vision commune du football."
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
        document.getElementById("quiz").innerHTML = "<p>Quizz terminé. Merci d’avoir participé !</p>";
    }
}

window.onload = showQuestion;
