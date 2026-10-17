import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:2',
  releaseNotes: {
    en_US: `- When mining cannot start, the Mining health check reports why once per start.
- Restarting EloPool while it is still starting stops every process of the previous run.`,
    es_ES: `- Cuando la minería no puede iniciarse, la comprobación de estado Minería indica el motivo una vez por inicio.
- Reiniciar EloPool mientras aún se está iniciando detiene todos los procesos de la ejecución anterior.`,
    de_DE: `- Wenn das Mining nicht starten kann, nennt die Statusprüfung Mining den Grund einmal pro Start.
- Ein Neustart von EloPool, während es noch startet, beendet alle Prozesse des vorherigen Laufs.`,
    pl_PL: `- Gdy kopanie nie może się rozpocząć, kontrola stanu Kopanie podaje przyczynę raz przy każdym uruchomieniu.
- Ponowne uruchomienie EloPool w trakcie uruchamiania zatrzymuje wszystkie procesy poprzedniego uruchomienia.`,
    fr_FR: `- Lorsque le minage ne peut pas démarrer, la vérification d'état Minage en indique la raison une fois par démarrage.
- Redémarrer EloPool pendant son démarrage arrête tous les processus de l'exécution précédente.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
