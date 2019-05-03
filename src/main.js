class SpeechRecognition {
  constructor(opts) {
    const api = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;

    if (!api) {
      throw new Error("This browser doesn't support the Speech Recognition API");
    }

    this.api = new api();
  }

  // Brings up the "Allow microphone access" dialog and starts the SR engine
  start(opts = {}) {
    const defaultOpts = {
      // Language Speech Recognition engine (SR) should understand
      // If not specified, then it will default to the language the user agent
      // (i.e., browser) is set to
      lang: 'en-US',

      interimResults: false,

      // Keep listening and transcribing as long as the app is open
      continuous: true,

      onresult: this.onresult,
    };

    const mergedOptions = Object.assign(defaultOpts, opts);

    Object.keys(mergedOptions).forEach(opt => {
      this.api[opt] = mergedOptions[opt];
    }, this);

    this.api.start();
  }

  onresult(event) {
    // Index of the most recent utterance that was understood
    const { resultIndex } = event;

    // Parse the most recent utterance
    const result = event.results[resultIndex];
    const transcript = result[0].transcript;

    console.log(transcript);
  }
}

const sr = new SpeechRecognition();
sr.start();
