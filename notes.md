1. Állapot leírása:

- Tábla: Mátrix (mezők mátrixa)
  - Mező: 
    - akna-e
    - van-e rajta zászló
    - fel van-e már fedve
    - hány akna szomszédja van

2. Állapot megjelenítése

- Alulról felfele hogyan jelenik meg az állapot
  - Egy darab mező megjelenítése
  - A táblázat egy sorának megjelenítése
  - A táblázat egészének megjelenítése
  - Mosolygós fej a táblázat felett

3. Események kezelése

- Új játék gomb lenyomása -> a bemeneti paraméterek alapján új játék kezdődik
- Bal gombbal kattintunk egy felfedetlen cellára
  - Szám, akkor csak felfedjük
  - Ha akna, akkor vége a játéknak
  - Üres, akkor felfedjük az összes szomszédos mezőt
- Jobb gombbal kattintunk egy felfedetlen cellára -> zászló/nem zászló
- Dupla gombos kattintás -> az összes nem zászló szomszédot felfedjük