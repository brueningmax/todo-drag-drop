export default function Tooltip({ text }) {
    return (
        <div class="speech-bubble -translate-x-36 -translate-y-40">
            <div class="speech-bubble-triangle"></div>
            <p class="speech-bubble-content">{text}</p>
        </div>
    )
}