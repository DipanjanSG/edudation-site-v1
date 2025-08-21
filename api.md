# Mahasamvit Portfolio API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All admin endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

## Endpoints

### 1. Authentication

#### POST /auth/login
Admin login endpoint
```json
{
  "email": "admin@mahasamvit.com",
  "password": "password123"
}
```
Response:
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "admin@mahasamvit.com",
    "role": "admin"
  }
}
```

#### POST /auth/register
Register new admin (protected)
```json
{
  "email": "newadmin@mahasamvit.com",
  "password": "password123",
  "name": "Admin Name"
}
```

### 2. Homepage Content

#### GET /homepage
Get all homepage content
Response:
```json
{
  "success": true,
  "data": {
    "hero": {
      "title": "BEST COMMERCE, FINANCE AND LEGAL STUDY WITH GLOBAL ASPECTS",
      "description": "From basic that is from class 10 or 12...",
      "ctaText": "Know More",
      "ctaLink": "/contact"
    },
    "agroImages": [
      {
        "id": "image_id",
        "url": "/uploads/agro-1.jpg",
        "alt": "Sustainable Farming",
        "order": 1
      }
    ],
    "csrImages": [...],
    "specialtyProjects": [...],
    "whyChooseUs": [...],
    "companyStats": [...],
    "csrStats": [...],
    "faqItems": [...],
    "inspirationalQuotes": [...]
  }
}
```

#### PUT /homepage
Update homepage content (admin only)
```json
{
  "hero": {
    "title": "Updated Title",
    "description": "Updated description"
  }
}
```

### 3. About Page

#### GET /about
Get about page content
Response:
```json
{
  "success": true,
  "data": {
    "mission": "Our mission statement...",
    "vision": "Our vision statement...",
    "teamMembers": [
      {
        "id": "member_id",
        "name": "BISWAJIT BHATTACHARYA",
        "role": "CHAIRMAN AND MANAGING DIRECTOR",
        "location": "KOLKATA (WEST BENGAL)",
        "qualifications": ["M.COM From Calcutta University", ...],
        "specialization": "Emerging and innovative business projects...",
        "additionalInfo": "Wealth manager by profession...",
        "image": "/uploads/team-member-1.jpg"
      }
    ],
    "advisorsConsultants": [...],
    "internationalConsultants": [...],
    "stats": [...]
  }
}
```

#### POST /about/team-member
Add new team member (admin only)
```json
{
  "name": "New Member",
  "role": "New Role",
  "location": "Location",
  "qualifications": ["Qualification 1", "Qualification 2"],
  "specialization": "Specialization",
  "additionalInfo": "Additional info",
  "image": "image_file"
}
```

#### PUT /about/team-member/:id
Update team member (admin only)

#### DELETE /about/team-member/:id
Delete team member (admin only)

### 4. Services Pages

#### GET /services
Get all services
Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "service_id",
      "name": "Global Finance Education",
      "slug": "global-finance",
      "description": "Service description...",
      "image": "/uploads/global-finance.jpg",
      "features": ["Feature 1", "Feature 2"],
      "content": "Full service content..."
    }
  ]
}
```

#### GET /services/:slug
Get specific service by slug

#### POST /services
Create new service (admin only)
```json
{
  "name": "New Service",
  "slug": "new-service",
  "description": "Service description",
  "image": "image_file",
  "features": ["Feature 1", "Feature 2"],
  "content": "Full content"
}
```

#### PUT /services/:id
Update service (admin only)

#### DELETE /services/:id
Delete service (admin only)

### 5. Blogs

#### GET /blogs
Get all blogs
Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "blog_id",
      "title": "Blog Title",
      "slug": "blog-slug",
      "excerpt": "Blog excerpt...",
      "content": "Full blog content...",
      "image": "/uploads/blog-1.jpg",
      "author": "Author Name",
      "publishedAt": "2024-01-01T00:00:00.000Z",
      "tags": ["finance", "education"],
      "status": "published"
    }
  ]
}
```

#### GET /blogs/:slug
Get specific blog by slug

#### POST /blogs
Create new blog (admin only)
```json
{
  "title": "New Blog",
  "slug": "new-blog",
  "excerpt": "Blog excerpt",
  "content": "Full content",
  "image": "image_file",
  "author": "Author Name",
  "tags": ["tag1", "tag2"],
  "status": "draft"
}
```

#### PUT /blogs/:id
Update blog (admin only)

#### DELETE /blogs/:id
Delete blog (admin only)

### 6. Brochures

#### GET /brochures
Get all brochures
Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "brochure_id",
      "title": "Annexure-1-CHARTERED-ACCOUNTANCY",
      "category": "globalfinanceeducationintiative",
      "filePath": "/uploads/brochures/annexure-1.pdf",
      "fileSize": "2.56 MB",
      "available": true,
      "downloadCount": 0
    }
  ]
}
```

#### GET /brochures/:category
Get brochures by category

#### POST /brochures
Upload new brochure (admin only)
```json
{
  "title": "New Brochure",
  "category": "globalfinanceeducationintiative",
  "file": "pdf_file"
}
```

#### PUT /brochures/:id
Update brochure (admin only)

#### DELETE /brochures/:id
Delete brochure (admin only)

#### POST /brochures/:id/download
Track brochure download

### 7. Images

#### GET /images
Get all uploaded images
Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "image_id",
      "filename": "image-1.jpg",
      "originalName": "original-name.jpg",
      "url": "/uploads/image-1.jpg",
      "size": 1024000,
      "mimeType": "image/jpeg",
      "uploadedAt": "2024-01-01T00:00:00.000Z",
      "category": "homepage"
    }
  ]
}
```

#### POST /images/upload
Upload new image (admin only)
```json
{
  "image": "image_file",
  "category": "homepage"
}
```

#### DELETE /images/:id
Delete image (admin only)

### 8. Contact Information

#### GET /contact
Get contact information
Response:
```json
{
  "success": true,
  "data": {
    "address": "Company Address",
    "phone": "+91 1234567890",
    "email": "info@mahasamvit.com",
    "socialMedia": {
      "facebook": "https://facebook.com/mahasamvit",
      "twitter": "https://twitter.com/mahasamvit",
      "linkedin": "https://linkedin.com/company/mahasamvit"
    },
    "officeHours": "Monday - Friday: 9:00 AM - 6:00 PM"
  }
}
```

#### PUT /contact
Update contact information (admin only)

### 9. Contact Form Submissions

#### POST /contact/submit
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "subject": "Inquiry",
  "message": "Message content"
}
```

#### GET /contact/submissions
Get all contact submissions (admin only)

#### DELETE /contact/submissions/:id
Delete contact submission (admin only)

### 10. Admin Dashboard

#### GET /admin/stats
Get dashboard statistics (admin only)
Response:
```json
{
  "success": true,
  "data": {
    "totalBlogs": 25,
    "totalBrochures": 50,
    "totalImages": 100,
    "totalContactSubmissions": 15,
    "recentSubmissions": [...],
    "popularBrochures": [...]
  }
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

Common HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## File Upload

For file uploads (images, PDFs), use `multipart/form-data`:
```
Content-Type: multipart/form-data
```

## Pagination

For endpoints that return lists, use query parameters:
```
GET /blogs?page=1&limit=10&sort=createdAt&order=desc
```

Response includes pagination info:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

## Search and Filtering

Many endpoints support search and filtering:
```
GET /blogs?search=finance&category=education&status=published
GET /brochures?category=globalfinanceeducationintiative&available=true
``` 