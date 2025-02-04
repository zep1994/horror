document.addEventListener('DOMContentLoaded', function() {
  const newsDiv = document.getElementById('news');

  // Array containing horror newsletter messages
  const messages = [
      "🩸 **Upcoming Horror Release:** 'The Haunted Hollow' hits theaters next Friday. Early reviews say it's the scariest film of the year!",
      "🔪 **Recent Horror Movie Watch:** 'Evil Returns' was an intense ride! If you love psychological terror, this one is a must-watch!",
      "👁 **Breaking Horror News:** A new installment in the 'Sinister Shadows' franchise has just been announced. Get ready for more nightmares!",
      "📜 **Did You Know?** The infamous 'Ghost House' movie was based on real-life events. The house still stands... untouched for decades. Dare to visit?",
      "🕷 **Horror Throwback:** Remember the 80s slasher classic *'Night of the Stalker'*? It just got a 4K remaster. Time for a rewatch!",
      "👻 **True Horror Fan Fact:** The original 'Paranormal Encounters' movie had real supernatural experiences on set. Actors refused to return for reshoots!",
      "☠ **Creepy Recommendation:** If you love supernatural horrors, *'The Whispering Forest'* on streaming is a hidden gem. Chilling and atmospheric!",
      "🎃 **Halloween Horror Countdown:** 85 days until Halloween! What’s your go-to spooky movie for the season?",
      "💀 **Dark Legend:** The cursed script of *'Demon's Grin'* remains unfinished—every director who tried to film it mysteriously quit production. What’s hidden in those pages?"
  ];

  // Get the current date
  const currentDate = new Date();

  // Calculate the number of days elapsed since the start of the year
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const daysElapsed = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));

  // Determine the current week number (starting at 0)
  const weekNumber = Math.floor(daysElapsed / 7);

  // Use modulo to cycle through the messages array
  const selectedMessage = messages[weekNumber % messages.length];

  // Display the selected message
  newsDiv.innerHTML = selectedMessage;
});
