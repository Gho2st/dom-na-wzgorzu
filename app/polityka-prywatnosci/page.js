import Image from "next/image";
import LineHeader from "../UI/LineHeader";

export default function Polityka() {
  return (
    <main className="mt-26 border-b-2 border-neutral-200">
      <section className="text-center px-6 py-20 max-w-6xl mx-auto">
        <LineHeader text="Polityka Prywatności" />

        <div className="text-left mt-20 text-xl flex flex-col gap-6">
          {/* I. Postanowienia ogólne */}
          <h3 className="font-bold">I. Postanowienia ogólne</h3>
          <p>
            Polityka prywatności określa, jak zbierane, przetwarzane i
            przechowywane są dane osobowe Użytkowników niezbędne do świadczenia
            usług drogą elektroniczną za pośrednictwem serwisu internetowego
            <a
              href="https://muszyna-domnawzgorzu.pl"
              className="text-blue-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              muszyna-domnawzgorzu.pl
            </a>
            . Dane są przetwarzane zgodnie z RODO oraz ustawą o ochronie danych
            osobowych z 10 maja 2018 r.
          </p>

          {/* II. Administrator danych */}
          <h3 className="font-bold">II. Administrator danych</h3>
          <p>
            Administratorem danych jest „M-DECOR” Projektowanie i Aranżacja
            Wnętrz Marzena Mikulec, Złockie 172, 33-370 Złockie, NIP:
            7342090694, REGON: 121388252, e-mail:{" "}
            <a href="mailto:domnawzgorzu@m-decor.eu">domnawzgorzu@m-decor.eu</a>
            .
          </p>

          {/* III. Cel przetwarzania danych */}
          <h3 className="font-bold">III. Cel zbierania danych osobowych</h3>
          <p>
            Dane są wykorzystywane do m.in.: rejestracji konta, logowania,
            świadczenia usług, komunikacji, wysyłki newslettera (po zgodzie),
            działań marketingowych, analityki, windykacji, dochodzenia roszczeń.
          </p>

          {/* IV. Rodzaj danych */}
          <h3 className="font-bold">
            IV. Rodzaj przetwarzanych danych osobowych
          </h3>
          <p>
            Przetwarzane mogą być: imię i nazwisko, data urodzenia, adres
            zamieszkania, e-mail, numer telefonu, NIP.
          </p>

          {/* V. Okres przechowywania danych */}
          <h3 className="font-bold">V. Okres przetwarzania danych osobowych</h3>
          <p>
            Dane będą przetwarzane do momentu: wygaśnięcia roszczeń (do 6 lat),
            odwołania zgody lub do 3 lat w przypadku roszczeń okresowych.
          </p>

          {/* VI. Udostępnianie danych */}
          <h3 className="font-bold">VI. Udostępnianie danych osobowych</h3>
          <p>
            Dane mogą być przekazywane podmiotom współpracującym (np. firmy
            kurierskie, e-płatności). Dane nie będą przekazywane poza EOG, chyba
            że Użytkownik wyrazi na to zgodę.
          </p>

          {/* VII. Prawa użytkownika */}
          <h3 className="font-bold">VII. Prawa Użytkowników</h3>
          <p>
            Użytkownik ma prawo do: dostępu, poprawienia, usunięcia danych,
            ograniczenia przetwarzania, przenoszenia danych, sprzeciwu,
            cofnięcia zgody. Żądania należy kierować na adres e-mail
            Administratora. Przysługuje również prawo skargi do UODO.
          </p>

          {/* VIII. Pliki cookies */}
          <h3 className="font-bold">VIII. Pliki cookies</h3>
          <p>
            Serwis wykorzystuje cookies: sesyjne, stałe oraz zewnętrzne.
            Użytkownik może samodzielnie zmienić ustawienia cookies w
            przeglądarce.
          </p>

          {/* IX. Zautomatyzowane podejmowanie decyzji */}
          <h3 className="font-bold">
            IX. Zautomatyzowane podejmowanie decyzji i profilowanie
          </h3>
          <p>
            Dane nie są przetwarzane w sposób zautomatyzowany, który skutkowałby
            decyzjami wywołującymi skutki prawne. Mogą być profilowane jedynie
            po wyrażeniu zgody.
          </p>

          {/* X. Postanowienia końcowe */}
          <h3 className="font-bold">X. Postanowienia końcowe</h3>
          <p>
            Administrator zastrzega sobie prawo do zmian w polityce, które nie
            ograniczają praw Użytkownika. Informacje o zmianach będą dostępne w
            Serwisie. W sprawach nieuregulowanych stosuje się przepisy RODO oraz
            prawa polskiego.
          </p>
        </div>
      </section>
    </main>
  );
}
