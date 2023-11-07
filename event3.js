const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: "Martin Luther King Jr.",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King Jr.",
  },
  {
    quote:
      "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
    person: "Martin Luther King Jr.",
  },
];

document.querySelector("#btn").addEventListener("click", function () {
  const h1 = document.getElementById("head1");
  const h2 = document.getElementById("head2");

  const element = Math.floor(Math.random() * quotes.length);

  h1.innerText = quotes[element].quote;
  h2.innerText = quotes[element].person;
});
