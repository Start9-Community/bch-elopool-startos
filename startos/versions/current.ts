import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:1',
  releaseNotes: {
    en_US:
      '- Requires Bitcoin Cash Node 29.0.0:11 or later.\n- Select Node Backend preselects no node until you have chosen one, and its description says what each node needs.',
    es_ES:
      '- Requiere Bitcoin Cash Node 29.0.0:11 o posterior.\n- «Seleccionar nodo» no preselecciona ningún nodo hasta que usted haya elegido uno, y su descripción indica lo que necesita cada nodo.',
    de_DE:
      '- Erfordert Bitcoin Cash Node 29.0.0:11 oder neuer.\n- „Knoten auswählen“ wählt keinen Knoten vor, bis Sie einen gewählt haben, und seine Beschreibung nennt, was jeder Knoten braucht.',
    pl_PL:
      '- Wymaga Bitcoin Cash Node 29.0.0:11 lub nowszego.\n- Akcja „Wybierz węzeł” nie zaznacza wstępnie żadnego węzła, dopóki go nie wybierzesz, a jego opis podaje, czego potrzebuje każdy węzeł.',
    fr_FR:
      "- Nécessite Bitcoin Cash Node 29.0.0:11 ou ultérieur.\n- « Sélectionner le nœud » ne présélectionne aucun nœud tant que vous n'en avez pas choisi un, et sa description indique ce dont chaque nœud a besoin.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
