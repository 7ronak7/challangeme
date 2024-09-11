import { ChallengeGenerator } from "./components/challenge-generator";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <main className="flex flex-col items-center">
        <ChallengeGenerator />
      </main>
    </div>
  );
}
