export interface CompetitionResultEntry {
  team: string;
  placement: string;
  wlt: string;
  awards: string;
}

export interface CompetitionResult {
  event: string;
  date: string;
  results: CompetitionResultEntry[];
}

export const competitions: CompetitionResult[] = [
  {
    event: "Burnsview Regional",
    date: "2026-04-11",
    results: [
      { team: "32987A", placement: "42/50", wlt: "1-6-0", awards: "None" },
    ],
  },
];
