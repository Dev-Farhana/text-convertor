 let voices = [];
let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector('button').addEventListener('click' , () => {
   speech.text = document.querySelector('textarea').value;
   window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = ()=> {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)) );
}
