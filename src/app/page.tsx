"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Crown, Diamond, Droplet, Lightbulb, Mail, Palette, Quote, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Collection",          id: "#collection"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EcfUfFHrF6fpG4DgHQ6LCnEKwF/uploaded-1780482885397-dcnri1n7.png"
      logoAlt="Hortus Jannat Firenze Logo"
      brandName="Hortus Jannat Firenze"
      button={{
        text: "Shop Now",        href: "#products"}}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "glowing-orb"}}
      title="Experience Luxury in Every Drop"
      description="At Hortus Jannat Firenze, we curate exclusive niche perfumes for every connoisseur, blending world-class quality with the artistry of Italian perfumery."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-perfume-bottle-still-life_23-2149234380.jpg",          imageAlt: "Luxury Perfume Bottle with Gold Accents"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-product-container-with-art-nouveau-inspired-sun-relief-background_23-2151420680.jpg",          imageAlt: "Premium Perfume Bottle Studio Shot"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/liquor-square-bottle_176474-6075.jpg",          imageAlt: "Handcrafted Italian Perfume"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-empty-perfume-bottle_23-2149234374.jpg",          imageAlt: "Exclusive Perfume Detailed Shot"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-arrangement-argan-oil-care-product_23-2148955834.jpg",          imageAlt: "Luxury Perfume on Dark Background"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/japanese-bottle-cups_23-2149869744.jpg",          imageAlt: "Niche Perfume Bottle Luxurious Display"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-product-container-with-art-nouveau-inspired-sun-relief-background_23-2151420694.jpg",          imageAlt: "Elegant Perfume in Luxurious Setting"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sustainably-produced-alcoholic-beverage_23-2150163031.jpg",          imageAlt: "Premium Niche Perfume Bottle"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bottle-with-perfume-plants-purple-background-top-view_185193-162135.jpg",          imageAlt: "Exclusive Perfume for Daily Wear"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-arrangement-with-dried-fruits-flowers_23-2151367223.jpg",          imageAlt: "Traditional Italian Perfume"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-plastic-bottle-line_23-2148136623.jpg",          imageAlt: "Versatile Perfume Sizes Display"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-cosmetic-products_23-2149163128.jpg",          imageAlt: "Perfume Bottle with Gold and Royal Blue"},
      ]}
      tag="Hortus Jannat Firenze"
      tagIcon={Sparkles}
      tagAnimation="blur-reveal"
      buttons={[
        {
          text: "Explore Collection",          href: "#products"},
        {
          text: "Our Story",          href: "#about"},
      ]}
      buttonAnimation="slide-up"
      carouselPosition="right"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stylish-successful-woman-enjoying-coffee-office_23-2147670335.jpg",          alt: "Satisfied customer, elegant woman"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-blue-suit-posing-gray_158538-11148.jpg",          alt: "Happy customer, man smiling"},
        {
          src: "http://img.b2bpic.net/free-photo/redhaired-young-caucasian-woman-silver-dress-smiles-camera-holds-bucket-champagne-pink-background_197531-32069.jpg",          alt: "Perfume enthusiast, woman"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-friends-eating-seaweed-snacks_23-2150670862.jpg",          alt: "Luxury scent connoisseur, man"},
        {
          src: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230633.jpg",          alt: "Elegant consumer, woman"},
      ]}
      avatarText="Loved by over 10,000 connoisseurs worldwide."
      marqueeItems={[
        {
          type: "text",          text: "Exquisite Scents"},
        {
          type: "text",          text: "Italian Craftsmanship"},
        {
          type: "text",          text: "Timeless Elegance"},
        {
          type: "text",          text: "Niche Perfumery"},
        {
          type: "text",          text: "Sustainable Luxury"},
        {
          type: "text",          text: "Authentic Firenze"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="About Us"
      tagIcon={Star}
      tagAnimation="slide-up"
      title="Artistry & Heritage in Every Bottle"
      buttons={[
        {
          text: "Our Philosophy",          href: "#"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "fragrances",          label: "Signature Fragrances",          title: "60 Exclusive Niche Perfumes",          items: [
            "30 Eau de Parfum for elegant daily wear",            "30 Extrait de Parfum for ultimate concentration and longevity"],
          buttons: [
            {
              text: "Discover EDP",              href: "#products"},
            {
              text: "Discover Extrait",              href: "#products"},
          ],
        },
        {
          id: "regional",          label: "Regional Masterpiece",          title: "The Essence of Italy",          items: [
            "30 Traditional Italian perfumes",            "30 Ultra-premium Tuscany-inspired scents"],
          buttons: [
            {
              text: "Explore Italian",              href: "#products"},
            {
              text: "Explore Tuscany",              href: "#products"},
          ],
        },
        {
          id: "sizes",          label: "Versatile Sizes",          title: "Luxury for Every Journey",          items: [
            "100ml for enduring presence",            "50ml for daily elegance",            "30ml for sophisticated travel",            "15ml for refined portability"],
          buttons: [
            {
              text: "View All Sizes",              href: "#products"},
          ],
        },
        {
          id: "coming-soon-1",          label: "Coming Soon",          title: "Extrait de Parfum & Bakhour",          items: [
            "New Extrait de Parfum concentrations",            "Exclusive Bakhour and Oud selections"],
        },
        {
          id: "coming-soon-2",          label: "Coming Soon",          title: "Ultra Niche 50ml Extrait",          items: [
            "5 new kinds of ultra-niche 50ml Extrait de Parfum",            "Unparalleled depth and character"],
        },
      ]}
      title="A World of Exquisite Fragrances"
      description="Our collection is meticulously curated to offer both variety and world-class quality."
      tag="Our Collection"
      tagAnimation="blur-reveal"
      tagIcon={Palette}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "prod-1",          name: "Golden Essence Extrait",          price: "€120",          variant: "100ml Extrait de Parfum",          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-bottle-with-luxurious-art-nouveau-inspired-sun-relief-background_23-2151420746.jpg",          imageAlt: "Golden Essence Extrait Perfume"},
        {
          id: "prod-2",          name: "Royal Bloom Extrait",          price: "€95",          variant: "50ml Extrait de Parfum",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-perfume-floating-water_23-2150963090.jpg",          imageAlt: "Royal Bloom Extrait Perfume"},
        {
          id: "prod-3",          name: "Florentine Dream EDP",          price: "€80",          variant: "100ml Eau de Parfum",          imageSrc: "http://img.b2bpic.net/free-photo/natural-argan-oil-composition_23-2149016632.jpg",          imageAlt: "Florentine Dream Eau de Parfum"},
        {
          id: "prod-4",          name: "Tuscan Sunset EDP",          price: "€65",          variant: "50ml Eau de Parfum",          imageSrc: "http://img.b2bpic.net/free-photo/herbal-medicine-with-plants-blocks-high-angle_23-2149339735.jpg",          imageAlt: "Tuscan Sunset Eau de Parfum"},
        {
          id: "prod-5",          name: "Classic Firenze (Mini)",          price: "€45",          variant: "30ml Traditional Italian",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-vegan-alcohol-arrangement_23-2149337702.jpg",          imageAlt: "Classic Firenze Perfume 30ml"},
        {
          id: "prod-6",          name: "Ultra Niche Discovery",          price: "€25",          variant: "15ml Tuscany Inspired",          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-perfume-bottles-white-backdrop_23-2147878900.jpg",          imageAlt: "Ultra Niche Discovery Perfume 15ml"},
      ]}
      title="Our Artisan Collection"
      description="Explore our handpicked selection of niche and ultra-niche perfumes."
      tag="Our Products"
      tagIcon={Droplet}
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "discovery",          tag: "Experience",          tagIcon: Lightbulb,
          price: "€25 - €45",          period: "starting price",          description: "Perfect for discovering new scents and our exquisite quality. Ideal for smaller sizes or introductory fragrances.",          button: {
            text: "Explore Discovery",            href: "#products"},
          featuresTitle: "Includes:",          features: [
            "15ml & 30ml sizes",            "Traditional Italian scents",            "Sampling options",            "Artisanal quality"],
        },
        {
          id: "connoisseur",          tag: "Popular",          tagIcon: Crown,
          price: "€50 - €95",          period: "most popular",          description: "Our most popular range, offering a balance of volume and exclusive concentration for daily elegance.",          button: {
            text: "Shop Connoisseur",            href: "#products"},
          featuresTitle: "Includes:",          features: [
            "50ml Eau de Parfum",            "50ml Extrait de Parfum",            "Signature & Regional fragrances",            "Premium packaging"],
        },
        {
          id: "ultimate",          tag: "Premium",          tagIcon: Diamond,
          price: "€100 - €120",          period: "ultimate luxury",          description: "Indulge in the highest concentration and longevity with our large format, ultra-premium selections.",          button: {
            text: "Embrace Ultimate",            href: "#products"},
          featuresTitle: "Includes:",          features: [
            "100ml Eau de Parfum",            "100ml Extrait de Parfum",            "Ultra-niche Tuscany scents",            "Limited edition releases"],
        },
      ]}
      title="Luxury for Everyone"
      description="Our collection offers exceptional quality at a price accessible to every connoisseur, ranging from €25 to €120."
      tag="Pricing"
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "test-1",          title: "Truly Exquisite Fragrances!",          quote: "Hortus Jannat Firenze offers an unparalleled sensory journey. Each scent is a masterpiece, a testament to true Italian artistry. I'm completely captivated!",          name: "Isabella Rossi",          role: "Perfume Aficionado",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pensive-girl-washing-clothes-with-detergent-modern-self-service-laundry_574295-2567.jpg",          imageAlt: "Isabella Rossi"},
        {
          id: "test-2",          title: "A Touch of Florence in Every Drop",          quote: "The Tuscany-inspired scents transport me directly to the heart of Italy. The quality and longevity of their Extrait de Parfum are simply incredible.",          name: "Marco Bianchi",          role: "Luxury Brand Consultant",          imageSrc: "http://img.b2bpic.net/free-photo/women-shopping-buying-consumer-products-customer-day-celebration_23-2151623386.jpg",          imageAlt: "Marco Bianchi"},
        {
          id: "test-3",          title: "My New Signature Scent",          quote: "I've finally found my signature fragrance with Hortus Jannat. The blend is so unique and sophisticated, it truly stands out. Highly recommend!",          name: "Sofia Ricci",          role: "Fashion Editor",          imageSrc: "http://img.b2bpic.net/free-photo/pleased-looking-side-young-beautiful-girl-sits-table-with-makeup-tools-holding-winner-cup-isolated-blue-wall_141793-106085.jpg",          imageAlt: "Sofia Ricci"},
        {
          id: "test-4",          title: "Luxury That's Accessible",          quote: "As someone who appreciates niche perfumes, Hortus Jannat delivers exceptional quality without the exorbitant price tag. It's affordable luxury done right.",          name: "Andrea Ferrari",          role: "Art Collector",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-drink-glass_23-2149721966.jpg",          imageAlt: "Andrea Ferrari"},
        {
          id: "test-5",          title: "Elegance and Longevity",          quote: "The Extrait de Parfum lasts all day with just a few sprays. It's rare to find such elegance combined with this level of performance. A true gem.",          name: "Elena Greco",          role: "Beauty Influencer",          imageSrc: "http://img.b2bpic.net/free-photo/little-decorative-corn-stands-glass-bottle_1304-2745.jpg",          imageAlt: "Elena Greco"},
      ]}
      title="What Our Connoisseurs Say"
      description="Hear from those who have embraced the luxury and artistry of Hortus Jannat Firenze."
      tag="Testimonials"
      tagIcon={Quote}
      tagAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Contact Us"
      tagIcon={Mail}
      tagAnimation="slide-up"
      title="Connect with Hortus Jannat Firenze"
      description="Have questions about our collection or your order? We're here to assist you with a personalized touch. Connect with us for any inquiries."
      buttons={[
        {
          text: "Send an Email",          href: "mailto:info@hortusjannat.com"},
        {
          text: "Visit Our Atelier",          href: "#"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Collection",          items: [
            {
              label: "Eau de Parfum",              href: "#products"},
            {
              label: "Extrait de Parfum",              href: "#products"},
            {
              label: "Italian Perfumes",              href: "#products"},
            {
              label: "Tuscany Scents",              href: "#products"},
          ],
        },
        {
          title: "Hortus Jannat",          items: [
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Philosophy",              href: "#about"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Refund Policy",              href: "#"},
          ],
        },
        {
          title: "Shop",          items: [
            {
              label: "Shipping (Europe Only)",              href: "#"},
            {
              label: "Stripe Payments",              href: "#"},
            {
              label: "FAQs",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Hortus Jannat Firenze. All rights reserved."
      bottomRightText="Made with passion in Italy."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
