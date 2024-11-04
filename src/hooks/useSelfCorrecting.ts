import { ref, onMounted } from 'vue'

export function useTypingEffect(
  targetWord: string,
  initialText = 'drow',
  speed = 150,
) {
  const currentText = ref(initialText)

  const shuffleWord = (word: string): string => {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('')
  }

  const correctTypingEffect = () => {
    if (currentText.value === targetWord) return

    currentText.value = shuffleWord(currentText.value)

    for (let i = 0; i < targetWord.length; i++) {
      if (Math.random() > 0.5) {
        currentText.value =
          currentText.value.substring(0, i) +
          targetWord[i] +
          currentText.value.substring(i + 1)
      }
    }

    setTimeout(correctTypingEffect, speed)
  }

  onMounted(() => {
    correctTypingEffect()
  })

  return currentText
}
