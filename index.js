class GainWorkletNode extends AudioWorkletNode {
  constructor(context) {
    super(context, "gain-processor");
  }
}

const btnElement = document.getElementById("btn");

const context = new AudioContext();

context.audioWorklet.addModule("gain-processor.js").then(() => {
  const oscillator = new OscillatorNode(context);

  const gainWorkletNode = new GainWorkletNode(context);

  oscillator.connect(gainWorkletNode).connect(context.destination);

  let isPlaying = false;

  btnElement.onclick = () => {
    if (isPlaying) return;

    isPlaying = true;
    oscillator.start();
  };
});
