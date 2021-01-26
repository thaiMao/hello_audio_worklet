/**
 * This file is evaluated in AudioWorkletGlobalScope (the render thread),
 * when audioWorklet.addModule() is invoked in the main thread.
 */

class MyAudioWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    // code to process audio goes here...
  }
}

registerProcessor("my-worklet-processor", MyAudioWorkletProcessor);
