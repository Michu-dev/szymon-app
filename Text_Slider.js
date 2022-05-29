// ten kod nie jest wewn¹trz ¿adnej funkcji wiêc zostanie wykonany w momencie za³adowania skryptu do pliku

// zmienne globalne
let txt = 'ruchomy tekst...';
let work = false;  // pomocnicza zmienna logiczna do w³¹czenia i wy³¹czenia funkcji
const delay = 200; // czas opóŸnienia
let t = 0; 

function slider()
{
    clearTimeout(t);  // czyœcimy zmienn¹ t do której przypiszemy funkcjê setTimeout, tak by po klikniêciu napis nam nie przyspiesza³
    
    // jeœli chcemy wpisaæ w³asny tekst to zaczynamy od pobrania tego tekstu z elementu o 'id = rTekst'
    txt = document.getElementById("rTekst").value;

    let space = '';
    let empty = document.getElementById("rTekst").size - txt.length;
    for (let i = 0; i < empty; i++)
    {
        space += "\xa0\xa0\xa0\xa0\xa0";
    } // wype³niamy puste miejsce spacjami

    // przesuniêcie napisu przy pomocy funkcji substring zwracaj¹cej wybrany ci¹g znaków
    // z tekstu pobieramy pierwszy znak i umieszczamy na koñcu tekstu, a nastênie przypisujemy do zmiennej 'txt', itd.*/
    txt = txt.substring(1, txt.length) + space + txt.substring(0, 1);
    // pobieranie do zmiennej obiektu ze strony o okreœlonym id
    let object = document.getElementById("rTekst");
    // ustawienie nowego napisu 
    object.value = txt;
    // czyœcimy zmienn¹ dla spacji 
    space = ''; 
    // funkcja setTimeout uruchamia kod podany jako paramater z opóŸnieniem w milisekundach
    if (work)
    {
        t = setTimeout(slider, delay);
    }
}