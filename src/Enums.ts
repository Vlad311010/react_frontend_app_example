enum ClassColor {
    Saber = "#0352fc",
    Archer = "#fc030f",
    Caster = "#6b02a8",
    Berserk = "#4f2c01"
}

export function ClassNameToColor(className) {
    switch (className) {
        case "Saber":
            return ClassColor.Saber;
        case "Archer":
            return ClassColor.Archer;
        case "Caster":
            return ClassColor.Caster;
        case "Berserk":
            return ClassColor.Berserk;
        default:
            return "ffffff";
    }
}