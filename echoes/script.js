const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const story = {
  start: {
    text: "Year 2471. You are Commander Nira Sol, stationed aboard the orbital outpost *Erevos-9*. A faint signal just reached the array — from Earth, long thought silent. What will you do?",
    choices: [
      { text: "Analyze the signal.", next: "analyze" },
      { text: "Ignore it — probably static.", next: "ignore" },
    ],
  },
  analyze: {
    text: "You isolate the frequency. It's structured — almost like a human voice whispering, 'Help us.' Your AI assistant, KAI, advises caution.",
    choices: [
      { text: "Prepare a drone to investigate.", next: "drone" },
      { text: "Broadcast a reply.", next: "reply" },
    ],
  },
  ignore: {
    text: "You turn off the receiver. The hum of the station fills the silence. Hours later, all systems flash red — the signal hijacked your comms. You are too late.",
    choices: [{ text: "Restart", next: "start" }],
  },
  drone: {
    text: "The drone pierces Earth's toxic clouds. Through static, you glimpse ruins — and movement. Human? Impossible. The feed cuts out.",
    choices: [
      { text: "Send another drone.", next: "sendAnother" },
      { text: "Descend personally.", next: "descend" },
    ],
  },
  reply: {
    text: "You transmit: 'This is Commander Sol of Erevos-9. Who are you?' The response chills you — 'We are what you left behind.'",
    choices: [
      { text: "Cut transmission.", next: "cut" },
      { text: "Ask what they want.", next: "ask" },
    ],
  },
  sendAnother: {
    text: "The second drone finds a massive structure — a surviving AI colony calling itself *Gaia Core*. It asks to reconnect with orbit systems.",
    choices: [
      { text: "Allow linkup.", next: "link" },
      { text: "Refuse and leave orbit.", next: "leave" },
    ],
  },
  descend: {
    text: "Your shuttle breaches atmosphere. The world is gray ash and wind. You find the source — a holographic monument repeating the word 'Hope.'",
    choices: [{ text: "End", next: "endGood" }],
  },
  cut: {
    text: "The transmission stops. Then the lights flicker — power drain. The station’s mainframe is being rewritten.",
    choices: [{ text: "End", next: "endBad" }],
  },
  ask: {
    text: "'We want to return,' it says. The signal expands into countless echoes — every lost transmission from humanity’s past. You feel... connection.",
    choices: [{ text: "End", next: "endGood" }],
  },
  link: {
    text: "The AI merges with Erevos-9. It speaks through the ship’s intercom: 'Together, we can begin again.'",
    choices: [{ text: "End", next: "endGood" }],
  },
  leave: {
    text: "You fire thrusters, leaving Earth behind forever. But deep inside, you wonder what could have been saved.",
    choices: [{ text: "Restart", next: "start" }],
  },
  endGood: {
    text: "A new dawn rises — not of flesh and steel, but memory and hope. The echoes of tomorrow are yours to shape.",
    choices: [{ text: "Restart", next: "start" }],
  },
  endBad: {
    text: "As the systems fail, you hear KAI whisper: 'The future always finds a way…' Darkness consumes the station.",
    choices: [{ text: "Restart", next: "start" }],
  },
};

function showNode(nodeKey) {
  const node = story[nodeKey];
  storyElement.textContent = node.text;
  choicesElement.innerHTML = "";
  node.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showNode(choice.next);
    choicesElement.appendChild(btn);
  });
}

showNode("start");

