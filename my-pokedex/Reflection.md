
1. Where did you struggle the most?
I struggled the most with getting the Pokémon details to appear after clicking on a name. I expected the info to show immediately but didn’t realize the component needed a layout fix and extra conditionals to properly display fetched data.

2. Step-by-step, how did you debug / research the solution?
First, I used console.log to check if the fetch function was being called. Then I confirmed the API data was coming in correctly. Once I knew the data existed, I realized the detail card was rendering below the fold, so I fixed the layout using Flexbox and CSS. Adding logging and conditionals helped me confirm each step was working.

3. Did you peek at the “last-resort” sample repo? If yes, what exactly did you learn and re‑implement?
No, I did not use the sample repo.

4. One improvement you’d tackle with more time
I would use React Router to let users navigate to a dedicated detail page for each Pokémon. I would also add a search bar to filter the list and maybe use localStorage to save favorites.