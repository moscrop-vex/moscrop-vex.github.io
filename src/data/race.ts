export const race = {
  title: "Robo Race",
  audience: "Beginner",
  summary:
    "A build-the-fastest-robot race for our younger members. There are very few rules: build a robot however you can, wire it up, and see who crosses the line first.",
  electronics: {
    board: "Wemos R1 D1",
    chip: "ESP8266",
    description:
      "Every robot runs on a Wemos R1 D1 board built around the ESP8266. We provide the code that gives your robot its basic functionality and control systems, so your robot can be driven over a WiFi network. You focus on the build; the code gets it moving.",
  },
  rules: [
    { label: "Motors", value: "Maximum of 4" },
    { label: "Weapons", value: "None allowed" },
    { label: "Footprint", value: "Max 10 × 12 in (25 × 30 cm)" },
    { label: "Height", value: "No limit" },
  ],
  teams: {
    size: "1–4 people per group",
    description:
      "Enter on your own or grab up to three teammates. Groups design, build, and tune their own robot, and the fastest robot on race day wins.",
  },
};
