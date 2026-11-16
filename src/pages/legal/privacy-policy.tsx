import Link from 'next/link';

// Trader details must match the Google Play developer account and the Terms.
const OPERATOR_NAME = 'Syed Umair Andrabi';
const OPERATOR_LOCATION = 'Bagh-e-Mehtab, Srinagar 190019, India';
const CONTACT_EMAIL = 'syedumairandrabi66+chatai@gmail.com';
const ALT_CONTACT_EMAIL = 'umair@ryzeapps.com';

const Email = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function PrivacyPolicy() {
  return (
    <section className="legal-section mt-4 px-4 md:px-8 lg:px-24 pb-10 pt-4">
      <h2>Intelli Chat AI</h2>
      <h1>Privacy Policy</h1>
      <p>Last updated: November 16, 2026</p>

      <h2 className="topic">1. Introduction</h2>
      <p>
        This Privacy Policy explains how {OPERATOR_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses and shares information when you use the Intelli Chat AI mobile app and related services (the &ldquo;Service&rdquo;). It should be read together with our <Link href="/legal/termsofservice/">Terms of Service</Link>.
      </p>

      <h2 className="topic">2. Information We Collect</h2>
      <h3>2.1 Information you give us</h3>
      <ul>
        <li>Account information: your email address and name when you sign up with email and password, Google or Apple. If you use email and password, the password is handled by Firebase Authentication and we never see it.</li>
        <li>Profile information: a nickname or profile picture, if you add one.</li>
        <li>Prompts and chats: the messages you send and the responses you receive.</li>
        <li>Photos and images: images you take with the camera or pick from your gallery to ask questions about them, and images you generate.</li>
        <li>Documents: PDF, Word and Excel files you choose to chat with.</li>
        <li>Voice: speech you dictate using voice input.</li>
        <li>Saved responses: responses and images you choose to save.</li>
        <li>Feedback and support: ratings, feedback and emails you send us, including Share &amp; Earn claims. These include your email address and account ID.</li>
      </ul>

      <h3>2.2 Information collected automatically</h3>
      <ul>
        <li>Account and purchase data: your account ID, credit balances, plan type, subscription status and purchase history.</li>
        <li>Usage and analytics data: which features you use and when, app version and basic device information, collected with Firebase Analytics and Mixpanel. We do not send your name or email address to Mixpanel.</li>
        <li>Crash and diagnostic data: crash reports and error logs from Firebase Crashlytics.</li>
        <li>Device and security data: device identifiers, push notification tokens, and app integrity checks from Firebase App Check.</li>
        <li>Server logs: our server records requests made through it, including the IP address, account ID, email address and request content (see section 3.2).</li>
      </ul>

      <h2 className="topic">3. How Your Information Is Processed</h2>
      <h3>3.1 Where your content goes</h3>
      <ul>
        <li>Chat history is stored on your device. It is not stored on our servers.</li>
        <li>To generate a response, your prompt, the recent conversation and any image, document text or voice-to-text you include are sent through our server to the AI provider for the model you choose (see section 5).</li>
        <li>When you chat with a document, the file is read on your device. Its text is split into sections and sent to OpenAI to create search embeddings and answers. The search index is stored on your device and replaced when you open another document.</li>
        <li>Voice input is converted to text by your device&apos;s speech recognition service. On Android this is usually provided by Google.</li>
        <li>Read-aloud uses either your device&apos;s text-to-speech or, if you choose an AI voice, OpenAI&apos;s text-to-speech service.</li>
        <li>Saved responses, and their images, are stored in Firebase (Cloud Firestore and Cloud Storage) so they are available on your account.</li>
      </ul>

      <h3>3.2 Our server</h3>
      <p>
        Requests to AI providers go through our server, hosted on Google Cloud. It checks that you are signed in before passing the request on. Its logs include the IP address, account ID, email address and request content. They are used to run the Service, fix problems and prevent abuse, and are kept for up to 30 days.
      </p>

      <h3>3.3 Why we use your information</h3>
      <ul>
        <li>To provide the Service: generate responses and images, run document chat, keep track of credits and purchases, and sync saved responses.</li>
        <li>To keep the Service secure and prevent fraud and abuse, including misuse of free credits.</li>
        <li>To understand how the app is used and to fix crashes and improve features.</li>
        <li>To send notifications, such as credit and account updates, if you allow notifications.</li>
        <li>To answer your feedback and support requests and process Share &amp; Earn claims.</li>
        <li>To meet legal obligations and enforce our Terms.</li>
      </ul>
      <p>
        Where the law requires a legal basis, we rely on performance of our contract with you (providing the Service), our legitimate interests (security, fixing problems and improving the app), your consent (for example notifications, which you can turn off at any time in your device settings), and legal obligations.
      </p>

      <h2 className="topic">4. Advertising</h2>
      <p>
        The current version of the app does not show ads. The app still includes the Google Mobile Ads SDK and the advertising ID permission from a former rewarded-ads feature. You can reset or delete your advertising ID at any time: on Android, go to Settings &gt; Google &gt; Ads; on iOS, go to Settings &gt; Privacy &amp; Security &gt; Tracking.
      </p>

      <h2 className="topic">5. Who We Share Information With</h2>
      <p>We share information only with service providers that help us run the Service, as described below:</p>
      <ul>
        <li>AI providers, to generate responses: OpenAI (chat, document embeddings and AI voices), Anthropic (Claude models), Google (Gemini models) and fal.ai (image generation with Flux and Stable Diffusion models). They receive the content needed to answer each request, under their API terms and privacy policies.</li>
        <li>Google Firebase and Google Cloud: sign-in, database, file storage, analytics, crash reporting, remote configuration, app integrity checks and hosting for our server.</li>
        <li>Google Sign-In and Sign in with Apple, if you use them to sign in.</li>
        <li>RevenueCat, Google Play and the Apple App Store: processing and verifying purchases and subscriptions. RevenueCat receives your account ID and purchase history. We do not receive your payment card details.</li>
        <li>Mixpanel: product analytics.</li>
        <li>OneSignal: push notifications. OneSignal receives your account ID, a push token and whether you have a premium or lifetime plan.</li>
        <li>Authorities, if the law requires it, or to protect the rights, safety or property of our users, the public or us.</li>
        <li>A buyer or successor, if the Service is sold or transferred. We will tell you before your information becomes subject to a different privacy policy.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it for cross-context behavioural advertising.
      </p>

      <h2 className="topic">6. International Transfers</h2>
      <p>
        We are based in India, and our providers process data in other countries, including the United States. Where the law requires it, we rely on safeguards such as the providers&apos; standard contractual clauses for these transfers.
      </p>

      <h2 className="topic">7. Data Retention and Deletion</h2>
      <h3>7.1 How long we keep data</h3>
      <ul>
        <li>Account, profile, credit and purchase records: while your account is active.</li>
        <li>Saved responses: until you delete them or delete your account.</li>
        <li>Chat history and document indexes: on your device until you delete them or uninstall the app.</li>
        <li>Server logs: up to 30 days.</li>
        <li>Analytics and crash data: according to the providers&apos; retention settings. Firebase Analytics keeps data for up to 14 months.</li>
        <li>Purchase records we must keep for tax or accounting reasons: as long as the law requires.</li>
      </ul>

      <h3>7.2 Deleting your account</h3>
      <p>
        You can delete your account in the app under Settings &gt; Delete Account. You can also email <Email /> from the email address linked to your account, with the subject &ldquo;Intelli Chat AI account deletion&rdquo;, without reinstalling the app. We may ask you to verify that you own the account. Do not send your password.
      </p>
      <p>
        When you delete your account, your sign-in account and profile are deleted immediately. Other data linked to your account, such as saved responses and their images, credit records, and Share &amp; Earn and feedback records, is deleted within 30 days, except data we must keep by law. Deleting your account does not cancel a store subscription; cancel it in Google Play or the App Store.
      </p>
      <p>
        Spaces, a former community feature, is no longer available. If you posted in Spaces and want those posts removed, email us.
      </p>

      <h2 className="topic">8. Your Rights and Choices</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or get a copy of your personal information, to object to or restrict some processing, to withdraw consent, and to complain to your local data protection authority. This includes rights under the GDPR and UK GDPR, India&apos;s Digital Personal Data Protection Act, and US state laws such as the CCPA and VCDPA. We will not treat you differently for exercising these rights.
      </p>
      <ul>
        <li>To make a request, email <Email />. We may need to verify your identity, and we will reply within the time the law requires, usually within 30 days.</li>
        <li>To opt out of Mixpanel analytics, email us with the subject &ldquo;Analytics Opt-Out&rdquo; from the email address linked to your account.</li>
        <li>To stop notifications, turn them off for Intelli Chat AI in your device settings.</li>
        <li>To delete individual saved responses, delete them in the app. To clear chat history, delete the conversations in the app or uninstall it.</li>
      </ul>

      <h2 className="topic">9. Security</h2>
      <p>
        Data is sent over encrypted connections, access to our server requires a signed-in account, and our databases are protected by access rules. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2 className="topic">10. Children&apos;s Privacy</h2>
      <p>
        The Service is not intended for children under 13, and we do not knowingly collect personal information from them. If you believe a child under 13 has given us personal information, email us and we will delete it.
      </p>

      <h2 className="topic">11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the new version on this page and change the &ldquo;Last updated&rdquo; date. If the changes are significant, we will also tell you in the app or by email.
      </p>

      <h2 className="topic">12. Contact Us</h2>
      <p>
        Data controller: {OPERATOR_NAME}
        <br />
        Location: {OPERATOR_LOCATION}
        <br />
        Email: <Email />
        <br />
        Alternative email: <a href={`mailto:${ALT_CONTACT_EMAIL}`}>{ALT_CONTACT_EMAIL}</a>
      </p>
      <p>Contact us at either email address with questions or privacy requests.</p>
    </section>
  );
}
