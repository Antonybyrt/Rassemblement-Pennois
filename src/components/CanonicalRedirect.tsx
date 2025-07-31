import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SEO_CONFIG } from '@/config/seo';

interface CanonicalRedirectProps {
  expectedPath: string;
}

const CanonicalRedirect: React.FC<CanonicalRedirectProps> = ({ expectedPath }) => {
  const router = useRouter();
  
  useEffect(() => {
    const currentPath = router.asPath;
    const canonicalUrl = SEO_CONFIG.getCanonicalUrl(expectedPath);
    const currentUrl = `${window.location.origin}${currentPath}`;
    
    if (currentUrl !== canonicalUrl) {
      const currentPathWithoutHash = currentPath.split('#')[0];
      const expectedPathWithoutHash = expectedPath.split('#')[0];
      
      if (currentPathWithoutHash !== expectedPathWithoutHash) {
        router.replace(expectedPath, undefined, { shallow: true });
      }
    }
  }, [router, expectedPath]);
  
  return null;
};

export default CanonicalRedirect; 