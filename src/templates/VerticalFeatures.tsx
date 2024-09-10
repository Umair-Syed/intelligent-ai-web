import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="The only AI app you need in your phone!"
    description="Stop wasting time on what AI can do better. You focus on what you do best."
  >
    <VerticalFeatureRow
      title="Minilistic Advanced AI"
      description="You ask your question and get the answer from the the most advanced AI out there."
      image="/assets/images/1.png"
      imageAlt="AI Chat"
      imageSmall={true}
    />
    {/* <VerticalFeatureRow
      title="Statistics"
      description="Get detailed insights of the time you spent. Check today's, weekly, monthly study time."
      image="/assets/images/5.png"
      imageAlt="Detailed statistics"
      reverse
    />
    <VerticalFeatureRow
      title="Leaderboard"
      description="Make friends and see who studied most weekly, monthly as well as today. Join friends when they are studying in any room."
      image="/assets/images/3.png"
      imageAlt="Detailed leaderboard"
    />
    <VerticalFeatureRow
      title="Distraction Free Solo Study"
      description="Study distraction free with minimalistic user interface."
      image="/assets/images/2.png"
      imageAlt="Minimalistic solo study"
      imageSmall={true}
      reverse
    /> */}
  </Section>
);

export { VerticalFeatures };
