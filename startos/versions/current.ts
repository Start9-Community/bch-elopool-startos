import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.3.0:4',
  releaseNotes: {
    en_US: `- The dashboard's Delete button hides a worker until its next share, keeps its statistics, and works only from the dashboard page itself.
- The Shared Mining and Solo Mining checks react only to problems the pool itself reports, whatever name a miner connects with.
- Share logs are kept within a fixed size.
- The dashboard runs without access to the node's RPC login.
- The Wipe Mining State warning lists everything it clears.`,
    es_ES: `- El botón Eliminar del panel oculta un minero hasta su siguiente share, conserva sus estadísticas y solo funciona desde la propia página del panel.
- Las comprobaciones Minería compartida y Minería en solitario solo reaccionan a problemas que informa el propio pool, sea cual sea el nombre con que se conecte un minero.
- Los registros de shares se mantienen dentro de un tamaño fijo.
- El panel funciona sin acceso al inicio de sesión RPC del nodo.
- La advertencia de Borrar el estado de minería enumera todo lo que borra.`,
    de_DE: `- Die Schaltfläche „Löschen“ im Dashboard blendet einen Miner bis zu seinem nächsten Share aus, behält seine Statistiken und funktioniert nur von der Dashboard-Seite selbst.
- Die Prüfungen „Geteiltes Mining“ und „Solo-Mining“ reagieren nur auf Probleme, die der Pool selbst meldet, egal mit welchem Namen sich ein Miner verbindet.
- Share-Logs bleiben innerhalb einer festen Größe.
- Das Dashboard läuft ohne Zugriff auf die RPC-Anmeldung des Knotens.
- Die Warnung von „Mining-Statistiken löschen“ nennt alles, was gelöscht wird.`,
    pl_PL: `- Przycisk Usuń w panelu ukrywa koparkę do jej następnego udziału, zachowuje jej statystyki i działa tylko z samej strony panelu.
- Kontrole „Kopanie współdzielone” i „Kopanie solo” reagują tylko na problemy zgłaszane przez sam pool, niezależnie od nazwy, z jaką łączy się koparka.
- Dzienniki udziałów mieszczą się w stałym rozmiarze.
- Panel działa bez dostępu do danych logowania RPC węzła.
- Ostrzeżenie akcji „Wyczyść stan kopania” wymienia wszystko, co jest czyszczone.`,
    fr_FR: `- Le bouton Supprimer du tableau de bord masque un mineur jusqu’à sa prochaine share, conserve ses statistiques et ne fonctionne que depuis la page du tableau de bord elle-même.
- Les vérifications « Minage partagé » et « Minage solo » ne réagissent qu’aux problèmes signalés par le pool lui-même, quel que soit le nom sous lequel un mineur se connecte.
- Les journaux de shares restent dans une taille fixe.
- Le tableau de bord fonctionne sans accès à l’identifiant RPC du nœud.
- L’avertissement de « Effacer l’état de minage » énumère tout ce qu’il efface.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
