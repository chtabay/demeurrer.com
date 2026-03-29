import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { meta, cycleKeys, cycleLabels } from "./meta.mjs";
import { roles as rDirection } from "./roles/direction.mjs";
import { roles as rGestionnaire } from "./roles/gestionnaire.mjs";
import { roles as rCommercial } from "./roles/commercial.mjs";
import { roles as rCompta } from "./roles/compta.mjs";
import { roles as rJuridique } from "./roles/juridique.mjs";
import { roles as rTechnique } from "./roles/technique.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "grille-metiers-data.json");

const roles = [
  ...rDirection,
  ...rGestionnaire,
  ...rCommercial,
  ...rCompta,
  ...rJuridique,
  ...rTechnique,
];

const payload = { meta, cycleKeys, cycleLabels, roles };
writeFileSync(out, JSON.stringify(payload, null, 2), "utf8");
console.log("Written", out, "roles:", roles.length);
