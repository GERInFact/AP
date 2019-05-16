const mainPage = document.querySelector(".mainPage");
const emailButton = document.querySelector("#contactButton");
const menuButton = document.querySelector("#menuButton");
const intro = document.querySelector(".introHeading");
const modalBox = document.querySelector(".modalBox");
const boxText = document.querySelector("#boxText");
const fiscalAdviceBox = document.querySelector("#fiscalAdvice");
const agriculturalTerminalBox = document.querySelector("#agriculturalTerminal");
const consultingBox = document.querySelector("#consulting");
const annualAccountsBox = document.querySelector("#annualAccounts");
const accountingBox = document.querySelector("#accounting");
const wagesBox = document.querySelector("#wages");
const auxiliariesBox = document.querySelector("#auxiliaries");
const dataProtectionBox = document.querySelector("#dataProtection");
const btnBoxClose = document.querySelector(".boxClose");
const quickClose = document.querySelector("#quickClose");

class ContentManager {
    constructor() {
        this.isEmailBoxActive = true;
        this.isModalBoxActive = false;

    }

    toggleMailBox() {
        emailButton.classList.toggle('hide-label');
        this.isEmailBoxActive = !this.isEmailBoxActive;
        this.setMenuDisplaySetting();
    }

    setMenuDisplaySetting() {
        menuButton.style.display = this.getDisplaySetting(this.isEmailBoxActive);
    }

    getDisplaySetting(condition) {
        if (typeof condition !== "boolean") throw Error("Parameter is not a boolean.");

        return condition ? "block" : "none";
    }

    toggleModalBox() {
        this.isModalBoxActive = !this.isModalBoxActive;
        modalBox.style.display = this.getDisplaySetting(this.isModalBoxActive);
        modalBox.scrollTop = 0;
        mainPage.classList.toggle('blur');

    }

    toggleMenuButton(condition) {

        if (typeof condition !== "boolean") throw Error("Parameter is not a boolean.");

        this.setMenuButtonVisibility(condition);
    }

    setMenuButtonVisibility(condition) {
        if (condition)
            menuButton.style.visibility = "visible";
        else
            menuButton.style.visibility = "hidden";
    }

    isIntroTextAtTop() {
        return window.pageYOffset >= intro.offsetTop - window.pageYOffset * 0.1;
    }

}


class ServiceManager {
    constructor() {}

    displayDetails(infoText, callBack) {
        callBack();
        boxText.innerText = infoText;
    }

}

const content = new ContentManager();
const service = new ServiceManager();

setInterval(() => content.toggleMenuButton(content.isIntroTextAtTop()), 1);
emailButton.addEventListener("click", () => content.toggleMailBox());
btnBoxClose.addEventListener("click", () => content.toggleModalBox());
quickClose.addEventListener("click", () => content.toggleModalBox());

fiscalAdviceBox.addEventListener("click", () => service.displayDetails(`STEUERBERATUNG

Wir beraten unsere Mandanten in allen steuerlichen Fragen, helfen ihnen bei der steuerlichen Gestaltung von unternehmerischen Entscheidungen und unterstützen sie bei rechtlichen Vorgängen.

Unsere Schwerpunkte sind:

I. Steuererklärungen für Gesellschaften, Unternehmer und Privatpersonen

II. Steuerplanung, Steuergestaltung und Steueroptimierung

III. Vertretung gegenüber der Finanzbehörde, Teilnahme an Betriebsprüfungen und Führung von Rechtsbehelfs - und Klageverfahren

IV. Beratung bei Existenzgründung, Unternehmensnachfolge, Wahl der Rechtsform und Unternehmensumstrukturierung / Umwandlung

V. Steuerliche Gestaltung bei Erbangelegenheiten.
`, () => content.toggleModalBox()));

agriculturalTerminalBox.addEventListener("click", () => service.displayDetails(`LANDWIRTSCHAFTLICHE BUCHSTELLE

Unser Spezialgebiet ist die Betreuung landwirtschaftlicher Betriebe mit ihren zahlreichen steuerlichen und betriebswirtschaftlichen Besonderheiten.

Unser Angebot umfasst:

I. Beratung bei Spezialfragen im Einkommens- und Umsatzsteuerrecht

II. Höfe- und Landpachtrecht

III. Unterstützung bei der Beantragung von Fördermitteln und Agrarkrediten

IV. Grundstücksverkehrsrecht

V. Nachfolgeregelung

VI. Betriebswirtschaftliche Spezialberatung
`, () => content.toggleModalBox()));


consultingBox.addEventListener("click", () => service.displayDetails(`UNTERNEHMENSBERATUNG

Wir unterstützen und beraten unsere Mandanten bei Unternehmenskäufen, Vergrößerungen oder Umstrukturierungen, Finanzierungs- und betriebswirtschaftlichen Fragen.

Unser Beratung umfasst:

I. Beratung bei Existenzgründung, Businesspläne

II. Beratung und Begleitung bei Bankgesprächen und Förderanträgen

III. Strategie- und Organisationsberatung

IV. Hilfestellung bei Liquiditätsplanung und Kostenkontrolle

V. wirtschaftliche Beratung bei Kauf und Verkauf von Unternehmen
`, () => content.toggleModalBox()));

annualAccounts.addEventListener("click", () => service.displayDetails(`JAHRESABSCHLUSS

Wir erstellen Jahresabschlüsse und Gewinnermittlungen für Unternehmen aller Branchen und Rechtsformen.

Unsere Leistungen sind:

I. Handelsrechtliche Jahresabschlüsse ohne und mit Plausibilitätsbeurteilung

II. Steuerbilanzen, E-Bilanzen

III. Einnahmen-Überschussrechnungen
`, () => content.toggleModalBox()));

accountingBox.addEventListener("click", () => service.displayDetails(`BUCHHALTUNG

Wir übernehmen für unsere Mandanten Teilbereiche des Rechnungswesens, aber 
auch die komplette Abwicklung der Buchhaltung – von der Überweisung bis hin zur
betriebswirtschaftlichen Auswertung – je nach Bedarf.

Wir helfen bei:

I. Einrichtung und Organisation des Rechnungswesens

II. komplette Finanzbuchführung mit Standard- und branchenspezifischen Auswertungen

III. Kostenkontrolle, Erfolgskontrolle, Frühwarnsystem

IV. Überprüfung der Buchführung inkl. Mitarbeiterschulung
`, () => content.toggleModalBox()));

wagesBox.addEventListener("click", () => service.displayDetails(`LÖHNE

Wir übernehmen für unsere Mandanten die Lohn- und Gehaltsabrechnung.

Unser Angebot umfasst:

I. Monatliche Lohn- und Gehaltsabrechnungen

II. Meldungen, Bescheinigungen und Anträge

III. Beratung bei Vergütung und Lohnzusatzleistungen

IV. Teilnahme bei Prüfungen durch Finanzbehörden und Sozialversicherungsträger
`, () => content.toggleModalBox()));

auxiliariesBox.addEventListener("click", () => service.displayDetails(`SONSTIGE BERATUNG

I. Unternehmensnachfolge

II. Umlegungsverfahren, Grundstückskauf und -verkauf

III- Prüfung von Gesellschaftsverträgen hinsichtlich steuerlicher Aspekte

IV. Sanierungsberatung
`, () => content.toggleModalBox()));

dataProtectionBox.addEventListener("click", () => service.displayDetails(`DATENSCHUTZ
1. Name und Kontaktdaten des Verantwortlichen
Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten auf der Kanzleiwebseite von:
Verantwortlicher: Alber & Pfindel Steuerberatungsgesellschaft Part GmbB, Am Fleinsbach 9, 70794 Filderstadt, kanzlei@alber-pfindel.de, fon 0711-7225610, fax 0711-7225623
Kontaktdaten des Datenschutzbeauftragten:
Der/die Datenschutzbeauftragte der Kanzlei ist unter der vorstehenden Kanzleianschrift und unter datenschutz@alber-pfindel.de erreichbar.

 

2. Umfang und Zweck der Verarbeitung personenbezogener Daten
Aufruf der Webseite:
Beim Aufruf dieser Webseite www.alber-pfindel.de werden durch den Internet-Browser, den der Besucher verwendet, automatisch Daten an den Server dieser Webseite gesendet und zeitlich begrenzt in einer Protokolldatei (Logfile) gespeichert. Bis zur automatischen Lö-schung werden nachstehende Daten ohne weitere Eingabe des Besuchers gespeichert:
– IP-Adresse des Endgeräts des Besuchers,
– Datum und Uhrzeit des Zugriffs durch den Besucher,
– Name und URL der vom Besucher aufgerufenen Seite,
– Webseite, von der aus der Besucher auf die Kanzleiwebseite gelangt (sog. Referrer-URL),
– Browser und Betriebssystem des Endgeräts des Besuchers sowie der Name des vom Besucher verwendeten Access-Providers.
Die Verarbeitung dieser personenbezogenen Daten ist gem. Art. 6 Abs. 1 Satz 1 Buchst. f) DSGVO gerechtfertigt. Die Kanzlei hat ein berechtigtes Interesse an der Datenverarbeitung zu dem Zweck,
– die Verbindung zur Webseite der Kanzlei zügig aufzubauen,
– eine nutzerfreundliche Anwendung der Webseite zu ermöglichen,
– die Sicherheit und Stabilität der Systeme zu erkennen und zu gewährleisten und
– die Administration der Webseite zu erleichtern und zu verbessern.
Die Verarbeitung erfolgt ausdrücklich nicht zu dem Zweck, Erkenntnisse über die Person des Besuchers der Webseite zu gewinnen.

 

3. Weitergabe von Daten
Personenbezogene Daten werden an Dritte übermittelt, wenn
– nach Art. 6 Abs. 1 Satz 1 Buchst. a) DSGVO durch die betroffene Person ausdrücklich dazu eingewilligt wurde,
– die Weitergabe nach Art. 6 Abs. 1 Satz 1 Buchst. f) DSGVO zur Geltendmachung, Aus-übung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur An-nahme besteht, dass die betroffene Person ein überwiegendes schutzwürdiges Interes-se an der Nichtweitergabe ihrer Daten hat,
– für die Datenübermittlung nach Art. 6 Abs. 1 Satz 1 Buchst. c) DSGVO eine gesetzliche Verpflichtung besteht, und/oder
– dies nach Art. 6 Abs. 1 Satz 1 Buchst. b) DSGVO für die Erfüllung eines Vertragsver-hältnisses mit der betroffenen Person erforderlich ist.
In anderen Fällen werden personenbezogene Daten nicht an Dritte weitergegeben.

 

4. Analyse-Dienste für Webseiten, Tracking                                                                       Wir nutzen auf unserer Webseite den Webseiten-Analysedienst für Webseiten von Google Analytics. Rechtsgrundlage für die Verwendung der Analyse-Tools ist Art. 6 Abs. 1 Satz 1 Buchst. f) DSGVO. Die Webseitenanalyse liegt im berechtigten Interesse unserer Kanzlei und dient der statistischen Erfassung der Seitennutzung zur fortlaufenden Verbesserung unserer Kanzleiwebseite und des Angebots unserer Dienstleistungen.

 

5. Plugins sozialer Netzwerke (Social Plugins)
Auf unserer Kanzleiwebseite sind Plugins der nachstehenden sozialen Netzwerke eingebun-den: Facebook
Rechtsgrundlage für den Einsatz von Social Plugins ist Art. 6 Abs. 1 Satz 1 Buchst. f) DSGVO. Ein berechtigtes Interesse unserer Kanzlei und Zweck des Einsatzes von Plugins sozialer Netzwerke ist es, unser Angebot einem breiten Publikum gegenüber bekanntzuma-chen. Die sozialen Netzwerke sind für den datenschutzkonformen Umgang mit den Daten ihrer Nutzer verantwortlich.

 

6. Ihre Rechte als betroffene Person
Soweit Ihre personenbezogenen Daten anlässlich des Besuchs unserer Webseite verarbeitet werden, stehen Ihnen als „betroffene Person“ im Sinne der DSGVO folgende Rechte zu:

6.1 Auskunft
Sie können von uns Auskunft darüber verlangen, ob personenbezogene Daten von Ihnen bei uns verarbeitet werden. Kein Auskunftsrecht besteht, wenn die Erteilung der begehrten In-formationen gegen die Verschwiegenheitspflicht gem. § 57 Abs. 1 StBerG verstoßen würde oder die Informationen aus sonstigen Gründen, insbesondere wegen eines überwiegenden berechtigten Interesses eines Dritten, geheim gehalten werden müssen. Hiervon abweichend kann eine Pflicht zur Erteilung der Auskunft bestehen, wenn insbesondere unter Berücksich-tigung drohender Schäden Ihre Interessen gegenüber dem Geheimhaltungsinteresse über-wiegen. Das Auskunftsrecht ist ferner ausgeschlossen, wenn die Daten nur deshalb gespei-chert sind, weil sie aufgrund gesetzlicher oder satzungsmäßiger Aufbewahrungsfristen nicht gelöscht werden dürfen oder ausschließlich Zwecken der Datensicherung oder der Daten-
schutzkontrolle dienen, sofern die Auskunftserteilung einen unverhältnismäßig hohen Auf-wand erfordern würde und die Verarbeitung zu anderen Zwecken durch geeignete techni-sche und organisatorische Maßnahmen ausgeschlossen ist. Sofern in Ihrem Fall das Aus-kunftsrecht nicht ausgeschlossen ist und Ihre personenbezogenen Daten von uns verarbeitet werden, können Sie von uns Auskunft über folgende Informationen verlangen:
– Zwecke der Verarbeitung,
– Kategorien der von Ihnen verarbeiteten personenbezogenen Daten,
– Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre personenbezoge-nen Daten offen gelegt werden, insbesondere bei Empfängern in Drittländern,
– falls möglich die geplante Dauer, für die Ihre personenbezogenen Daten gespeichert werden oder, falls dies nicht möglich ist, die Kriterien für die Festlegung der Speicher-dauer,
– das Bestehen eines Rechts auf Berichtigung oder Löschung oder Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten oder eines Widerspruchs-rechts gegen diese Verarbeitung,
– das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde für den Datenschutz,
– sofern die personenbezogenen Daten nicht bei Ihnen als betroffene Person erhoben worden sind, die verfügbaren Informationen über die Datenherkunft,
– ggf. das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und angestrebten Auswirkungen automatisierter Entscheidungsfindungen,
– ggf. im Fall der Übermittlung an Empfänger in Drittländern, sofern kein Beschluss der EU-Kommission über die Angemessenheit des Schutzniveaus nach Art. 45 Abs. 3 DSGVO vorliegt, Informationen darüber, welche geeigneten Garantien gem. Art. 46 Abs. 2 DSGVO zum Schutze der personenbezogenen Daten vorgesehen sind.

6.2 Berichtigung und Vervollständigung
Sofern Sie feststellen, dass uns unrichtige personenbezogene Daten von Ihnen vorliegen, können Sie von uns die unverzügliche Berichtigung dieser unrichtigen Daten verlangen. Bei unvollständigen Sie betreffenden personenbezogenen Daten können sie die Vervollständi-gung verlangen.

6.3 Löschung
Sie haben ein Recht auf Löschung („Recht auf Vergessenwerden“), sofern die Verarbeitung nicht zur Ausübung des Rechts auf freie Meinungsäußerung, des Rechts auf Information oder zur Erfüllung einer rechtlichen Verpflichtung oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt, erforderlich ist und einer der nachstehenden Gründe zutrifft:
– Die personenbezogenen Daten sind für die Zwecke, für die sie verarbeitet wurden, nicht mehr notwendig.
– Die Rechtfertigungsgrundlage für die Verarbeitung war ausschließlich Ihre Einwilligung, welche Sie widerrufen haben.
– Sie haben Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einge-legt, die wir öffentlich gemacht haben.
– Sie haben Widerspruch gegen die Verarbeitung von uns nicht öffentlich gemachter per-sonenbezogener Daten eingelegt und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor.
– Ihre personenbezogenen Daten wurden unrechtmäßig verarbeitet.
– Die Löschung der personenbezogenen Daten ist zur Erfüllung einer gesetzlichen Ver-pflichtung, der wir unterliegen, erforderlich.
Kein Anspruch auf Löschung besteht, wenn die Löschung im Falle rechtmäßiger nicht auto-matisierter Datenverarbeitung wegen der besonderen Art der Speicherung nicht oder nur mit unverhältnismäßig hohem Aufwand möglich und Ihr Interesse an der Löschung gering ist. In diesem Fall tritt an die Stelle einer Löschung die Einschränkung der Verarbeitung.

6.4 Einschränkung der Verarbeitung
Sie können von uns die Einschränkung der Verarbeitung verlangen, wenn einer der nachste-henden Gründe zutrifft:
– Sie bestreiten die Richtigkeit der personenbezogenen Daten. Die Einschränkung kann in diesem Fall für die Dauer verlangt werden, die es uns ermöglicht, die Richtigkeit der Da-ten zu überprüfen.
– Die Verarbeitung ist unrechtmäßig und Sie verlangen statt Löschung die Einschränkung der Nutzung Ihrer personenbezogenen Daten.
– Ihre personenbezogenen Daten werden von uns nicht länger für die Zwecke der Verar-beitung benötigt, die Sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen.
– Sie haben Widerspruch gem. Art. 21 Abs. 1 DSGVO eingelegt. Die Einschränkung der Verarbeitung kann solange verlangt werden, wie noch nicht feststeht, ob unsere berech-tigten Gründe gegenüber Ihren Gründen überwiegen.
Einschränkung der Verarbeitung bedeutet, dass die personenbezogenen Daten nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses verarbeitet werden. Bevor wir die Ein-schränkung aufheben, haben wir die Pflicht, Sie darüber zu unterrichten.

6.5 Datenübertragbarkeit
Sie haben ein Recht auf Datenübertragbarkeit, sofern die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 Satz 1 Buchst. a) oder Art. 9 Abs. 2 Buchst. a) DSGVO) oder auf einem Ver-trag beruht, dessen Vertragspartei Sie sind und die Verarbeitung mithilfe automatisierter Ver-fahren erfolgt. Das Recht auf Datenübertragbarkeit beinhaltet in diesem Fall folgende Rech-te, sofern hierdurch nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden: Sie können von uns verlangen, die personenbezogenen Daten, die Sie uns bereit gestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung unser-seits zu übermitteln. Soweit technisch machbar, können Sie von uns verlangen, dass wir Ihre personenbezogenen Daten direkt an einen anderen Verantwortlichen übermitteln.

6.6 Widerspruch
Sofern die Verarbeitung auf Art. 6 Abs. 1 Satz 1 Buchst. e) DSGVO (Wahrnehmung einer Aufgabe im öffentlichen Interesse oder in Ausübung öffentlicher Gewalt) oder auf Art. 6 Abs. 1 Satz 1 Buchst. f) DSGVO (berechtigtes Interesse des Verantwortlichen oder eines Dritten) beruht, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen. Das gilt auch für ein auf Art. 6 Abs. 1 Satz 1 Buchst. e) oder Buchst. f) DSGVO gestütztes Profiling. Nach Ausübung des Widerspruchsrechts verarbeiten wir Ihre personenbezogenen Daten nicht mehr, es sei denn, wir können zwingende schutz-würdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
Sie können jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbe-zogenen Daten zu Zwecken der Direktwerbung einlegen. Das gilt auch für ein Profiling, das mit einer solchen Direktwerbung in Verbindung steht. Nach Ausübung dieses Widerspruchs-rechts werden wir die betreffenden personenbezogenen Daten nicht mehr für Zwecke der Direktwerbung verwenden.
Sie haben die Möglichkeit, den Widerspruch telefonisch, per E-Mail, per Telefax oder an un-sere zu Beginn dieser Datenschutzerklärung aufgeführte Postadresse unserer Kanzlei form-los mitzuteilen.

6.7 Widerruf einer Einwilligung
Sie haben das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu wider-rufen. Der Widerruf der Einwilligung kann telefonisch, per E-Mail, per Telefax oder an unsere Postadresse formlos mitgeteilt werden. Durch den Widerruf wird die Rechtmäßigkeit der Da-tenverarbeitung, die aufgrund der Einwilligung bis zum Eingang des Widerrufs erfolgt ist, nicht berührt. Nach Eingang des Widerrufs wird die Datenverarbeitung, die ausschließlich auf Ihrer Einwilligung beruhte, eingestellt.

6.8 Beschwerde
Wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten rechtswidrig ist, können Sie Beschwerde bei einer Aufsichtsbehörde für den Daten-schutz einlegen, die für den Ort Ihres Aufenthaltes oder Arbeitsplatzes oder für den Ort des mutmaßlichen Verstoßes zuständig ist.

 

7. Stand und Aktualisierung dieser Datenschutzerklärung
Diese Datenschutzerklärung hat den Stand vom 25.Mai 2018. Wir behalten uns vor, die Da-tenschutzerklärung zu gegebener Zeit zu aktualisieren, um den Datenschutz zu verbessern und/oder an geänderte Behördenpraxis oder Rechtsprechung anzupassen.
`, () => content.toggleModalBox()));