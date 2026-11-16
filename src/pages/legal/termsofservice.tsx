import Link from 'next/link';

// Trader details must match the Google Play developer account (same as the
// Pomoroom terms).
const OPERATOR_NAME = 'Syed Umair Andrabi';
const OPERATOR_LOCATION = 'Bagh-e-Mehtab, Srinagar 190019, India';
const GOVERNING_LAW = 'India';
const CONTACT_EMAIL = 'syedumairandrabi66+chatai@gmail.com';
const ALT_CONTACT_EMAIL = 'umair@ryzeapps.com';

export default function Terms() {
  return (
    <section className="legal-section mt-4 px-4 md:px-8 lg:px-24 pb-10 pt-4">
      <h2>Intelli Chat AI</h2>
      <h1>Terms of Service</h1>
      <p>Last updated: November 16, 2026</p>

      <ol>
        <li>
          <h2>Acceptance of Terms</h2>
          <p>
            1.1. These Terms of Service (the &ldquo;Terms&rdquo;) govern your use of the Intelli Chat AI mobile app and related services (the &ldquo;Service&rdquo;), provided by {OPERATOR_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By creating an account or using the Service, you agree to these Terms and to our <Link href="/legal/privacy-policy/">Privacy Policy</Link>. If you do not agree, do not use the Service.
          </p>
          <p>
            1.2. You must be at least 13 years old to use the Service. If you are under the age of majority where you live, you may use the Service only with the permission of a parent or legal guardian who agrees to these Terms.
          </p>
        </li>

        <li>
          <h2>Description of Service</h2>
          <p>
            2.1. Intelli Chat AI is an AI assistant app. Its features include AI text chat with a choice of AI models and topic &ldquo;experts&rdquo;, AI image generation, questions about photos and images, chat with your own PDF, Word and Excel documents, voice input, text-to-speech, and saving responses.
          </p>
          <p>
            2.2. The AI models, features, limits and credit costs available in the app may change over time. We may add, change or remove features, or switch to different AI providers, without notice.
          </p>
        </li>

        <li>
          <h2>Your Account</h2>
          <p>
            3.1. You need an account to use most features. You are responsible for keeping your sign-in details secure and for activity on your account.
          </p>
          <p>
            3.2. You agree to provide accurate information and not to create accounts to obtain extra free credits or otherwise get around limits.
          </p>
          <p>
            3.3. You can delete your account at any time in the app under Settings &gt; Delete Account. Deleting your account removes your profile and your access to the Service. Unused credits and any remaining subscription period are lost, and deleting your account does not cancel a store subscription (see section 8). How we handle your data after deletion is described in the Privacy Policy.
          </p>
          <p>
            3.4. You can also request deletion of your account and associated personal data without the app. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the email address linked to your account with the subject &ldquo;Intelli Chat AI account deletion&rdquo;. We may ask you to verify that you own the account before acting on your request. Do not send your password.
          </p>
        </li>

        <li>
          <h2>AI-Generated Output</h2>
          <p>
            4.1. Responses, images and other output are generated automatically by AI models. Output can be inaccurate, incomplete, out of date or offensive, and may be similar to output generated for other users.
          </p>
          <p>
            4.2. Output is not professional advice. Do not rely on it for medical, legal, financial, safety or other important decisions without checking with a qualified professional.
          </p>
          <p>
            4.3. You are responsible for how you use output, including checking it before sharing or publishing it and making sure your use does not infringe anyone&apos;s rights.
          </p>
        </li>

        <li>
          <h2>Your Content</h2>
          <p>
            5.1. &ldquo;Your Content&rdquo; means the prompts, messages, photos, documents and voice input you submit, and the output generated for you. As between you and us, you keep any rights you have in Your Content.
          </p>
          <p>
            5.2. You give us a worldwide, non-exclusive, royalty-free licence to store, process and transmit Your Content only as needed to provide, secure and support the Service. This includes sending it to the AI providers listed in section 9 to generate a response.
          </p>
          <p>
            5.3. You confirm that you have the rights needed to submit Your Content. Do not submit sensitive personal information about yourself or others unless you are comfortable with it being processed as described in the Privacy Policy.
          </p>
        </li>

        <li>
          <h2>Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <p>6.1. break any applicable law, or help anyone else do so;</p>
          <p>6.2. create or request sexual content involving minors, or any content that sexualises, exploits or endangers children;</p>
          <p>6.3. create sexually explicit content, or intimate or sexual images of real people without their consent;</p>
          <p>6.4. create images, audio or text that impersonate a real person or are designed to deceive people, such as fake news, fraud or scams;</p>
          <p>6.5. harass, threaten, bully or promote violence or hatred against any person or group;</p>
          <p>6.6. promote terrorism or violent extremism, or give instructions for weapons capable of mass harm;</p>
          <p>6.7. create malware, spam or phishing content, or attack any system;</p>
          <p>6.8. infringe intellectual property, privacy or other rights of others;</p>
          <p>6.9. get around safety filters, credit limits or other technical limits, or access the Service by automated means; or</p>
          <p>6.10. copy, resell, reverse engineer or try to extract the source code or the underlying AI models of the Service, except where the law allows it.</p>
          <p>
            6.11. To report content generated by the Service that you believe is harmful or unlawful, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may refuse requests, remove content, or suspend or close accounts that break these rules.
          </p>
        </li>

        <li>
          <h2>Credits</h2>
          <p>
            7.1. Most AI features use credits. The cost of each action is shown in the app and may differ by feature and AI model.
          </p>
          <p>
            7.2. Daily credits are free credits given each day. They reset daily and unused daily credits do not carry over.
          </p>
          <p>
            7.3. Purchased credit packs add credits that do not expire while your account is active.
          </p>
          <p>
            7.4. Promotional credits, such as Share &amp; Earn rewards for posting about the app on a social platform, can be claimed once per platform. Claims are reviewed manually, the post must be public and have some engagement, and credits are usually added within a few days. We may refuse claims that do not meet these conditions, and we may change or end promotions at any time.
          </p>
          <p>
            7.5. Credits have no cash value. They cannot be transferred, sold or exchanged for money, and they are lost if your account is deleted or closed for breaking these Terms.
          </p>
        </li>

        <li>
          <h2>Subscriptions and Purchases</h2>
          <p>
            8.1. Purchases are made through Google Play or the Apple App Store and are subject to that store&apos;s terms. Prices are shown in the app before you buy.
          </p>
          <p>
            8.2. A premium subscription gives you the daily credit allowance shown at the time of purchase. The discount on annual and monthly plans is calculated against the weekly plan.
          </p>
          <p>
            8.3. Subscriptions renew automatically. Your account is charged for renewal within 24 hours before the end of the current period unless you turn off auto-renew at least 24 hours before it ends.
          </p>
          <p>
            8.4. Uninstalling the app or deleting your account does not cancel a subscription. To cancel, open your device&apos;s app store, make sure you are signed in to the account you used to subscribe, go to Subscriptions, select this subscription and tap Cancel.
          </p>
          <p>
            8.5. Where offered, a lifetime plan is a one-time purchase that gives the daily credit allowance shown at the time of purchase for as long as we provide the Service.
          </p>
          <p>
            8.6. Refunds are handled by Google Play or the App Store under their refund policies. Credits and subscription benefits are digital content supplied immediately after purchase. Where the law gives you a right to withdraw from a purchase, you agree that it ends once delivery starts, to the extent the law allows.
          </p>
        </li>

        <li>
          <h2>Third-Party Services</h2>
          <p>
            9.1. The Service relies on third-party providers, including OpenAI, Anthropic and Google (Gemini) for AI responses, fal.ai for image generation, Google Firebase for accounts, storage and app infrastructure, RevenueCat for purchases, Mixpanel for analytics and OneSignal for notifications. Their handling of your data is described in our Privacy Policy and in their own terms and policies.
          </p>
          <p>
            9.2. We are not responsible for third-party services or for interruptions caused by them.
          </p>
        </li>

        <li>
          <h2>Intellectual Property</h2>
          <p>
            10.1. The Service, including the app, its design, text and software, is owned by {OPERATOR_NAME} or its licensors and is protected by intellectual property laws. These Terms do not give you any rights in it except the right to use the Service as described here.
          </p>
        </li>

        <li>
          <h2>Suspension and Termination</h2>
          <p>
            11.1. You can stop using the Service and delete your account at any time.
          </p>
          <p>
            11.2. We may suspend or close your account if you seriously or repeatedly break these Terms, if required by law, or to protect users or the Service. Where reasonable, we will tell you why.
          </p>
        </li>

        <li>
          <h2>Disclaimer</h2>
          <p>
            12.1. The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the extent the law allows, we do not promise that the Service will be uninterrupted, error-free or that output will be accurate or fit for a particular purpose.
          </p>
        </li>

        <li>
          <h2>Limitation of Liability</h2>
          <p>
            13.1. To the fullest extent permitted by law, {OPERATOR_NAME} is not liable for any indirect, incidental, special, consequential or punitive damages, or for loss of profits, revenue, data or goodwill, arising from your use of or inability to use the Service.
          </p>
          <p>
            13.2. To the extent the law allows, our total liability to you for any claim relating to the Service is limited to the amount you paid us in the 12 months before the claim.
          </p>
          <p>
            13.3. Nothing in these Terms limits or excludes any rights you have as a consumer under the laws of the country where you live that cannot be limited or excluded by contract.
          </p>
        </li>

        <li>
          <h2>Changes to These Terms</h2>
          <p>
            14.1. We may update these Terms from time to time. We will change the &ldquo;Last updated&rdquo; date above, and for material changes we will give at least 30 days&apos; notice in the app or by email before they take effect. If you keep using the Service after changes take effect, you accept the updated Terms.
          </p>
        </li>

        <li>
          <h2>Governing Law</h2>
          <p>
            15.1. These Terms are governed by the laws of {GOVERNING_LAW}, without regard to conflict of law rules. If you are a consumer, you also keep the protection of the mandatory laws of the country where you live, and you may bring claims in the courts there.
          </p>
        </li>
      </ol>

      <h2>Trader Information and Contact</h2>
      <p>
        Trader and service provider: {OPERATOR_NAME}
        <br />
        Location: {OPERATOR_LOCATION}
        <br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        Alternative email: <a href={`mailto:${ALT_CONTACT_EMAIL}`}>{ALT_CONTACT_EMAIL}</a>
      </p>
      <p>
        For questions about these Terms, service issues or complaints, contact us at either email address above.
      </p>
    </section>
  );
}
