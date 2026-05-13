import type { Topic } from "@/lib/types";

export const ulighederMedEnUbekendt: Topic = {
  slug: "uligheder-med-en-ubekendt",
  title: "Uligheder med én ubekendt",
  summary:
    "Løs uligheder systematisk og husk reglen om at vende tegnet ved multiplikation eller division med negative tal.",
  sections: [
    {
      heading: "Samme idé som ligninger",
      body:
        "Du må lægge til, trække fra, gange og dividere på begge sider. Men ved gange/division med et negativt tal skal ulighedstegnet vendes.",
    },
    {
      heading: "Eksempel",
      body:
        "Løs -2x > 8. Divider med -2: x < -4. Tegnet vendes fra > til <, fordi du dividerer med et negativt tal.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Løs uligheden x + 5 < 12.",
      options: [
        { id: "a", text: "x < 7" },
        { id: "b", text: "x > 7" },
        { id: "c", text: "x < 17" },
        { id: "d", text: "x > 17" },
      ],
      correctOptionId: "a",
      explanation: "Træk 5 fra på begge sider: x < 7.",
    },
    {
      id: "q2",
      prompt: "Løs -3x ≤ 9.",
      options: [
        { id: "a", text: "x ≥ -3" },
        { id: "b", text: "x ≤ -3" },
        { id: "c", text: "x ≥ 3" },
        { id: "d", text: "x ≤ 3" },
      ],
      correctOptionId: "a",
      explanation: "Divider med -3 og vend tegnet: x ≥ -3.",
    },
    {
      id: "q3",
      prompt: "Hvornår skal du vende ulighedstegnet?",
      options: [
        { id: "a", text: "Når du ganger eller dividerer med et negativt tal" },
        { id: "b", text: "Når du lægger til på begge sider" },
        { id: "c", text: "Når du trækker fra på begge sider" },
        { id: "d", text: "Aldrig" },
      ],
      correctOptionId: "a",
      explanation: "Det er den afgørende specialregel for uligheder.",
    },
  ],
};
