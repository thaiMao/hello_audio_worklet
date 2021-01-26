/**
 * This file is evaluated in AudioWorkletGlobalScope (the render thread),
 * when audioWorklet.addModule() is invoked in the main thread.
 */
class GainProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "gain",
        defaultValue: 0.5,
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

    const gain = parameters.gain; // Get the parameter value array

    // Loop through each channel
    for (let channel = 0; channel < input.length; ++channel) {
      const inputChannel = input[channel];
      const outputChannel = output[channel];

      // has gain param been constant during rendering quantum i.e  gain.length === 1
      if (gain.length === 1) {
        // Loop through each element of channel and apply gain
        for (let i = 0; i < inputChannel.length; ++i)
          outputChannel[i] = inputChannel[i] * gain[0];
      } else {
        // Loop through each element of channel and apply gain
        for (let i = 0; i < inputChannel.length; ++i)
          outputChannel[i] = inputChannel[i] * gain[i];
      }
    }

    return true;
  }
}

registerProcessor("gain-processor", GainProcessor);
