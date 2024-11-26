import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background>
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-600 opacity-20 blur-[100px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link
                href="https://play.google.com/store/apps/details?id=com.tinytoollabs.chatai"
                className="text-white"
              >
                Download now
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="/contact"
                className="text-white"
              >
                Contact us
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side: Text content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Intelli Chat AI
                <span className="block text-3xl md:text-4xl text-gray-300 mt-2">Your AI companion</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10">
                All advanced AI features in one place. Take your productivity to next level!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.tinytoollabs.chatai"
                  className="flex items-center justify-center w-[200px] h-[60px]"
                >
                  <Image
                    src="/assets/images/google_playstore.png"
                    alt="Google Play Badge"
                    width={200}
                    height={60}
                    className="h-full w-full object-contain"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/in/app/ai-chat-bot-intelli-ai-chat/id6670697841?platform=iphone"
                  className="flex items-center justify-center w-[200px] h-[60px]"
                >
                  <Image
                    src="/assets/images/app_store_download.svg"
                    alt="Apple Logo"
                    width={200}
                    height={60}
                    className="h-full w-full object-contain"
                  />
                </Link>
              </div>
            </div>
            
            {/* Right side: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[100%] max-w-[800px]">
                <Image
                  src="/assets/images/hero_image.png"
                  alt="App Screenshot"
                  width={800}
                  height={800}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  </Background>
);

export { Hero };