/**
 * This file is evaluated in AudioWorkletGlobalScope (the render thread),
 * when audioWorklet.addModule() is invoked in the main thread.
 */

class MyAudioWorkletProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "myParam",
        defaultValue: 0.707,
      },
    ];
  }

  constructor() {
    super();
  }

  /**
   *
   * The processor may have multiple inputs and outputs.
   *
   * Each input or output may have multiple channels.
   *
   * Return true to keeps the processor alive.
   */
  process(inputs, outputs, parameters) {
    // code to process audio goes here...
  }
}

registerProcessor("my-worklet-processor", MyAudioWorkletProcessor);
