class MyAudioWorkletNode extends AudioWorkletNode {
  constructor(context) {
    super(context, "gain-processor");
  }
}

const context = new AudioContext();

context.audioWorklet.addModule("gain-processor.js").then(() => {
  const oscillator = new OscillatorNode(context);

  const gainWorkletNode = new MyAudioWorkletNode(context);

  oscillator.connect(gainWorkletNode).connect(context.destination);

  oscillator.start();
});
