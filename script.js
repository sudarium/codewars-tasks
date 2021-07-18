function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0)
        return firstAttacker;
    else if (fighter1.health <= 0)
        return fighter2.name;
    else
        return fighter1.name;
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    };
}
console.log(declareWinner(new Fighter("Vasya", 10, 2), new Fighter("Yura", 15, 4), "Yura"));
console.log(declareWinner(new Fighter("Katya", 10, 2), new Fighter("Sveta", 5, 4), "Sveta"));
console.log(declareWinner(new Fighter("Bruce_Lee", 10, 2), new Fighter("Van_Damm", 5, 4), "Bruce_Lee"))