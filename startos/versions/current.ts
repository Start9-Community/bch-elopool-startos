import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.3.0:3',
  releaseNotes: {
    en_US: `- EloPool no longer has access to its node’s data volume: it reads only the network and RPC login the node publishes for its dependents, and follows a change to either at once.
- While its node is not installed or is older than Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 or Flowee the Hub 2026.5.2:19, EloPool does not start and says so; it starts by itself once the node is updated. Update your node first.
- The dashboard no longer publishes raw share-log entries or the node’s full RPC replies, and the share logs no longer grow without limit.`,
    es_ES: `- EloPool ya no tiene acceso al volumen de datos de su nodo: solo lee la red y el inicio de sesión RPC que el nodo publica para sus dependientes, y sigue al instante cualquier cambio en ellos.
- Mientras su nodo no esté instalado o sea anterior a Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 o Flowee the Hub 2026.5.2:19, EloPool no se inicia y lo indica; se inicia solo en cuanto el nodo se actualiza. Actualice primero su nodo.
- El panel ya no publica entradas sin procesar del registro de shares ni las respuestas RPC completas del nodo, y los registros de shares ya no crecen sin límite.`,
    de_DE: `- EloPool hat keinen Zugriff mehr auf das Datenvolume seines Knotens: Es liest nur das Netzwerk und die RPC-Anmeldung, die der Knoten für abhängige Dienste veröffentlicht, und folgt einer Änderung daran sofort.
- Solange sein Knoten nicht installiert oder älter als Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 oder Flowee the Hub 2026.5.2:19 ist, startet EloPool nicht und meldet das; sobald der Knoten aktualisiert ist, startet es von selbst. Aktualisieren Sie zuerst Ihren Knoten.
- Das Dashboard veröffentlicht keine rohen Share-Log-Einträge und keine vollständigen RPC-Antworten des Knotens mehr, und die Share-Logs wachsen nicht mehr unbegrenzt.`,
    pl_PL: `- EloPool nie ma już dostępu do woluminu danych swojego węzła: odczytuje tylko sieć i dane logowania RPC, które węzeł publikuje dla usług zależnych, i od razu podąża za ich zmianą.
- Dopóki jego węzeł nie jest zainstalowany lub jest starszy niż Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 lub Flowee the Hub 2026.5.2:19, EloPool nie uruchamia się i o tym informuje; uruchamia się sam po aktualizacji węzła. Najpierw zaktualizuj węzeł.
- Panel nie publikuje już surowych wpisów dziennika udziałów ani pełnych odpowiedzi RPC węzła, a dzienniki udziałów nie rosną już bez ograniczeń.`,
    fr_FR: `- EloPool n’a plus accès au volume de données de son nœud : il lit seulement le réseau et l’identifiant RPC que le nœud publie pour ses dépendants, et suit aussitôt tout changement de l’un ou de l’autre.
- Tant que son nœud n’est pas installé ou est antérieur à Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 ou Flowee the Hub 2026.5.2:19, EloPool ne démarre pas et l’indique ; il démarre de lui-même une fois le nœud mis à jour. Mettez d’abord votre nœud à jour.
- Le tableau de bord ne publie plus d’entrées brutes du journal des shares ni les réponses RPC complètes du nœud, et les journaux de shares ne grossissent plus sans limite.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
