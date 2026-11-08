
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/globals.css';

const GA_MEASUREMENT_ID = 'G-8BR89EKT62';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag?.('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <div className="siteLayout">
        <Header />

        <main className="siteMain">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>

      <WhatsAppButton />
    </>
  );
}

export default appWithTranslation(MyApp);
