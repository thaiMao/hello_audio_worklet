class GainWorkletNode extends AudioWorkletNode {
  constructor(context) {
    super(context, "gain-processor");
  }
}

const btnElement = document.getElementById("btn");
const gainElement = document.getElementById("gain");

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

  gainElement.oninput = (event) => {
    const { value } = event.currentTarget;

    const gainParam = gainWorkletNode.parameters.get("gain");
    gainParam.linearRampToValueAtTime(value, context.currentTime + 0.2);
  };
});
