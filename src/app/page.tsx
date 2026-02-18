import { Header } from '@/components/header/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/features/FeaturesSection';
import { HowItWorks } from '@/components/how-it-works/HowItWorks';
import { Footer } from '@/components/footer/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      {/* Spacer to simulate long page content */}
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: '#0f172a' }}>
        <h2 className="text-3xl font-bold mb-4">Our Culture, Our Strength.</h2>
        <p className="text-gray-600 mb-8">We believe in empathy, integrity, and innovation. Kovon’s team is passionate about solving one of the most important challenges — making global jobs accessible with trust. Our principles guide every decision we make.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">We're Hiring</button>
      </Box>
      <Footer />
    </Box>
  );
}
