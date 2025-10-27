# SEO Implementation Guide

## Overview
This portfolio now includes comprehensive SEO optimization using `react-helmet-async` to dynamically manage meta tags, improve search engine visibility, and enhance social media sharing.

## Features Implemented

### 1. **Dynamic Meta Tags**
- Title tags unique per page
- Meta descriptions optimized for each section
- Keywords relevant to each page
- Canonical URLs to avoid duplicate content issues

### 2. **Open Graph Tags**
- Full Open Graph support for Facebook, LinkedIn
- Custom titles, descriptions, and images per page
- Locale information (fr_FR / en_US)
- Proper og:type and og:site_name

### 3. **Twitter Cards**
- Large image card support
- Custom titles and descriptions
- Image optimization for social sharing

### 4. **Technical SEO**
- HTML lang attribute based on current language
- Robots and googlebot directives
- Theme color meta tag
- Proper viewport configuration
- Sitemap with hreflang for multilingual support
- Robots.txt configuration

## Files Structure

```
src/
├── components/
│   └── SEO/
│       └── SEO.tsx              # Reusable SEO component
├── i18n/
│   └── locales/
│       ├── fr.ts                # French SEO translations
│       └── en.ts                # English SEO translations
├── App.tsx                      # HelmetProvider wrapper
└── routes.tsx                   # SEO integration in routes
```

## Usage

### In a Page Component

```tsx
import SEO from '../components/SEO/SEO';
import { useTranslation } from 'react-i18next';

export default function MyPage() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO
        title={t('seo.myPage.title')}
        description={t('seo.myPage.description')}
        keywords={t('seo.myPage.keywords')}
        url="/my-page"
        image="/images/my-page-preview.jpg"  // Optional
        type="website"  // Optional, default: 'website'
      />
      {/* Your page content */}
    </>
  );
}
```

### Adding New SEO Translations

1. **Edit** `src/i18n/locales/fr.ts`:
```typescript
seo: {
  myPage: {
    title: "Mon Titre de Page",
    description: "Description optimisée pour le SEO...",
    keywords: "mots, clés, pertinents"
  }
}
```

2. **Edit** `src/i18n/locales/en.ts`:
```typescript
seo: {
  myPage: {
    title: "My Page Title",
    description: "SEO-optimized description...",
    keywords: "relevant, keywords, here"
  }
}
```

## Current SEO Configuration

### Pages Covered
- ✅ Home (`/`)
- ✅ Education (`/scolarite`)
- ✅ Cybersecurity (`/cybersecurity`)
- ✅ Skills (`/competences`)
- ✅ University Projects (`/projets-univ`)
- ✅ Personal Projects (`/projets-perso`)

### Sitemap Configuration
Location: `public/sitemap.xml`

Features:
- Priority levels (1.0 for home, 0.9-0.8 for others)
- Change frequency hints
- Last modification dates
- Hreflang tags for multilingual support (fr/en)

### Robots.txt
Location: `public/robots.txt`

Configuration:
- Allows all crawlers
- References sitemap location
- Polite crawl-delay of 1 second

## Best Practices Followed

1. **Unique Content**: Each page has unique title, description, and keywords
2. **Keyword Optimization**: Relevant keywords for each section
3. **Length Guidelines**:
   - Titles: 50-60 characters
   - Descriptions: 150-160 characters
4. **Image Optimization**: OG images are optimized for social sharing
5. **Structured Data**: Ready for future Schema.org integration
6. **Mobile-First**: All meta tags are mobile-friendly

## Testing Your SEO

### Tools to Use:
1. **Google Search Console** - Submit sitemap
2. **Facebook Debugger** - Test Open Graph tags
3. **Twitter Card Validator** - Test Twitter cards
4. **Lighthouse** - SEO audit score
5. **Google Rich Results Test** - Structured data validation

### Commands:
```bash
# Build and test locally
yarn build
yarn preview

# Check for errors
yarn lint
```

## Performance Impact

- **Bundle size increase**: ~35KB (react-helmet-async + deps)
- **Runtime overhead**: Minimal, meta tags updated on navigation
- **SEO benefits**: Significant improvement in search visibility

## Future Enhancements

- [ ] Add JSON-LD structured data (Schema.org)
- [ ] Dynamic sitemap generation
- [ ] Blog posts with article schema
- [ ] Breadcrumb navigation schema
- [ ] FAQ schema for Competences page
- [ ] Organization schema with contact info

## Maintenance

### When to Update:
- **Weekly**: Check Search Console for indexing issues
- **Monthly**: Review and update keywords based on analytics
- **Quarterly**: Audit sitemap and ensure all pages are listed
- **On content change**: Update relevant meta descriptions

### Quick Checklist:
- [ ] All pages have unique titles
- [ ] Descriptions are compelling and accurate
- [ ] Images are optimized and accessible
- [ ] Sitemap is up to date
- [ ] Robots.txt allows desired crawling
- [ ] No duplicate content issues

## Resources

- [react-helmet-async Documentation](https://github.com/staylor/react-helmet-async)
- [Google SEO Guidelines](https://developers.google.com/search/docs)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

**Last Updated**: October 27, 2025
**Maintainer**: Maël Goujon
