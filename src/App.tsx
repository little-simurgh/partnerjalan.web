import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { DestinationCatalog } from './components/DestinationCatalog';
import { PackageModal } from './components/PackageModal';
import { FacilitiesSection } from './components/FacilitiesSection';
import { WhyUs } from './components/WhyUs';
import { CustomTripPlanner } from './components/CustomTripPlanner';
import { BookingFormSection } from './components/BookingFormSection';
import { GalleryTestimonials } from './components/GalleryTestimonials';
import { GoogleLocationReviews } from './components/GoogleLocationReviews';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';
import { Package, RegionData } from './types';

export default function App() {
  const [selectedRegionSlug, setSelectedRegionSlug] = useState<string>('all');

  // Modal State
  const [modalPkg, setModalPkg] = useState<Package | null>(null);
  const [modalRegion, setModalRegion] = useState<RegionData | null>(null);

  // Form Initial Prefill
  const [bookingPackageName, setBookingPackageName] = useState<string>('');
  const [bookingRegionName, setBookingRegionName] = useState<string>('');

  const handleOpenBooking = (packageName = '', regionName = '') => {
    setBookingPackageName(packageName);
    setBookingRegionName(regionName);
    const formEl = document.querySelector('#form-pemesanan');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageForModal = (pkg: Package, region: RegionData) => {
    setModalPkg(pkg);
    setModalRegion(region);
  };

  const handleCloseModal = () => {
    setModalPkg(null);
    setModalRegion(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans antialiased selection:bg-[#F27D26] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onNavigateCustomPlanner={() => {
          const el = document.querySelector('#custom-planner');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <Hero
          onSelectRegion={(regionSlug) => setSelectedRegionSlug(regionSlug)}
          onOpenBooking={() => handleOpenBooking()}
          onOpenCustomPlanner={() => {
            const el = document.querySelector('#custom-planner');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Key Stats Counter */}
        <StatsBanner />

        {/* Travel Catalog */}
        <DestinationCatalog
          selectedRegionSlug={selectedRegionSlug}
          onSelectRegionSlug={setSelectedRegionSlug}
          onSelectPackage={handleSelectPackageForModal}
          onBookPackage={(pkgName, regName) => handleOpenBooking(pkgName, regName)}
        />

        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Why Choose Us */}
        <WhyUs />

        {/* Custom Trip Calculator / AI Assistant */}
        <CustomTripPlanner
          onBookCustom={(customSummary) => handleOpenBooking(customSummary)}
        />

        {/* Booking Form Section */}
        <BookingFormSection
          initialPackageName={bookingPackageName}
          initialRegionName={bookingRegionName}
        />

        {/* Gallery & Testimonials */}
        <GalleryTestimonials />

        {/* Google Maps Location & Authentic Google Reviews */}
        <GoogleLocationReviews />

        {/* FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Package Detail Modal */}
      <PackageModal
        pkg={modalPkg}
        region={modalRegion}
        onClose={handleCloseModal}
        onBook={(pkgName, regName) => handleOpenBooking(pkgName, regName)}
      />

      {/* Floating WhatsApp Quick Widget */}
      <FloatingWA />
    </div>
  );
}
