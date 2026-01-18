# Azure Static Web Apps Deployment Workflow

This Next.js app is configured for deployment as a static website on Azure Static Web Apps.

## Build Configuration

The app is configured to generate static HTML files that can be served directly by Azure Static Web Apps:

- **Output Mode**: Static Export (`output: 'export'` in `next.config.ts`)
- **Build Command**: `npm run build`
- **Output Directory**: `out/`

## Deployment Steps

### Option 1: Azure Portal Deployment

1. Create a new Static Web App in Azure Portal
2. Connect your GitHub repository
3. Set the build configuration:
   - **App location**: `/`
   - **API location**: Leave empty (no API)
   - **Output location**: `out`
4. Azure will automatically deploy on push to main branch

### Option 2: Azure CLI Deployment

```bash
# Install Azure CLI if not already installed
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login

# Create a resource group (if needed)
az group create --name hyde-premier-league-rg --location eastus

# Create Static Web App
az staticwebapp create \
  --name hyde-premier-league \
  --resource-group hyde-premier-league-rg \
  --source . \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "out"

# Build and deploy manually
npm run build
az staticwebapp deploy \
  --name hyde-premier-league \
  --resource-group hyde-premier-league-rg \
  --app-location out
```

### Option 3: GitHub Actions (Automatic)

Azure Static Web Apps automatically creates a GitHub Actions workflow when you connect your repository. The workflow file will be created at `.github/workflows/azure-static-web-apps-*.yml`.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (generates static files in /out)
npm run build

# Preview production build locally
npx serve out
```

## Static Export Features

- All pages are pre-rendered at build time
- No server-side rendering required
- Fast page loads and optimal SEO
- Tournament pages organized by year
- Fully responsive design

## Tournament Structure

The app includes dedicated pages for each tournament type:

- Premier League: `/tournaments/premier-league`
- FA Cup: `/tournaments/fa-cup`
- Champions League: `/tournaments/champions-league`
- Summer League: `/tournaments/summer-league`

Each tournament page can be expanded with yearly archives and detailed statistics.
