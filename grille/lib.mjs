export function action(label, livrable, five) {
  if (!Array.isArray(five) || five.length !== 5) {
    throw new Error("Chaque action doit avoir exactement 5 pourquoi.");
  }
  return { label, livrable: livrable || undefined, whys: five };
}

/** @param {string} q @param {string} r */
export function PQ(q, r) {
  return { pourquoi: q, reponse: r };
}
