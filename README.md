# 🚀 CRM Pro - E-commerce Customer Relationship Management System

## 📋 Table of Contents
1. [System Overview](#system-overview)
2. [Architecture Diagram](#architecture-diagram)
3. [Technology Stack](#technology-stack)
4. [Frontend Architecture](#frontend-architecture)
5. [Backend Architecture](#backend-architecture)
6. [Database Design](#database-design)
7. [Authentication & Authorization](#authentication--authorization)
8. [Module Flow Diagrams](#module-flow-diagrams)
9. [API Documentation](#api-documentation)
10. [Deployment Architecture](#deployment-architecture)
11. [Interview Questions & Answers](#interview-questions--answers)

---

## 🎯 System Overview

**CRM Pro** is a comprehensive Customer Relationship Management system specifically designed for Indian e-commerce businesses. It provides a unified platform for managing customers, orders, support tickets, marketing campaigns, and business analytics.

### 🎪 Key Features
- **Customer Management**: 360° customer profiles with purchase history and segmentation
- **Order Management**: Real-time order tracking with inventory integration
- **Support System**: Multi-channel ticket management with SLA monitoring
- **Marketing Tools**: Automated campaigns with email/SMS integration
- **Analytics Dashboard**: Real-time business intelligence and predictive insights
- **User Management**: Role-based access control with audit trails

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT TIER                              │
├─────────────────────────────────────────────────────────────────┤
│  Next.js 15 Frontend (React 19 + TypeScript)                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   Pages     │  │ Components  │  │   Hooks     │            │
│  │             │  │             │  │             │            │
│  │ • Dashboard │  │ • Dashboard │  │ • useAuth   │            │
│  │ • Auth      │  │ • Sidebar   │  │ • useMobile │            │
│  │ • Customers │  │ • Forms     │  │ • useToast  │            │
│  │ • Orders    │  │ • Charts    │  │             │            │
│  │ • Support   │  │ • Tables    │  │             │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
├─────────────────────────────────────────────────────────────────┤
│                     APPLICATION TIER                            │
├─────────────────────────────────────────────────────────────────┤
│  Next.js API Routes (Server-Side)                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │    Auth     │  │  Business   │  │   Utils     │            │
│  │             │  │   Logic     │  │             │            │
│  │ • Login     │  │ • Customer  │  │ • JWT       │            │
│  │ • Signup    │  │ • Orders    │  │ • Bcrypt    │            │
│  │ • Google    │  │ • Tickets   │  │ • Validation│            │
│  │ • Roles     │  │ • Analytics │  │ • Env       │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
├─────────────────────────────────────────────────────────────────┤
│                        DATA TIER                                │
├─────────────────────────────────────────────────────────────────┤
│  MongoDB Atlas (Cloud Database)                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │Collections  │  │   Indexes   │  │ Aggregation │            │
│  │             │  │             │  │  Pipelines  │            │
│  │ • Users     │  │ • Email     │  │             │            │
│  │ • Customers │  │ • Status    │  │ • Analytics │            │
│  │ • Orders    │  │ • Date      │  │ • Reports   │            │
│  │ • Tickets   │  │ • Customer  │  │ • Insights  │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
├─────────────────────────────────────────────────────────────────┤
│                    EXTERNAL SERVICES                            │
├─────────────────────────────────────────────────────────────────┤
│ Firebase Auth │ Vercel Hosting │ Email Service │ SMS Gateway   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: Next.js 15 (React 19 with App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS + Radix UI components
- **State Management**: React Context API + Local Storage
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### **Backend**
- **Runtime**: Node.js (Next.js API Routes)
- **Authentication**: Firebase Auth + JWT tokens
- **Database**: MongoDB with Mongoose ODM
- **Security**: bcryptjs for password hashing
- **Validation**: Zod schema validation

### **Database**
- **Primary**: MongoDB Atlas (Cloud)
- **Connection**: MongoDB Native Driver
- **Architecture**: Document-based NoSQL

### **DevOps & Deployment**
- **Hosting**: Vercel (Frontend + API)
- **Database**: MongoDB Atlas
- **Package Manager**: pnpm
- **Version Control**: Git

---

## 🎨 Frontend Architecture

### **Component Hierarchy**

```
App (layout.jsx)
├── AuthProvider (Context)
├── ThemeProvider (Context) 
└── Page Components
    ├── Landing Page
    │   ├── Hero Section
    │   ├── Features Grid
    │   ├── Testimonials
    │   └── CTA Section
    │
    ├── Authentication
    │   ├── LoginForm
    │   ├── SignupForm
    │   └── RoleOnboarding
    │
    └── Dashboard
        ├── AppSidebar
        │   ├── Navigation Menu
        │   ├── Role Indicator
        │   └── User Dropdown
        │
        ├── DashboardHeader
        │   ├── Breadcrumbs
        │   ├── Search Bar
        │   └── User Profile
        │
        └── Main Content
            ├── Overview Dashboard
            ├── Customer Management
            ├── Order Management
            ├── Support Tickets
            ├── Marketing Campaigns
            ├── Analytics
            └── User Management
```

### **State Management Flow**

```mermaid
graph TD
    A[AuthProvider Context] --> B[User State]
    A --> C[Authentication Methods]
    B --> D[Local Storage]
    B --> E[JWT Token]
    C --> F[Login/Logout]
    C --> G[Google Auth]
    
    H[Component State] --> I[Form Data]
    H --> J[UI State]
    I --> K[API Calls]
    J --> L[Loading States]
```

### **Routing Structure**

```
/                     → Landing Page (Public)
/auth                 → Login/Signup (Public)
/dashboard            → Main Dashboard (Protected)
/customers            → Customer Management (Protected)
/orders              → Order Management (Protected) 
/support             → Support Tickets (Protected)
/marketing           → Marketing Campaigns (Protected)
/analytics           → Business Analytics (Protected)
/users               → User Management (Admin Only)
/onboarding          → Role Selection (Protected)
```

---

## 🔧 Backend Architecture

### **API Route Structure**

```
/api
├── /auth
│   ├── /login          → POST: User authentication
│   ├── /signup         → POST: User registration  
│   ├── /google         → POST: Google OAuth callback
│   ├── /onboarding     → POST: Complete user onboarding
│   └── /roles          → GET: Fetch available roles
│
├── /customers
│   └── /               → GET: List customers, POST: Create customer
│
├── /orders  
│   └── /               → GET: List orders, POST: Create order
│
├── /tickets
│   └── /               → GET: List tickets, POST: Create ticket
│
├── /users
│   └── /               → GET: List users, POST: Create user
│
└── /health
    └── /               → GET: API health check
```

### **Middleware Chain**

```
Request → CORS → Authentication → Authorization → Business Logic → Response
   ↓         ↓           ↓              ↓              ↓            ↓
  Origin   Headers    JWT Token    Role Check    API Logic    JSON/Error
```

### **Authentication Flow**

```mermaid
sequenceDiagram
    participant C as Client
    participant F as Frontend
    participant API as API Routes
    participant FB as Firebase
    participant DB as MongoDB

    C->>F: Login Request
    F->>FB: Firebase Auth (Google)
    FB-->>F: Firebase User Token
    F->>API: POST /api/auth/google
    API->>DB: Find/Create User
    DB-->>API: User Data
    API->>API: Generate JWT
    API-->>F: JWT + User Data
    F->>F: Store in LocalStorage
    F-->>C: Redirect to Dashboard
```

The remainder of the comprehensive documentation is already included above in the new content.
    DB-->>API: User Data
    API->>API: Generate JWT
    API-->>F: JWT + User Data
    F->>F: Store in LocalStorage
    F-->>C: Redirect to Dashboard
```

---

## 🗄️ Database Design

### **Collections Schema**

#### **Users Collection**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String, // "admin", "marketing_manager", "support_agent", "viewer"
  photoURL: String,
  firebaseUID: String,
  createdAt: Date,
  lastLogin: Date,
  isActive: Boolean
}
```

#### **Customers Collection**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  phone: String,
  region: String,
  status: String, // "active", "inactive", "blocked"
  totalOrders: Number,
  totalSpent: Number,
  lastOrder: Date,
  segment: String, // "New", "Regular", "VIP", "At Risk"
  joinDate: Date,
  createdAt: Date,
  tags: [String],
  preferences: Object
}
```

#### **Orders Collection**
```javascript
{
  _id: ObjectId,
  orderId: String (unique),
  customerId: ObjectId,
  customerName: String,
  customerEmail: String,
  date: String,
  status: String, // "new", "processing", "shipped", "delivered", "cancelled"
  total: Number,
  items: Number,
  paymentMethod: String, // "UPI", "Card", "COD", "Wallet"
  shippingAddress: String,
  trackingId: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### **Tickets Collection**
```javascript
{
  _id: ObjectId,
  ticketId: String (unique),
  customerId: ObjectId,
  customerName: String,
  subject: String,
  description: String,
  status: String, // "open", "in_progress", "resolved", "closed"
  priority: String, // "low", "medium", "high", "urgent"
  assignedTo: ObjectId,
  category: String, // "technical", "billing", "general"
  createdAt: Date,
  updatedAt: Date,
  resolvedAt: Date
}
```

### **Database Indexes**

```javascript
// Performance Indexes
db.users.createIndex({ "email": 1 }, { unique: true })
db.customers.createIndex({ "email": 1 }, { unique: true })
db.customers.createIndex({ "status": 1, "segment": 1 })
db.orders.createIndex({ "customerId": 1, "date": -1 })
db.orders.createIndex({ "status": 1, "date": -1 })
db.tickets.createIndex({ "status": 1, "priority": 1 })
db.tickets.createIndex({ "assignedTo": 1, "status": 1 })
```

---

## 🔐 Authentication & Authorization

### **Authentication Methods**

1. **Email/Password Authentication**
   - bcryptjs for password hashing
   - JWT tokens for session management
   - Local storage for client-side persistence

2. **Google OAuth Integration**
   - Firebase Authentication
   - Automatic user creation
   - Profile picture sync

### **Authorization Levels**

```javascript
const rolePermissions = {
  admin: {
    canView: ['all'],
    canCreate: ['all'],
    canEdit: ['all'],
    canDelete: ['all']
  },
  marketing_manager: {
    canView: ['customers', 'orders', 'analytics', 'marketing'],
    canCreate: ['customers', 'marketing'],
    canEdit: ['customers', 'marketing'],
    canDelete: ['marketing']
  },
  support_agent: {
    canView: ['customers', 'orders', 'tickets'],
    canCreate: ['tickets'],
    canEdit: ['tickets'],
    canDelete: []
  },
  viewer: {
    canView: ['dashboard', 'analytics'],
    canCreate: [],
    canEdit: [],
    canDelete: []
  }
}
```

### **JWT Token Structure**

```javascript
{
  header: {
    "alg": "HS256",
    "typ": "JWT"
  },
  payload: {
    "userId": "64f5a8b9c12d3e4f56789012",
    "email": "user@example.com", 
    "role": "admin",
    "iat": 1693856400,
    "exp": 1693942800  // 24 hours
  }
}
```

---

## 🔄 Module Flow Diagrams

### **Customer Management Flow**

```mermaid
flowchart TD
    A[Customer List View] --> B{User Action}
    B -->|Add Customer| C[Create Customer Form]
    B -->|Edit Customer| D[Update Customer Form] 
    B -->|View Details| E[Customer Detail View]
    
    C --> F[Validate Form Data]
    F --> G[POST /api/customers]
    G --> H[MongoDB Insert]
    H --> I[Update UI]
    
    D --> J[Validate Changes]
    J --> K[PUT /api/customers/:id]
    K --> L[MongoDB Update]
    L --> I
    
    E --> M[Load Customer Orders]
    E --> N[Load Customer Tickets]
    M --> O[Display Order History]
    N --> P[Display Support History]
```

### **Order Management Flow**

```mermaid
flowchart TD
    A[Order Dashboard] --> B[Order List]
    B --> C{Filter/Search}
    C -->|By Status| D[Filter Orders]
    C -->|By Date| E[Date Range Filter]
    C -->|By Customer| F[Customer Filter]
    
    D --> G[GET /api/orders?status=X]
    E --> H[GET /api/orders?dateRange=X]
    F --> I[GET /api/orders?customerId=X]
    
    G --> J[MongoDB Query]
    H --> J
    I --> J
    J --> K[Return Results]
    K --> L[Update Order List]
    
    B --> M{Order Action}
    M -->|Update Status| N[Status Update Modal]
    M -->|View Details| O[Order Detail View]
    N --> P[PUT /api/orders/:id]
    P --> Q[Update Customer Stats]
    Q --> R[Refresh Dashboard]
```

### **Support Ticket Flow**

```mermaid
flowchart TD
    A[Support Dashboard] --> B[Ticket List]
    B --> C{Ticket Action}
    C -->|Create| D[New Ticket Form]
    C -->|Assign| E[Assignment Modal]
    C -->|Update Status| F[Status Update]
    
    D --> G[Validate Ticket Data]
    G --> H[POST /api/tickets]
    H --> I[Generate Ticket ID]
    I --> J[MongoDB Insert]
    J --> K[Send Notifications]
    
    E --> L[Update Assignment]
    L --> M[PUT /api/tickets/:id/assign]
    M --> N[Update Assignee]
    N --> O[Notify User]
    
    F --> P[Status Transition Check]
    P --> Q[PUT /api/tickets/:id/status]
    Q --> R[Update Ticket]
    R --> S[Calculate SLA Metrics]
```

---

## 📡 API Documentation

### **Authentication Endpoints**

#### POST `/api/auth/login`
```javascript
// Request
{
  "email": "user@example.com",
  "password": "securepassword"
}

// Response (Success)
{
  "success": true,
  "user": {
    "id": "64f5a8b9c12d3e4f56789012",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### POST `/api/auth/google`
```javascript
// Request
{
  "email": "user@gmail.com",
  "name": "John Doe",
  "uid": "firebase_uid_12345",
  "photoURL": "https://profile-pic-url.jpg"
}

// Response
{
  "success": true,
  "user": { /* user object */ },
  "token": "jwt_token_string"
}
```

### **Customer Endpoints**

#### GET `/api/customers`
```javascript
// Response
{
  "success": true,
  "customers": [
    {
      "_id": "64f5a8b9c12d3e4f56789013",
      "name": "Rajesh Kumar",
      "email": "rajesh@example.com",
      "phone": "+91-9876543210",
      "region": "Mumbai",
      "status": "active",
      "totalOrders": 15,
      "totalSpent": 45000,
      "segment": "VIP",
      "joinDate": "2024-01-15T00:00:00.000Z"
    }
  ]
}
```

#### POST `/api/customers`
```javascript
// Request
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "+91-9123456789",
  "region": "Delhi"
}

// Response
{
  "success": true,
  "customer": {
    "_id": "64f5a8b9c12d3e4f56789014",
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "+91-9123456789",
    "region": "Delhi",
    "status": "active",
    "totalOrders": 0,
    "totalSpent": 0,
    "segment": "New",
    "joinDate": "2024-09-29T10:30:00.000Z"
  }
}
```

### **Order Endpoints**

#### GET `/api/orders`
```javascript
// Response
{
  "success": true,
  "orders": [
    {
      "_id": "64f5a8b9c12d3e4f56789015",
      "orderId": "ORD-2024-001",
      "customerId": "64f5a8b9c12d3e4f56789013",
      "customerName": "Rajesh Kumar",
      "date": "2024-09-28",
      "status": "delivered",
      "total": 2500,
      "items": 3,
      "paymentMethod": "UPI",
      "trackingId": "TRK123456789"
    }
  ]
}
```

---

## 🚀 Deployment Architecture

### **Vercel Deployment**

```
┌─────────────────────────────────────────┐
│            Vercel Edge Network           │
├─────────────────────────────────────────┤
│  Frontend (Static + SSR)                │
│  • Next.js App Router                   │
│  • React Components                     │
│  • Static Assets                        │
├─────────────────────────────────────────┤
│  Serverless Functions                   │
│  • API Routes (/api/*)                  │
│  • Authentication Logic                 │
│  • Business Logic                       │
├─────────────────────────────────────────┤
│  External Services                      │
│  • MongoDB Atlas (Database)             │
│  • Firebase Auth (Authentication)       │
│  • Email/SMS Services                   │
└─────────────────────────────────────────┘
```

### **Environment Configuration**

```bash
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce_crm

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# Application
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NODE_ENV=production
```

---

## 💡 Interview Questions & Answers

### **System Design Questions**

#### Q1: "Explain the overall architecture of your CRM system."

**Answer:**
"Our CRM system follows a 3-tier architecture:

1. **Presentation Tier**: Next.js frontend with React components, server-side rendering, and client-side state management
2. **Application Tier**: Next.js API routes handling business logic, authentication, and data processing  
3. **Data Tier**: MongoDB for primary data storage with proper indexing and aggregation pipelines

The system uses a microservices approach where each API route handles a specific domain (auth, customers, orders, tickets). We implement JWT-based authentication with role-based access control."

#### Q2: "How do you handle authentication and security?"

**Answer:**
"We implement a multi-layer security approach:

1. **Authentication**: 
   - Firebase Auth for Google OAuth
   - bcryptjs for password hashing
   - JWT tokens for session management

2. **Authorization**:
   - Role-based permissions (Admin, Marketing Manager, Support Agent, Viewer)
   - Route-level protection on both client and server
   - API endpoint authorization middleware

3. **Security Measures**:
   - HTTPS encryption
   - Environment variable protection
   - Input validation with Zod
   - SQL injection prevention (NoSQL MongoDB)
   - CORS configuration"

#### Q3: "Explain your database design decisions."

**Answer:**
"We chose MongoDB for several reasons:

1. **Document Model**: Perfect for CRM data with varying customer attributes
2. **Scalability**: Easy horizontal scaling for growing customer base
3. **Aggregation**: Powerful pipeline for analytics and reporting
4. **Indexes**: Strategic indexing on email, status, dates for performance

**Schema Design**:
- Denormalized customer data for read performance
- Referenced relationships between orders and customers
- Embedded arrays for customer tags and preferences
- Date-based partitioning strategy for large datasets"

### **Technical Implementation Questions**

#### Q4: "How do you handle real-time updates in your CRM?"

**Answer:**
"Currently implemented with polling strategy:

1. **Client-side**: Regular API calls to refresh data
2. **Optimistic Updates**: UI updates immediately, then syncs with server
3. **Error Handling**: Rollback on API failures

**Future Enhancement**: WebSocket integration for real-time notifications and live updates using Socket.io or Vercel's real-time features."

#### Q5: "How would you scale this system for 1 million users?"

**Answer:**
"Scaling strategy:

1. **Database**:
   - MongoDB sharding by customer region
   - Read replicas for analytics queries
   - Caching layer with Redis

2. **Application**:
   - Serverless functions auto-scale
   - CDN for static assets
   - Database connection pooling

3. **Performance**:
   - Implement pagination and virtual scrolling
   - Lazy loading for components
   - Background job processing for heavy operations
   - Search indexing with Elasticsearch"

#### Q6: "Explain your state management approach."

**Answer:**
"We use a hybrid approach:

1. **Global State**: React Context API for authentication and user data
2. **Local State**: React hooks (useState, useEffect) for component-specific data
3. **Server State**: API calls with proper caching and error handling
4. **Persistence**: localStorage for user preferences and JWT tokens

**Benefits**:
- Lightweight compared to Redux
- Built-in React patterns
- Easy to understand and maintain
- Suitable for application size"

### **Business Logic Questions**

#### Q7: "How do you track customer lifecycle in your CRM?"

**Answer:**
"Customer lifecycle tracking:

1. **Segmentation**:
   - New: Recent signups (< 30 days)
   - Regular: 2-10 orders
   - VIP: > 10 orders or high value
   - At Risk: No orders in 90 days

2. **Metrics Tracking**:
   - Total orders and revenue
   - Last order date
   - Average order value
   - Customer lifetime value

3. **Automated Actions**:
   - Welcome emails for new customers
   - Re-engagement campaigns for at-risk customers
   - VIP program enrollment"

#### Q8: "How do you handle order status updates and notifications?"

**Answer:**
"Order status management:

1. **Status Pipeline**: New → Processing → Shipped → Delivered/Cancelled
2. **Validation**: Business rules prevent invalid status transitions
3. **Automation**: 
   - Inventory updates on order creation
   - Customer statistics recalculation
   - Automatic tracking ID generation

4. **Notifications**:
   - Email notifications for status changes
   - SMS for delivery updates
   - In-app notifications for internal users"

---

## 🔍 Performance & Optimization

### **Frontend Optimizations**
- **Code Splitting**: Dynamic imports for route-based splitting
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Analysis**: Regular bundle size monitoring
- **Caching**: Browser caching for static assets
- **Minification**: Automatic CSS and JS minification

### **Backend Optimizations**
- **Database Indexing**: Strategic indexes on frequently queried fields
- **Connection Pooling**: MongoDB connection reuse
- **Response Caching**: API response caching where appropriate
- **Query Optimization**: Efficient MongoDB aggregation pipelines
- **Rate Limiting**: API rate limiting to prevent abuse

### **Monitoring & Analytics**
- **Error Tracking**: Console error monitoring
- **Performance Metrics**: Page load times and API response times
- **User Analytics**: User journey tracking
- **Business Metrics**: KPI dashboards and reports

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ and pnpm
- MongoDB Atlas account
- Firebase project for authentication
- Vercel account for deployment

### **Installation**

```bash
# Clone the repository
git clone <repository-url>
cd crm-pro

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Fill in your environment variables

# Run development server
pnpm dev
```

### **Environment Setup**
1. Create MongoDB Atlas cluster
2. Set up Firebase project with Google Auth
3. Configure environment variables
4. Deploy to Vercel

---

## 📚 Additional Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **MongoDB Documentation**: https://docs.mongodb.com
- **Firebase Auth Guide**: https://firebase.google.com/docs/auth
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Deployment**: https://vercel.com/docs

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for Indian E-commerce businesses**
- **Marketing Automation**: Email/SMS campaigns, customer segmentation, automated triggers
- **Analytics & Dashboard**: Real-time sales dashboards, campaign reporting, customer insights
- **User Management**: Role-based access control, user account management

### User Roles
- **Admin**: Full system access, user management, analytics, settings

## 🛠️ Technology Stack

- **Frontend**: Next.js App Router
- **Backend**: Next.js SSR
- **Database**: MongoDB (live data operations)
- **UI Components**: shadcn/ui, Tailwind CSS
- **Charts**: Recharts for analytics visualization
- **Authentication**: JWT-based authentication system

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd india-ecommerce-crm
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:
   \`\`\`env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce_crm?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random-123456789
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   
   # Firebase Configuration (for Google Authentication)
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   \`\`\`
   
   **Important**: Replace the MongoDB URI and Firebase configuration with your actual credentials.

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Getting Started

1. **Create your first account** by clicking the "Sign Up" tab
2. **Choose your role** (Admin, Marketing Manager, Support Agent, or Viewer)
3. **Start adding customers** and exploring the CRM features
4. **All data is saved to MongoDB** in real-time

## 📱 Key Features

### Dashboard Overview
- Real-time KPI metrics
- Recent activity feed
- Performance indicators
- System alerts (Admin only)

### Customer Management
- Comprehensive customer profiles
- Advanced search and filtering
- Customer segmentation (VIP, Regular, New)
- Regional distribution tracking
- Customer journey timeline

### Order Management
- Order status tracking (New, Shipped, Delivered, Returned, Cancelled)
- Real-time inventory updates
- Order workflow management
- Customer communication tools

### Support System
- Ticket creation and management
- SLA status tracking
- Priority-based routing
- Agent assignment system
- Customer interaction history

### Marketing Campaigns
- Email and SMS campaign creation
- Audience segmentation
- Performance analytics (open rates, click rates, conversions)
- Automated campaign triggers
- Revenue tracking

### Analytics Dashboard
- Sales trend analysis
- Customer growth metrics
- Regional performance data
- Marketing channel effectiveness
- Customer lifetime value analysis
- Churn risk assessment

### User Management (Admin Only)
- Role-based access control
- User account creation and management
- Permission assignment
- Activity monitoring

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── layout.jsx         # Root layout with providers
│   ├── page.jsx          # Main application entry
│   ├── globals.css       # Global styles
│   └── api/              # API routes
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── auth-provider.jsx # Authentication context
│   ├── dashboard.jsx     # Main dashboard component
│   ├── app-sidebar.jsx   # Navigation sidebar
│   ├── customer-management.jsx
│   ├── order-management.jsx
│   ├── support-tickets.jsx
│   ├── marketing-campaigns.jsx
│   ├── analytics.jsx
│   └── user-management.jsx
├── lib/
│   ├── mongodb.js        # MongoDB connection
│   ├── auth.js          # Authentication utilities
│   └── utils.js         # Utility functions
├── hooks/
│   ├── use-toast.jsx    # Toast notifications
│   └── use-mobile.jsx   # Mobile detection
├── .env.local           # Environment variables
└── README.md
\`\`\`

## 🔧 Configuration

### Environment Variables
The project includes a `.env.local` file with the following variables:

- `MONGO_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `NEXT_PUBLIC_APP_URL`: Your application URL

### Role-Based Access Control
The system implements comprehensive role-based access:

- **Admin**: Access to all modules including user management

### Mobile Responsiveness
- Fully responsive design for desktop, tablet, and mobile
- Progressive Web App (PWA) ready
- Touch-friendly interface for mobile users

### Security Features
- JWT-based authentication
- Input validation and sanitization
- Role-based route protection
- Secure API endpoints
- Password hashing with bcrypt

## 📊 Analytics & Reporting

### Key Metrics Tracked
- Revenue trends and forecasting
- Customer acquisition and retention
- Order fulfillment rates
- Support response times
- Marketing campaign ROI
- Regional sales performance

### Real-time Updates
- Live dashboard updates
- Real-time order status changes
- Instant notification system
- Dynamic inventory tracking

## 🚀 Deployment

### Production Build
\`\`\`bash
npm run build
npm start
\`\`\`

### Environment Setup
Ensure all environment variables are configured for production:
- Database connection strings
- JWT secrets
- API keys for external services
- CORS settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## � License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for Indian E-commerce businesses**
