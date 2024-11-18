import React from 'react';
import Link from 'next/link';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <Background color="bg-background">
      <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-600 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="relative">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
          <div className="max-w-2xl mx-auto bg-white/10 rounded-lg p-8 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <IoIosMail className="w-6 h-6 text-purple-400" />
                <div>
                  <h2 className="text-xl font-semibold">Email</h2>
                  <div className="flex space-x-4">
                    <Link 
                      href="mailto:syedumairandrabi66@gmail.com" 
                      className="text-gray-300 hover:text-white transition"
                    >
                      syedumairandrabi66@gmail.com
                    </Link>
                    <Link 
                      href="mailto:help.intelligentai@gmail.com" 
                      className="text-gray-300 hover:text-white transition"
                    >
                      help.intelligentai@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaSquareXTwitter className="w-6 h-6 text-purple-400" />
                <div>
                  <h2 className="text-xl font-semibold">X (Twitter)</h2>
                  <Link 
                    href="https://twitter.com/UmairSyed10" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    @UmairSyed10
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaLinkedin className="w-6 h-6 text-purple-400" />
                <div>
                  <h2 className="text-xl font-semibold">LinkedIn</h2>
                  <Link 
                    href="https://www.linkedin.com/in/umair-andrabi-117a16151/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  </Background>
  );
}
