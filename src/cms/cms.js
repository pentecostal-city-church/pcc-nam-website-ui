import CMS from 'decap-cms-app';
import uploadcare from 'decap-cms-media-library-uploadcare';
import cloudinary from 'decap-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import CommitteePagePreview from './preview-templates/CommitteePagePreview';
import MinistriesPagePreview from './preview-templates/MinistriesPagePreview';
import AffiliationPagePreview from './preview-templates/AffiliationPagePreview';

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('committee', CommitteePagePreview);
CMS.registerPreviewTemplate('affiliation', AffiliationPagePreview);
CMS.registerPreviewTemplate('ministries', MinistriesPagePreview);
