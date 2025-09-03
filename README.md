# India-Based E-Commerce CRM Portal

A comprehensive Customer Relationship Management (CRM) system designed specifically for Indian e-commerce businesses. Built with React.js, Next.js, and MongoDB for real-time data operations.

## 🚀 Features

### Core Modules
- **Customer Management**: Unified profiles, search/filter, customer journey tracking
- **Order & Inventory Management**: Real-time order tracking, status management, inventory updates
- **Support & Ticketing**: Agent UI, ticket management, SLA tracking
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
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation wiki

## 🔮 Future Enhancements

- WhatsApp integration for customer communication
- Advanced AI-powered customer insights
- Inventory forecasting and automated reordering
- Multi-language support for regional markets
- Advanced reporting and custom dashboard creation
- Integration with popular Indian payment gateways
- Bulk import/export functionality
- Advanced workflow automation
