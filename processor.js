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
    const input = inputs[0]; // Get the first input
    const output = outputs[0]; // Get the first output
  }
}

registerProcessor("my-worklet-processor", MyAudioWorkletProcessor);
