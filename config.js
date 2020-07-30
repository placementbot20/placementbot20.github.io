export default {
    app: {
        token: "c144d0c54bc640dfb9e95a3e7f8e6bbb", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: true // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeTitle: "Welcome to Placement Bot!",
            welcomeDescription: `You can type "Hello" to get started or just press on the microphone to talk`,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Ask me something...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "en-GB", // <- output language
            recognitionLang: "en-IN" // <- input(recognition) language
        }
    }
}