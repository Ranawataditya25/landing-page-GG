# Good Guiders for India - Mentorship Platform

## Overview

Good Guiders for India is a mentorship and career guidance platform designed to help Indian students from Class 6 through their career journey. The application provides comprehensive services including academic mentorship, career counseling, study abroad guidance, HR & job assistance, psychological support, and mock tests. The platform features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Express sessions with PostgreSQL store

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Development Server**: Vite dev server with HMR
- **Build Process**: Vite for frontend, esbuild for backend bundling

## Key Components

### Database Schema
Located in `shared/schema.ts`, the application uses three main tables:
- **contacts**: Stores contact form submissions (name, email, subject, message)
- **referrals**: Manages referral program data (referrer and friend information)
- **newsletters**: Handles newsletter subscriptions with unique email constraint

### API Endpoints
The REST API provides three main endpoints:
- `POST /api/contact`: Contact form submission
- `POST /api/referral`: Referral program submission
- `POST /api/newsletter`: Newsletter subscription

### Frontend Components
- **Landing Page**: Single-page application with sections for hero, features, testimonials, etc.
- **Forms**: Contact form, referral modal, newsletter subscription
- **UI Components**: Comprehensive set of reusable components from shadcn/ui
- **Mobile Support**: Responsive design with mobile menu and WhatsApp integration

### Storage Layer
- **Production**: PostgreSQL database with Drizzle ORM
- **Development**: In-memory storage fallback for development purposes
- **Interface**: IStorage interface allows switching between storage implementations

## Data Flow

1. **User Interaction**: Users interact with forms on the landing page
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Request**: Form data sent to Express API endpoints
4. **Server Validation**: Server-side validation using shared Zod schemas
5. **Database Storage**: Data persisted to PostgreSQL via Drizzle ORM
6. **Response**: Success/error responses sent back to client
7. **UI Feedback**: Toast notifications inform users of operation results

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Unstyled, accessible UI primitives
- **react-hook-form**: Form state management and validation
- **zod**: Schema validation for TypeScript

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **tailwindcss**: Utility-first CSS framework

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling integration

## Deployment Strategy

### Development
- **Environment**: Replit development environment
- **Database**: PostgreSQL 16 module with connection via DATABASE_URL
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Port Configuration**: Frontend on port 5000, exposed on port 80

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit
- **Environment Variables**: DATABASE_URL required for database connection

### Database Management
- **Migrations**: Drizzle Kit for schema migrations (`npm run db:push`)
- **Schema**: Single source of truth in `shared/schema.ts`
- **Connection**: Serverless PostgreSQL via Neon Database

## Changelog

Changelog:
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.