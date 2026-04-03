import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useSEOMeta({
    title: post ? `${post.title} | Stark Roofing Blog` : 'Blog | Stark Roofing',
    description: post?.excerpt || '',
    canonical: post ? `https://starkroofingrenovation.com/blog/${post.slug}` : '',
    keywords: post?.keywords || '',
    ogTitle: post?.title || '',
    ogDescription: post?.excerpt || '',
    ogImage: post ? `https://starkroofingrenovation.com${post.image}` : '',
    schemaMarkup: post ? {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: `https://starkroofingrenovation.com${post.image}`,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: 'Stark Roofing & Renovation',
        url: 'https://www.starkroofingrenovation.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Stark Roofing & Renovation',
      },
    } : undefined,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering for blog content
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 text-charcoal/80 mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) {
        flushList();
        return;
      }

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-heading font-bold text-navy mt-10 mb-4">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-heading font-bold text-navy mt-8 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('- **') || trimmed.startsWith('- ')) {
        listItems.push(trimmed.replace(/^- /, ''));
      } else if (/^\d+\.\s/.test(trimmed)) {
        listItems.push(trimmed.replace(/^\d+\.\s/, ''));
      } else {
        flushList();
        elements.push(
          <p
            key={index}
            className="text-charcoal/80 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: trimmed
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-stark-red hover:underline">$1</a>')
            }}
          />
        );
      }
    });
    flushList();
    return elements;
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12">
            <Link to="/blog" className="text-white/80 hover:text-white flex items-center mb-4 text-sm">
              <ArrowLeft size={14} className="mr-1" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center text-white/70 mt-4 space-x-4 text-sm">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose-lg">
              {renderContent(post.content)}
            </article>

            {/* CTA Box */}
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                Ready for a Free Roof Inspection?
              </h3>
              <p className="text-charcoal/70 mb-4">
                Our GAF certified team provides free, no-obligation inspections across Seattle, Sammamish, Bellevue, and the entire Puget Sound area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-stark-red hover:bg-stark-red/90 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 text-center"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+12067398232"
                  className="border-2 border-navy text-navy font-semibold py-3 px-6 rounded-md hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Phone size={16} className="mr-2" />
                  (206) 739-8232
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="max-w-5xl mx-auto mt-16">
              <h3 className="text-2xl font-heading font-bold text-navy mb-8">
                More from Our Blog
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-navy text-sm group-hover:text-stark-red transition-colors">
                        {related.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <VirtualAssistant />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default BlogArticle;
