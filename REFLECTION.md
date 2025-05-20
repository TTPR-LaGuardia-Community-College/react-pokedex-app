
# What was the hardest part?
# The hardest part was figuring out how to get the Pokémon data from the API and show it on the page. I wasn’t sure how useEffect worked, or how to make the app update every time I clicked the button. I also wasn’t sure where to put certain pieces of code, so I was a bit confused at first.


# How did I figure it out?
# I started adding console.log() to see what was actually happening in the code. I also opened the browser's developer tools to check the data coming from the Pokmon API. I Googled a few things like “React useEffect fetch example,” and I read a bit of the React documentation too. Eventually, I realized that putting the fetch logic inside useEffect and using [count] as a dependency would make it run again every time the count changes. That helped a lot.


# Did I look at the example repo?
# Yes. I looked at it when I felt really stuck. It helped me see how the pieces should be organized. For example, they had separate components for different parts of the app, and I saw how they passed data using props. I didnot copy it directly, but it gave me some useful ideas.


# What would I improve if I had more time?
# Iwould make it look better and easier to use. Right now, you just click a button to go to the next Pokemon. I’d love to add a search bar so you can type a Pokemon’s name, and maybe show its picture, type, and abilities. That would make it more like a real Pokedex.
