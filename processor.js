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

    const inputChannel1st = input[0]; // Get the 1st channel of the 1st input
    const outputChannel1st = output[0]; // Get the 1st channel of the 1st output

    const myParamValues = parameters.myParam; // Get the parameter value array

    const hasMyParamBeenConstantDuringRenderingQuantum =
      myParamValues.length === 1;

    if (hasMyParamBeenConstantDuringRenderingQuantum) {
      for (let i = 0; i < inputChannel1st.length; ++i) {
        outputChannel1st[i] = inputChannel1st[i] * myParamValues[0];
      }
    } else {
      for (let i = 0; i < inputChannel1st.length; ++i) {
        outputChannel1st[i] = inputChannel1st[i] * myParamValues[i];
      }
    }

    return true;
  }
}

registerProcessor("my-worklet-processor", MyAudioWorkletProcessor);
