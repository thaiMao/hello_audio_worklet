class MyAudioWorkletNode extends AudioWorkletNode {
  constructor(context) {
    super(context, "my-worklet-processor");
  }
}

const context = new AudioContext();

context.audioWorklet.addModule("processor.js").then(() => {
  const node = new MyAudioWorkletNode(context);
});
