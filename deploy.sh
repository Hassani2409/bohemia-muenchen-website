#!/bin/bash

# Bohemia München Website Deployment Script
# This script prepares and deploys the website to Vercel

set -e  # Exit on any error

echo "🚀 Starting Bohemia München Website Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI is not installed. Installing..."
        npm install -g vercel
    fi
    
    print_success "All dependencies are available"
}

# Install project dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    npm ci
    print_success "Dependencies installed"
}

# Run linting
run_lint() {
    print_status "Running ESLint..."
    npm run lint
    print_success "Linting completed"
}

# Run type checking
run_type_check() {
    print_status "Running TypeScript type checking..."
    if npm run type-check; then
        print_success "Type checking passed"
    else
        print_warning "Type checking found issues, but continuing..."
    fi
}

# Build the project
build_project() {
    print_status "Building the project..."
    npm run build
    print_success "Build completed successfully"
}

# Generate sitemap
generate_sitemap() {
    print_status "Generating sitemap..."
    if npm run postbuild; then
        print_success "Sitemap generated"
    else
        print_warning "Sitemap generation failed, but continuing..."
    fi
}

# Deploy to Vercel
deploy_to_vercel() {
    print_status "Deploying to Vercel..."
    
    # Check if this is production deployment
    if [[ "$1" == "--prod" ]]; then
        print_status "Deploying to PRODUCTION..."
        vercel --prod --yes
        print_success "🎉 Production deployment completed!"
        print_status "Your website is live at: https://bohemia-muenchen.vercel.app"
    else
        print_status "Deploying to PREVIEW..."
        vercel --yes
        print_success "🎉 Preview deployment completed!"
        print_status "Check your Vercel dashboard for the preview URL"
    fi
}

# Main deployment process
main() {
    echo "=================================================="
    echo "🍽️  Bohemia München Website Deployment"
    echo "=================================================="
    
    check_dependencies
    install_dependencies
    run_lint
    run_type_check
    build_project
    generate_sitemap
    deploy_to_vercel "$1"
    
    echo "=================================================="
    print_success "✅ Deployment process completed successfully!"
    echo "=================================================="
    
    # Show next steps
    echo ""
    echo "📋 Next Steps:"
    echo "1. Check your website at the provided URL"
    echo "2. Verify all pages are working correctly"
    echo "3. Test the AI chatbot functionality"
    echo "4. Check analytics dashboard"
    echo "5. Monitor performance with Lighthouse"
    echo ""
    echo "🔧 Useful Commands:"
    echo "• vercel logs - View deployment logs"
    echo "• vercel domains - Manage custom domains"
    echo "• vercel env - Manage environment variables"
    echo ""
}

# Handle script arguments
case "$1" in
    --prod|--production)
        main --prod
        ;;
    --preview|--staging)
        main --preview
        ;;
    --help|-h)
        echo "Bohemia München Deployment Script"
        echo ""
        echo "Usage:"
        echo "  ./deploy.sh [option]"
        echo ""
        echo "Options:"
        echo "  --prod, --production    Deploy to production"
        echo "  --preview, --staging    Deploy to preview (default)"
        echo "  --help, -h             Show this help message"
        echo ""
        echo "Examples:"
        echo "  ./deploy.sh                 # Deploy to preview"
        echo "  ./deploy.sh --prod          # Deploy to production"
        ;;
    *)
        main --preview
        ;;
esac
