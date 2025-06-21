
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Folder, 
  File, 
  GitBranch, 
  Shield, 
  Settings, 
  Code, 
  TestTube, 
  BookOpen,
  Package,
  Wrench
} from 'lucide-react';

const Index = () => {
  const repositoryStructure = `
project-name/                              # Root directory - contains all project files
├── .github/                               # GitHub-specific configurations and templates
│   ├── workflows/                         # CI/CD automation pipelines
│   │   ├── ci.yml                        # Continuous integration workflow
│   │   ├── cd.yml                        # Continuous deployment workflow
│   │   ├── security-scan.yml             # Automated security scanning
│   │   └── dependency-update.yml         # Automated dependency updates
│   ├── ISSUE_TEMPLATE/                   # Templates for consistent issue reporting
│   │   ├── bug_report.md                 # Bug report template
│   │   ├── feature_request.md            # Feature request template
│   │   └── custom.md                     # General issue template
│   ├── PULL_REQUEST_TEMPLATE.md          # Standardized PR descriptions
│   ├── CODEOWNERS                        # Code review assignments
│   └── FUNDING.yml                       # Project sponsorship information
├── docs/                                 # Comprehensive project documentation
│   ├── api/                              # API documentation and specs
│   │   ├── openapi.yml                   # OpenAPI/Swagger specification
│   │   ├── endpoints.md                  # Detailed endpoint documentation
│   │   └── authentication.md            # Auth implementation guide
│   ├── architecture/                     # System design documentation
│   │   ├── overview.md                   # High-level architecture
│   │   ├── database-schema.md            # Database design and relationships
│   │   ├── diagrams/                     # Visual architecture representations
│   │   └── decision-records/             # Architectural decision logs
│   ├── deployment/                       # Production deployment guides
│   │   ├── docker.md                     # Container deployment instructions
│   │   ├── kubernetes.md                 # K8s deployment configuration
│   │   └── environments.md               # Environment-specific setup
│   └── development/                      # Developer onboarding guides
│       ├── setup.md                      # Local development environment
│       ├── coding-standards.md           # Code style and conventions
│       └── testing-guide.md              # Testing strategies and practices
├── src/                                  # Main application source code
│   ├── components/                       # Reusable UI components
│   │   ├── common/                       # Shared components across features
│   │   ├── forms/                        # Form-specific components
│   │   └── layout/                       # Layout and structural components
│   ├── pages/                            # Page-level components and routes
│   ├── hooks/                            # Custom React hooks
│   ├── utils/                            # Utility functions and helpers
│   │   ├── api.ts                        # API client configuration
│   │   ├── constants.ts                  # Application constants
│   │   └── validators.ts                 # Input validation functions
│   ├── types/                            # TypeScript type definitions
│   ├── styles/                           # Styling and theming
│   ├── assets/                           # Static assets (images, fonts)
│   └── lib/                              # External library configurations
├── tests/                                # Comprehensive test suite
│   ├── unit/                             # Isolated component/function tests
│   ├── integration/                      # Multi-component interaction tests
│   ├── e2e/                              # End-to-end user journey tests
│   ├── fixtures/                         # Test data and mock objects
│   ├── mocks/                            # Service and API mocks
│   └── utils/                            # Testing utility functions
├── config/                               # Application configuration files
│   ├── environments/                     # Environment-specific configs
│   │   ├── development.json              # Development environment settings
│   │   ├── staging.json                  # Staging environment settings
│   │   └── production.json               # Production environment settings
│   ├── database/                         # Database configuration
│   │   ├── migrations/                   # Database schema migrations
│   │   └── seeds/                        # Database seed data
│   └── build/                            # Build and bundler configurations
├── scripts/                              # Automation and utility scripts
│   ├── build.sh                          # Production build script
│   ├── deploy.sh                         # Deployment automation
│   ├── setup-dev.sh                      # Development environment setup
│   └── db-migrate.sh                     # Database migration runner
├── public/                               # Static public assets
│   ├── images/                           # Public image assets
│   ├── icons/                            # Application icons and favicons
│   └── manifest.json                     # Web app manifest
├── docker/                               # Container configurations
│   ├── Dockerfile                        # Main application container
│   ├── docker-compose.yml                # Local development containers
│   ├── docker-compose.prod.yml           # Production container orchestration
│   └── nginx/                            # Web server configuration
├── .env.example                          # Environment variables template
├── .gitignore                            # Git exclusion patterns
├── .gitattributes                        # Git file handling rules
├── .dockerignore                         # Docker build exclusions
├── .eslintrc.json                        # JavaScript/TypeScript linting rules
├── .prettierrc                           # Code formatting configuration
├── .editorconfig                         # Editor consistency settings
├── package.json                          # Node.js dependencies and scripts
├── package-lock.json                     # Locked dependency versions
├── tsconfig.json                         # TypeScript compiler configuration
├── tailwind.config.ts                    # Tailwind CSS configuration
├── vite.config.ts                        # Vite build tool configuration
├── README.md                             # Project overview and quick start
├── LICENSE                               # Legal usage terms
├── CONTRIBUTING.md                       # Contribution guidelines
├── SECURITY.md                           # Security policy and reporting
├── CHANGELOG.md                          # Version history and changes
└── CODE_OF_CONDUCT.md                    # Community behavior standards
  `.trim();

  const sections = [
    {
      title: "Root Configuration Files",
      icon: <Settings className="h-5 w-5" />,
      description: "Essential project configuration and metadata files",
      files: [
        { name: "README.md", purpose: "Project overview, installation, and usage instructions" },
        { name: "LICENSE", purpose: "Legal terms governing project usage and distribution" },
        { name: "CONTRIBUTING.md", purpose: "Guidelines for contributors and collaboration" },
        { name: "SECURITY.md", purpose: "Security policy and vulnerability reporting process" },
        { name: "CHANGELOG.md", purpose: "Chronological list of changes and version history" },
        { name: "CODE_OF_CONDUCT.md", purpose: "Community standards and behavior expectations" }
      ]
    },
    {
      title: "Package Management",
      icon: <Package className="h-5 w-5" />,
      description: "Dependency management and project metadata",
      files: [
        { name: "package.json", purpose: "Node.js dependencies, scripts, and project metadata" },
        { name: "package-lock.json", purpose: "Locked dependency versions for reproducible builds" },
        { name: "tsconfig.json", purpose: "TypeScript compiler configuration and options" }
      ]
    },
    {
      title: "Git Configuration",
      icon: <GitBranch className="h-5 w-5" />,
      description: "Version control and Git-specific settings",
      files: [
        { name: ".gitignore", purpose: "Files and directories to exclude from version control" },
        { name: ".gitattributes", purpose: "Git file handling rules and line ending settings" }
      ]
    },
    {
      title: "Source Code Organization",
      icon: <Code className="h-5 w-5" />,
      description: "Main application code structure",
      files: [
        { name: "src/components/", purpose: "Reusable UI components organized by feature" },
        { name: "src/pages/", purpose: "Page-level components and routing logic" },
        { name: "src/hooks/", purpose: "Custom React hooks for shared logic" },
        { name: "src/utils/", purpose: "Utility functions and helper modules" },
        { name: "src/types/", purpose: "TypeScript type definitions and interfaces" }
      ]
    },
    {
      title: "Testing Infrastructure",
      icon: <TestTube className="h-5 w-5" />,
      description: "Comprehensive testing setup",
      files: [
        { name: "tests/unit/", purpose: "Isolated component and function tests" },
        { name: "tests/integration/", purpose: "Multi-component interaction tests" },
        { name: "tests/e2e/", purpose: "End-to-end user journey tests" },
        { name: "tests/fixtures/", purpose: "Test data and mock objects" }
      ]
    },
    {
      title: "Documentation",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Project documentation and guides",
      files: [
        { name: "docs/api/", purpose: "API documentation and OpenAPI specifications" },
        { name: "docs/architecture/", purpose: "System design and architectural decisions" },
        { name: "docs/deployment/", purpose: "Production deployment and infrastructure guides" },
        { name: "docs/development/", purpose: "Developer onboarding and setup instructions" }
      ]
    }
  ];

  const bestPractices = [
    {
      category: "File Naming",
      practices: [
        "Use kebab-case for directories (my-component)",
        "Use PascalCase for React components (MyComponent.tsx)",
        "Use camelCase for utility files (apiClient.ts)",
        "Use UPPERCASE for constants (CONFIG.json)"
      ]
    },
    {
      category: "Directory Structure",
      practices: [
        "Group related files together logically",
        "Keep nesting levels reasonable (max 3-4 levels)",
        "Use index files for clean imports",
        "Separate concerns clearly (UI, logic, data)"
      ]
    },
    {
      category: "Documentation",
      practices: [
        "Update README for every major change",
        "Document API changes in CHANGELOG",
        "Include setup instructions for new developers",
        "Maintain architectural decision records"
      ]
    },
    {
      category: "Testing",
      practices: [
        "Write tests for critical business logic",
        "Maintain separate test and mock directories",
        "Use descriptive test file naming",
        "Include both positive and negative test cases"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Modern GitHub Repository Structure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to organizing your codebase following industry best practices 
            for scalability, maintainability, and team collaboration.
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Folder className="h-6 w-6 text-blue-600" />
              Complete Repository Structure
            </CardTitle>
            <CardDescription>
              Hierarchical view of a well-organized GitHub repository
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 w-full">
              <pre className="text-sm font-mono bg-gray-50 p-4 rounded-lg overflow-x-auto whitespace-pre">
                {repositoryStructure}
              </pre>
            </ScrollArea>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {section.icon}
                  {section.title}
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {section.files.map((file, fileIndex) => (
                  <div key={fileIndex} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <File className="h-4 w-4 text-gray-500" />
                      <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                        {file.name}
                      </code>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">{file.purpose}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-indigo-600" />
              Best Practices & Guidelines
            </CardTitle>
            <CardDescription>
              Essential practices for maintaining a clean and scalable codebase
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Badge variant="secondary">{category.category}</Badge>
                  </h3>
                  <ul className="space-y-2">
                    {category.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Implementation Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-800">Getting Started</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Create repository structure early</li>
                  <li>• Set up CI/CD from day one</li>
                  <li>• Establish coding standards</li>
                  <li>• Write comprehensive README</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-800">Maintenance</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Regular dependency updates</li>
                  <li>• Continuous documentation</li>
                  <li>• Code review enforcement</li>
                  <li>• Security scanning automation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-800">Scaling</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Modular architecture planning</li>
                  <li>• Performance monitoring setup</li>
                  <li>• Team collaboration tools</li>
                  <li>• Deployment automation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-gray-600">
          <p className="text-sm">
            This structure is adaptable to various project types and can be customized based on specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
