// Georgia example
export default [
  {
    name: "quotes-p",
    test: /^\n?([»„“]P)/,
    offset: -0.95
  },
  {
    name: "quotes",
    test: /^\n?([»„“])/,
    offset: -0.9
  },
  {
    name: "W",
    test: /^\n?W/,
    offset: -0.15
  },
  {
    name: "j",
    test: /^\n?j/,
    offset: 0.15
  },
  {
    name: "Vv",
    test: /^\n?Vv/,
    offset: 0.06
  },
  {
    name: "O",
    test: /^\n?O/,
    offset: -0.05
  },
  {
    name: "o",
    test: /^\n?o/,
    offset: 0.05
  },
  {
    name: "T",
    test: /^\n?T/,
    offset: -0.1
  }
];
