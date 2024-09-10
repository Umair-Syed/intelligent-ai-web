import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroTwoButton } from '../hero/HeroTwoButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background>
    <div className="relative overflow-hidden">
      {/* Subtle right-side glow effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute -right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-900 opacity-10 blur-[100px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link
                href="https://play.google.com/store/apps/details?id=com.pomoroom.pomoroom"
                className="text-white"
              >
                Download now
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
          <HeroTwoButton
            title={
              <>
                {'Intelligent Chat AI\n'}
                <span className="text-gray-300">Your AI companion</span>
              </>
            }
            description="All advanced AI features in one place. Take your productivity to next level!"
            buttonOne={
              <Link
                href="https://play.google.com/store/apps/details?id=com.tinytoollabs.chatai"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Google Play Badge"
                  width={240}
                  height={90}
                  className="h-auto w-60"
                />
              </Link>
            }
            buttonTwo={
              <Link
                href="#"
                className="flex max-w-[240px] items-center justify-center rounded-lg border-2 border-[#9D9D9D] bg-black px-6 py-4"
              >
                <Image
                  src="/Apple_logo_white.png"
                  alt="Apple Logo"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                <span className="ml-4 text-lg font-bold text-white">
                  Coming Soon
                </span>
              </Link>
            }
          />
        </Section>
      </div>
    </div>
  </Background>
);

export { Hero };