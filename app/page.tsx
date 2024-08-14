import React from "react";
import EmailForm from "@/components/EmailFom";
import { Toaster } from "react-hot-toast";
import WatchDemoButton from "@/components/WatchDemoButton";

const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const MicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const PinterestIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"></path>
    <path d="m10.7 19.9-.9-1.2a8 8 0 1 1 4.4 0l-.9 1.2L12 21Z"></path>
  </svg>
);
export default function Home() {
  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#19082B]">
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 xl:p-16 2xl:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2D0F47] to-[#19082B] opacity-50"></div>
          <div className="relative z-10 text-center max-w-4xl w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              FitCheck AI
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-6 lg:mb-10 text-purple-300">
              Your Personal AI Stylist
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 lg:mb-12">
              <FeatureCard icon={<CameraIcon />} title="Real-time Analysis" />
              <FeatureCard icon={<MicIcon />} title="Voice Interaction" />
              <FeatureCard
                icon={<PinterestIcon />}
                title="Pinterest Integration"
              />
            </div>
            <div className="italic text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-purple-200 mb-6">
              "Elevate your style game with AI precision"
            </div>
            <WatchDemoButton />
          </div>
        </div>
        <main className="lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 lg:py-0 bg-white">
          <div className="max-w-4xl w-full mx-auto text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#19082B] mb-4 leading-tight">
              Revolutionize Your Wardrobe
            </h1>
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 mb-8 lg:mb-12">
              <p className="mb-4">
                Join the waitlist for FitCheck AI and experience:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personalized outfit recommendations</li>
                <li>Real-time style analysis via webcam</li>
                <li>Voice-activated fashion advice</li>
                <li>Curated Pinterest fashion boards</li>
              </ul>
            </div>
            <EmailForm />
          </div>
        </main>
      </div>
    </>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div className="bg-[#2D0F47] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
    <div className="flex justify-center mb-4 text-purple-400">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold text-purple-300">
      {title}
    </h3>
  </div>
);
