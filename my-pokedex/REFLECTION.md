# Reflection

## 1. Where did you struggle the most?

I struggled the most with understanding the project folder structure and making sure I was editing the correct React files. At first, I had two Vite servers running and also had a nested `my-pokedex` folder, so some changes were not showing in the browser right away.

## 2. Step-by-step, how did you debug / research the solution?

First, I checked the localhost page to see if the app updated after saving. When the changes did not show, I checked the terminal and noticed different Vite servers were running on different ports. Then I checked the folder structure in VS Code and realized I was editing the wrong `App.jsx` file. After opening the correct project folder, I updated `App.jsx`, `App.css`, and `index.css`. I also used the browser preview to confirm the Pokémon list and detail view were working.

## 3. Did you peek at the last-resort sample repo?

No, I did not copy code from the sample repo. I built the project using the assignment instructions, React state, `useEffect`, fetch, and the PokeAPI.

## 4. One improvement you would tackle with more time

With more time, I would add a search bar, favorites saved with `localStorage`, and better filtering by Pokémon type. I would also improve the design with more NYC-themed colors and icons.