#!/bin/bash

# Deploy script for MAR-IA Landing Page
# Usage: ./deploy.sh [vercel|docker|github]

set -e

echo "🚀 MAR-IA Landing Page Deployment Script"
echo "=========================================="

# Check if environment file exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  Warning: .env.local not found"
    echo "📋 Creating from template..."
    cp .env.example .env.local
    echo "✅ Please edit .env.local with your actual values"
fi

# Get deployment type
DEPLOY_TYPE=${1:-"help"}

case $DEPLOY_TYPE in
    "vercel")
        echo "🟢 Deploying to Vercel..."
        npm run build
        npx vercel --prod
        echo "✅ Vercel deployment completed!"
        ;;
    
    "docker")
        echo "🐳 Building Docker image..."
        docker build -t maria-landing .
        echo "🚀 Running Docker container..."
        docker run -d -p 3000:3000 --env-file .env.local --name maria-landing maria-landing
        echo "✅ Docker deployment completed!"
        echo "📱 Access: http://localhost:3000"
        ;;
    
    "docker-compose")
        echo "🐳 Starting with Docker Compose..."
        docker-compose up --build -d
        echo "✅ Docker Compose deployment completed!"
        echo "📱 Access: http://localhost:3000"
        ;;
    
    "github")
        echo "🌐 Pushing to GitHub..."
        git add .
        git commit -m "Deploy update $(date)"
        git push origin main
        echo "✅ GitHub push completed!"
        echo "🔄 Vercel will auto-deploy from GitHub"
        ;;
    
    "build")
        echo "🔨 Building for production..."
        npm run build
        echo "✅ Build completed!"
        ;;
    
    "test")
        echo "🧪 Running tests..."
        npm run lint
        npm run typecheck
        npm run build
        echo "✅ All tests passed!"
        ;;
    
    "help"|*)
        echo "📖 Usage: ./deploy.sh [command]"
        echo ""
        echo "Commands:"
        echo "  vercel         - Deploy to Vercel"
        echo "  docker         - Build and run Docker container"
        echo "  docker-compose - Start with Docker Compose"
        echo "  github         - Push to GitHub (triggers auto-deploy)"
        echo "  build          - Build for production"
        echo "  test           - Run linting, typecheck, and build"
        echo "  help           - Show this help message"
        echo ""
        echo "Examples:"
        echo "  ./deploy.sh vercel"
        echo "  ./deploy.sh docker-compose"
        echo "  ./deploy.sh github"
        ;;
esac