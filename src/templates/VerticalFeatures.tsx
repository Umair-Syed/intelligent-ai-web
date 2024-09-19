import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="The only AI app you need in your phone!"
    description="Stop wasting time on what AI can do better. You focus on what you do best."
  >
    <VerticalFeatureRow
      title="All trending AI models"
      description="Access all the trending advanced AI models in one place. From Claude and GPT-4 to Gemini Pro, Flux, Stable Image Ultra, and DALL-E 3 - we've got you covered! 🎭"
      image="/assets/images/models.png"
      imageAlt="Model Marketplace"
      imageSmall={true}
    />
    
    <VerticalFeatureRow
      title="Conversation to PDF"
      description="Transform your AI chats into professional-looking PDFs with a click. Edit your text before conversion. With just a click, transform your conversations into polished PDFs. Tweak and perfect your text before conversion, and voila! Imagine resumes, applications, cover letters, and more - all ready in seconds. ✨"
      image="/assets/images/conversation-to-pdf.png"
      imageAlt="Conversation to PDF"
      imageSmall={true}
      reverse
    />
    
    <VerticalFeatureRow
      title="Creative Spaces"
      description="Share and explore the most imaginative AI responses in our community spaces. Get inspired daily! 🌈"
      image="/assets/images/creative-spaces.png"
      imageAlt="Creative Spaces"
      imageSmall={true}
    />
    
    <VerticalFeatureRow
      title="Sleek Interface"
      description="Navigate with ease through our minimalistic, user-friendly design. 🎨"
      image="/assets/images/sleek-interface.png"
      imageAlt="Sleek Interface"
      imageSmall={true}
      reverse
    />
  </Section>
);

export { VerticalFeatures };