export default function PrivacyPolicy() {
  return (
    <section className="legal-section mt-4 px-24 pb-10 pt-4">
      <h2>Intelli Chat AI</h2>
      <h1>Privacy Policy</h1>
      <p>Last updated: September 7, 2024</p>

      <h2 className="topic">1. Introduction</h2>
      <p>
        Welcome to Intelli Chat AI (“we,“ “our,“ or “us“). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our mobile application and related services (collectively, the “Service“).
      </p>

      <h2 className="topic">2. Information We Collect</h2>
      <h3>2.1 Information You Provide</h3>
      <ul>
        <li>Account information: When you create an account, we collect your email address and password.</li>
        <li>User-generated content: This includes text messages, images, and audio files you create or upload while using the Services. Camera is used for capturing images for Vision AI.</li>
        <li>Profile information: If you choose to add an avatar or other profile details, we collect and store this information.</li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li>Usage data: We collect information about how you interact with our Service, including the features you use, the time and duration of your sessions, and your device information.</li>
        <li>Analytics data: We use Mixpanel to collect and analyze usage patterns and improve our Service. We don&apos;t store or capture your personal data like email or name etc for analytics purpose.</li>
        <li>Device identifiers: We collect device advertising identifiers to deliver personalized features, analyze app performance, and improve user experience. You can reset or limit this identifier through your device settings.</li>
      </ul>

      <h3>2.3 Information from Third-Party Services</h3>
      <p>We use various third-party APIs to provide our services, including:</p>
      <ul>
        <li>OpenAI, Anthropic, Stability, Flux and Google Gemini for AI-powered features</li>
        <li>Firebase for authentication, data storage, and cloud storage</li>
      </ul>
      <p>These services may collect and process your data according to their own privacy policies.</p>

      <h2 className="topic">3. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Provide and maintain our Service</li>
        <li>Improve and personalize your experience</li>
        <li>Develop new features and services</li>
        <li>Communicate with you about our Service</li>
        <li>Ensure the security and proper functioning of our Service</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="topic">4. Data Sharing and Disclosure</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>Third-party service providers that help us operate our Service</li>
        <li>Other users when you choose to share AI-generated content within the app</li>
        <li>Law enforcement or other authorities if required by applicable law</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2 className="topic">5. Data Retention and Deletion</h2>
      
      <h3>5.1 How Long We Keep Your Data</h3>
      <p>We retain different types of data for different periods based on the purpose and requirements:</p>
      <ul>
        <li>Account Information:
          <ul>
            <li>Stored in Firebase Authentication and Firestore while your account is active</li>
            <li>Deleted immediately upon account deletion request</li>
            <li>You can request account deletion at any time through the app settings or by contacting us</li>
          </ul>
        </li>
        <li>User-Generated Content:
          <ul>
            <li>Stored in Firebase Firestore while your account is active</li>
            <li>You can manually delete individual content items at any time</li>
          </ul>
        </li>
        <li>Usage Data:
          <ul>
            <li>Basic analytics data is retained in Mixpanel as per their retention policy</li>
            <li>Firebase Analytics data is retained according to Google&apos;s standard retention period (currently 14 months)</li>
            <li>You can opt-out of analytics collection as described in the Your Rights and Choices section</li>
          </ul>
        </li>
      </ul>

      <h3>5.2 Account Deletion</h3>
      <p>When you delete your account:</p>
      <ul>
        <li>Your account information is immediately and permanently deleted from Firebase Authentication</li>
        <li>All your personal data in Firestore is automatically deleted</li>
        <li>This deletion is permanent and cannot be undone</li>
        <li>Any data you shared publicly within the app may remain visible to other users until you manually delete it</li>
      </ul>

      <h3>5.3 Data Backup and Recovery</h3>
      <p>For service reliability and security:</p>
      <ul>
        <li>Data is stored in Firebase Firestore and Firebase Storage and transmitted over secure connections</li>
      </ul>

      <h3>5.4 Legal Requirements</h3>
      <p>We may retain certain data longer if required by law:</p>
      <ul>
        <li>To comply with legal obligations</li>
        <li>To resolve disputes</li>
        <li>To enforce our agreements</li>
        <li>To protect against fraudulent or illegal activity</li>
      </ul>

      <h2 className="topic">6. Your Rights and Choices</h2>
      <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.</p>

      <h3>6.1 Opt-Out Rights</h3>
      <p>We respect your right to control your data. You have several options to opt-out of data collection and targeted advertising:</p>

      <h4>Targeted Advertising Opt-Out</h4>
      <ul>
        <li>AdMob (Google) Advertising:
          <ul>
            <li>Open your device&apos;s settings</li>
            <li>For Android: Go to Settings → Google → Ads → Delete advertising ID</li>
            <li>For iOS: Go to Settings → Privacy → Advertising → Turn off “Personalized Ads“</li>
            <li>You can also reset your advertising ID at any time through these settings</li>
          </ul>
        </li>
      </ul>

      <h4>Analytics Data Collection Opt-Out</h4>
      <ul>
        <li>Mixpanel Analytics:
          <ul>
            <li>Send an email to syedumairandrabi66@gmail.com with the subject “Analytics Opt-Out“</li>
            <li>Include your device identifier or email associated with your account</li>
            <li>We will process your opt-out request within 7 business days</li>
          </ul>
        </li>
      </ul>

      <h4>Profiling and Automated Decision-Making</h4>
      <p>We do not currently engage in profiling that produces legal or similarly significant effects. However, we do use data to personalize your experience. You can:</p>
      <ul>
        <li>Disable personalization features in the app settings</li>
        <li>Contact us to request limitation of automated processing of your data</li>
        <li>Opt-out of all non-essential data processing by emailing us</li>
      </ul>

      <h4>Data Sale Opt-Out</h4>
      <p>While we do not sell your personal information in the traditional sense, sharing data with third-party services may be considered a “sale“ under certain state laws. You can:</p>
      <ul>
      <li>Opt-out of all non-essential data processing by emailing us</li>
      </ul>

      <h3>6.2 California Privacy Rights</h3>
      <p>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) regarding your personal information:</p>
      <ul>
        <li>Right to Know: You have the right to request information about the personal information we collect, use, disclose, and sell, including:
          <ul>
            <li>Categories of personal information we collect</li>
            <li>Sources from which we collect personal information</li>
            <li>Our purpose for collecting or sharing personal information</li>
            <li>Categories of third parties with whom we share personal information</li>
            <li>Specific pieces of personal information we have collected about you</li>
          </ul>
        </li>
        <li>Right to Delete: You can request deletion of personal information we collected from you, subject to certain exceptions.</li>
        <li>Right to Opt-Out: You have the right to opt-out of the sale of your personal information. However, we do not currently sell personal information.</li>
        <li>Right to Non-Discrimination: We will not discriminate against you for exercising any of your CCPA rights.</li>
      </ul>

      <p>To exercise your rights under CCPA:</p>
      <ul>
        <li>Email us at syedumairandrabi66@gmail.com</li>
        <li>We will respond to verifiable consumer requests within 45 days</li>
        <li>You may make a request twice within a 12-month period</li>
      </ul>

      <h3>6.3 Virginia Privacy Rights (VCDPA)</h3>
      <p>If you are a Virginia resident, you have specific rights under the Virginia Consumer Data Protection Act (VCDPA), including:</p>
      <ul>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccuracies in your personal data</li>
        <li>Right to delete personal data</li>
        <li>Right to obtain a copy of your personal data</li>
        <li>Right to opt out of:
          <ul>
            <li>Targeted advertising</li>
            <li>Sale of personal data</li>
            <li>Profiling for decisions that produce legal effects</li>
          </ul>
        </li>
      </ul>

      <p>To exercise your VCDPA rights:</p>
      <ul>
        <li>Email us at syedumairandrabi66@gmail.com</li>
        <li>Use the privacy controls in your app settings</li>
        <li>We will respond to your request within 45 days</li>
      </ul>

      <p>To protect your privacy and maintain security, we take steps to verify your identity before granting access to personal information or complying with deletion requests.</p>

      <h2 className="topic">7. Children&apos;s Privacy</h2>
      <p>Our Service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

      <h2 className="topic">8. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last updated“ date.</p>

      <h2 className="topic">9. Contact Us and Data Protection Officer</h2>
      
      <h3>9.1 General Contact Information</h3>
      <p>If you have any general questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:syedumairandrabi66@gmail.com">syedumairandrabi66@gmail.com</a>.</p>

      <h3>9.2 Data Protection Officer</h3>
      <p>For specific concerns about your personal data or to exercise your privacy rights, you can contact our Data Protection Officer (DPO):</p>
      <ul>
        <li>Name: Syed Umair Andrabi</li>
        <li>Email: <a href="mailto:syedumairandrabi66@gmail.com">syedumairandrabi66@gmail.com</a></li>
        <li>Response Time: Within 48 hours</li>
      </ul>

      <p>Our DPO is responsible for:</p>
      <ul>
        <li>Overseeing data protection strategy and implementation</li>
        <li>Ensuring compliance with data protection laws</li>
        <li>Handling data protection questions from users and privacy regulators</li>
        <li>Managing data protection impact assessments</li>
        <li>Acting as a point of contact for all privacy-related concerns</li>
      </ul>

      <p>You can contact our DPO regarding:</p>
      <ul>
        <li>Requests to access your personal data</li>
        <li>Requests to correct or delete your data</li>
        <li>Questions about how we protect your privacy</li>
        <li>Concerns about our data handling practices</li>
        <li>Any other privacy-related matters</li>
      </ul>
    </section>
  );
}