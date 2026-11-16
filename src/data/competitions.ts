export interface CompetitionResultEntry {
  team: string;
  placement: string;
  wlt: string;
  awards: string;
}

export interface CompetitionResult {
  event: string;
  season: string;
  date: string;
  results: CompetitionResultEntry[];
}

export const competitions: CompetitionResult[] = [
  {
    event: "PYRS Salish Fall Qualifier",
    season: "Override",
    date: "2026-11-14",
    results: [
      { team: "32987A", placement: "Quarterfinals", wlt: "4-4-0", awards: "None" },
    ],
  },
  {
    event: "Burnsview Regional",
    season: "Push Back",
    date: "2026-04-11",
    results: [
      { team: "32987A", placement: "42/50", wlt: "1-6-0", awards: "None" },
    ],
  }
];
