import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.3.0:0',
  releaseNotes: {
    en_US: `- Updates EloPool to 1.3.0. Payout and miner addresses are checked against their checksum and the node's chain, including Cash addresses entered without their prefix.
- On the solo endpoint, a miner whose username is not an address mines to your payout address, and a mistyped address is refused.
- Includes the October 2026 Node.js security fixes.`,
    es_ES: `- Actualiza EloPool a 1.3.0. Las direcciones de pago y de los mineros se comprueban contra su suma de verificación y la cadena del nodo, incluidas las direcciones Cash introducidas sin su prefijo.
- En el punto de conexión en solitario, un minero cuyo nombre de usuario no es una dirección mina hacia su dirección de pago, y una dirección mal escrita se rechaza.
- Incluye las correcciones de seguridad de Node.js de octubre de 2026.`,
    de_DE: `- Aktualisiert EloPool auf 1.3.0. Auszahlungs- und Miner-Adressen werden gegen ihre Prüfsumme und die Chain des Knotens geprüft, auch Cash-Adressen, die ohne ihr Präfix eingegeben wurden.
- Am Solo-Endpunkt mint ein Miner, dessen Benutzername keine Adresse ist, auf Ihre Auszahlungsadresse, und eine vertippte Adresse wird abgewiesen.
- Enthält die Node.js-Sicherheitskorrekturen vom Oktober 2026.`,
    pl_PL: `- Aktualizuje EloPool do 1.3.0. Adresy wypłat i górników są sprawdzane pod kątem sumy kontrolnej i łańcucha węzła, także adresy Cash wpisane bez prefiksu.
- Na punkcie końcowym solo górnik, którego nazwa użytkownika nie jest adresem, kopie na Twój adres wypłat, a adres z literówką jest odrzucany.
- Zawiera poprawki bezpieczeństwa Node.js z października 2026.`,
    fr_FR: `- Met à jour EloPool vers 1.3.0. Les adresses de paiement et des mineurs sont vérifiées par leur somme de contrôle et la chaîne du nœud, y compris les adresses Cash saisies sans leur préfixe.
- Sur le point d'accès solo, un mineur dont le nom d'utilisateur n'est pas une adresse mine vers votre adresse de paiement, et une adresse mal saisie est refusée.
- Inclut les correctifs de sécurité Node.js d'octobre 2026.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
