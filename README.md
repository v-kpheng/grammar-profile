# Grammar Profile

Learning more about grammars and how they are used in speech recognition engines and the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) in particular.

The API doesn't seem to respect grammars.  Instead of matching only the grammar, the API will fire a `result` event whenever it is able to transcribe what was said.  Because of this, this repo introduces "soft grammars".

## Notes
The Speech Recognition API is experimental and is [currently only supported by Chrome](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility).

## References
* [Voice command demo](https://mdn.github.io/web-speech-api/speech-color-changer/)
* [Glossary of speech recognition terms](https://www.lumenvox.com/resources/tips/tipsGlossary.aspx)
* [MDN SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
* [Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
* [W3 Web Speech API spec](https://w3c.github.io/speech-api)
