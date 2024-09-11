'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const allChallenges = [
  // Fitness challenges
  'Do 20 jumping jacks',
  'Hold a plank for 30 seconds',
  'Do 10 push-ups',
  'Run in place for 1 minute',
  'Do 15 squats',
  'Perform 30 seconds of mountain climbers',
  'Do 20 lunges (10 each leg)',
  
  // Cooking challenges
  'Try a new recipe for dinner tonight',
  'Make a healthy smoothie with at least 3 ingredients',
  'Bake homemade cookies',
  'Cook a meal using only local ingredients',
  'Prepare a dish from a different culture',
  
  // Outdoor activities
  'Go for a 15-minute walk in nature',
  'Plant a small herb garden',
  'Have a picnic in a nearby park',
  'Go birdwatching for 20 minutes',
  'Collect and identify 5 different leaves',
  
  // Miscellaneous challenges
  'Read a chapter of a book',
  'Write a short poem',
  'Learn 5 words in a new language',
  'Do a 10-minute meditation session',
  'Call a friend or family member you haven\'t spoken to in a while'
]

export function ChallengeGenerator() {
  const [challenge, setChallenge] = useState<string | null>(null)
  const [availableChallenges, setAvailableChallenges] = useState<string[]>([])

  useEffect(() => {
    // Initialize available challenges
    setAvailableChallenges([...allChallenges])
  }, [])

  const getRandomChallenge = () => {
    if (availableChallenges.length === 0) {
      // Reset available challenges when all have been used
      setAvailableChallenges([...allChallenges])
    }

    const randomIndex = Math.floor(Math.random() * availableChallenges.length)
    const newChallenge = availableChallenges[randomIndex]

    // Remove the selected challenge from available challenges
    setAvailableChallenges(prev => prev.filter((_, index) => index !== randomIndex))

    setChallenge(newChallenge)
  }

  return (
    <div className="flex flex-col items-center gap-12">
      <Button
        onClick={getRandomChallenge}
        className="
          relative overflow-hidden
          text-2xl sm:text-3xl font-bold
          h-24 sm:h-32 w-64 sm:w-80
          bg-gradient-to-r from-indigo-500 to-purple-600
          hover:from-purple-600 hover:to-indigo-500
          text-white
          rounded-lg
          transform hover:scale-105
          transition-all duration-300 ease-in-out
          border-2 border-white/20
          shadow-md hover:shadow-xl
        "
      >
        <span className="relative z-10">Dare Me</span>
        <span className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></span>
        <span className="absolute -inset-full top-0 block w-full h-full bg-gradient-to-r from-purple-400 to-indigo-500 opacity-30 filter blur-xl transform -skew-y-12 transition-all duration-300 ease-in-out"></span>
      </Button>
      {challenge && (
        <div 
          className="text-center font-semibold bg-white/90 dark:bg-gray-800/90 p-8 rounded-lg shadow-md max-w-md w-full backdrop-blur-sm transition-opacity duration-300 ease-in-out" 
          style={{animation: 'fadeIn 0.5s'}}
          role="region" 
          aria-live="polite"
        >
          <h2 className="text-2xl mb-4 text-indigo-600 dark:text-indigo-300">Your Challenge:</h2>
          <p className="text-xl text-gray-800 dark:text-gray-200">{challenge}</p>
        </div>
      )}
    </div>
  )
}