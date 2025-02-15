import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useData } from "../context/DataContext";
export function WelcomeConfetti() {
  const {
    profile
  } = useData();
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };
    const confettiColors = ["#9333EA", "#A855F7", "#7E22CE"];
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: {
          x: 0
        },
        colors: confettiColors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: {
          x: 1
        },
        colors: confettiColors
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-8 text-center max-w-md">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">
          Welcome to BookStore! 🎉
        </h2>
        <p className="text-gray-600">
          Hi {profile.fullName.split(" ")[0]}, we're excited to have you here!
          Start exploring our collection of academic books tailored just for
          you.
        </p>
      </div>
    </div>;
}