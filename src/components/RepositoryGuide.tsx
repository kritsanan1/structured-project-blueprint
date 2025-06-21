
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
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
  Wrench,
  Copy,
  CheckCircle
} from 'lucide-react';

const RepositoryGuide = () => {
  const [copiedContent, setCopiedContent] = useState<string | null>(null);

  const copyToClipboard = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedContent(id);
    setTimeout(() => setCopiedContent(null), 2000);
  };

  const CodeBlock = ({ code, language = 'text', id }: { code: string; language?: string; id: string }) => (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 h-8 w-8 p-0"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedContent === id ? (
          <CheckCircle className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );

  const readmeTemplate = `# Project Name

[![Build Status](https://github.com/username/project/workflows/CI/badge.svg)](https://github.com/username/project/actions)
[![Coverage Status](https://coveralls.io/repos/github/username/project/badge.svg?branch=main)](https://coveralls.io/github/username/project?branch=main)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

Brief description of what your project does and why it exists.

## Features

- ✨ Feature 1
- 🚀 Feature 2
- 🔧 Feature 3

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project.git

# Navigate to project directory
cd project

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## Usage

### Basic Example

\`\`\`javascript
import { SomeComponent } from './components';

function App() {
  return <SomeComponent />;
}
\`\`\`

## Documentation

- [API Documentation](./docs/api.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Deployment Guide](./docs/deployment.md)

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our community](https://discord.gg/example)
- 🐛 Issues: [GitHub Issues](https://github.com/username/project/issues)`;

  const contributingTemplate = `# Contributing to Project Name

Thank you for your interest in contributing! This guide will help you get started.

## Code of Conduct

This project follows our [Code of Conduct](./CODE_OF_CONDUCT.md). Please read it before contributing.

## Getting Started

### Development Setup

1. Fork the repository
2. Clone your fork: \`git clone https://github.com/yourusername/project.git\`
3. Create a feature branch: \`git checkout -b feature/amazing-feature\`
4. Install dependencies: \`npm install\`
5. Start development server: \`npm run dev\`

### Development Workflow

1. **Create an Issue**: Describe the bug or feature request
2. **Fork & Branch**: Create a feature branch from \`main\`
3. **Develop**: Write code following our style guide
4. **Test**: Ensure all tests pass
5. **Commit**: Use conventional commit messages
6. **Submit PR**: Create a pull request with detailed description

## Code Standards

### TypeScript Guidelines

- Use strict TypeScript configuration
- Define interfaces for all data structures
- Avoid \`any\` type usage
- Include JSDoc comments for public APIs

### Testing Requirements

- Write unit tests for all new features
- Maintain minimum 80% code coverage
- Include integration tests for critical paths
- Update e2e tests for UI changes

### Commit Message Format

We use [Conventional Commits](https://conventionalcommits.org/):

\`\`\`
type(scope): description

[optional body]

[optional footer]
\`\`\`

**Types:**
- \`feat:\` New feature
- \`fix:\` Bug fix
- \`docs:\` Documentation updates
- \`style:\` Code style changes
- \`refactor:\` Code refactoring
- \`test:\` Test updates
- \`chore:\` Build/tooling changes

**Examples:**
\`\`\`
feat(auth): add OAuth integration
fix(ui): resolve mobile layout issues
docs(api): update endpoint documentation
\`\`\`

## Pull Request Process

1. Update documentation for any new features
2. Add tests for new functionality
3. Ensure CI passes
4. Request review from maintainers
5. Address feedback promptly

## Issue Reporting

### Bug Reports

Include:
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots if applicable

### Feature Requests

Include:
- Use case description
- Proposed solution
- Alternative approaches considered
- Implementation complexity estimate

## Development Environment

### Required Tools

- Node.js 18+
- Git
- VS Code (recommended)
- Chrome DevTools

### Recommended Extensions

- ESLint
- Prettier
- TypeScript
- GitLens

## Release Process

1. Update version in \`package.json\`
2. Update \`CHANGELOG.md\`
3. Create release PR
4. Tag release after merge
5. Deploy to production

## Questions?

Feel free to ask questions in:
- GitHub Discussions
- Discord community
- Email maintainers`;

  const gitworkflowTemplate = `# Git Workflow and Branch Management

## Branch Strategy

### Main Branches
- \`main\`: Production-ready code
- \`develop\`: Integration branch for features

### Feature Branches
- \`feature/feature-name\`: New features
- \`fix/bug-description\`: Bug fixes
- \`hotfix/critical-fix\`: Emergency production fixes
- \`release/v1.2.0\`: Release preparation

## Branch Naming Conventions

### Format
\`type/short-description\`

### Examples
\`\`\`
feature/user-authentication
fix/header-layout-bug
hotfix/security-vulnerability
release/v2.1.0
docs/api-documentation
refactor/component-restructure
\`\`\`

## Commit Message Standards

### Format
\`\`\`
type(scope): description

[optional body]

[optional footer]
\`\`\`

### Types
- \`feat\`: New features
- \`fix\`: Bug fixes
- \`docs\`: Documentation
- \`style\`: Formatting changes
- \`refactor\`: Code restructuring
- \`test\`: Test updates
- \`chore\`: Build/tooling changes

### Examples
\`\`\`bash
feat(auth): implement OAuth 2.0 integration

- Add OAuth provider configuration
- Implement token refresh mechanism
- Add user profile synchronization

Closes #123
\`\`\`

## Workflow Process

### Starting New Feature
\`\`\`bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/new-feature

# Work on feature
git add .
git commit -m "feat(feature): implement new functionality"

# Push feature branch
git push origin feature/new-feature
\`\`\`

### Code Review Process
1. Create pull request
2. Request reviews from team members
3. Address feedback
4. Ensure CI passes
5. Merge after approval

### Release Process
\`\`\`bash
# Create release branch
git checkout -b release/v1.2.0 develop

# Update version numbers
# Update changelog
# Final testing

# Merge to main
git checkout main
git merge --no-ff release/v1.2.0

# Tag release
git tag -a v1.2.0 -m "Release version 1.2.0"

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.2.0
\`\`\`

## Branch Protection Rules

### Main Branch
- Require pull request reviews (2+ approvals)
- Require status checks to pass
- Require branches to be up to date
- Restrict force pushes
- Restrict deletions

### Develop Branch
- Require pull request reviews (1+ approval)
- Require status checks to pass
- Allow force pushes by administrators`;

  const cicdTemplate = `name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  workflow_dispatch:

env:
  NODE_VERSION: '18.x'
  COVERAGE_THRESHOLD: 80

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

      - name: Run tests
        run: npm run test:coverage

      - name: Check coverage threshold
        run: |
          COVERAGE=\$(npm run test:coverage -- --reporter=json | jq '.total.lines.pct')
          if (( \$(echo "\$COVERAGE < \${{ env.COVERAGE_THRESHOLD }}" | bc -l) )); then
            echo "Coverage \$COVERAGE% is below threshold \${{ env.COVERAGE_THRESHOLD }}%"
            exit 1
          fi

      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          token: \${{ secrets.CODECOV_TOKEN }}

  security:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Run security audit
        run: npm audit --audit-level=high

      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}

  build:
    needs: [test, security]
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: dist/

  deploy-staging:
    if: github.ref == 'refs/heads/develop'
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          path: dist/

      - name: Deploy to staging
        run: |
          # Add your deployment script here
          echo "Deploying to staging..."

  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: build
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          path: dist/

      - name: Deploy to production
        run: |
          # Add your deployment script here
          echo "Deploying to production..."

      - name: Create release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v\${{ github.run_number }}
          release_name: Release v\${{ github.run_number }}
          draft: false
          prerelease: false`;

  const securityTemplate = `# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | ✅ Yes             |
| 1.x.x   | ⚠️ Critical fixes only |
| < 1.0   | ❌ No             |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

### Preferred Method

Email us at: **security@example.com**

### What to Include

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the issue
- Location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- **Acknowledgment**: Within 24 hours
- **Initial Assessment**: Within 72 hours
- **Status Updates**: Weekly until resolution
- **Resolution**: Target 30 days for critical issues

## Security Measures

### Code Security
- Dependency scanning with Snyk
- Static code analysis with SonarCloud
- Regular security audits
- Automated vulnerability scanning

### Infrastructure Security
- HTTPS enforcement
- Content Security Policy (CSP)
- Secure headers implementation
- Regular security updates

### Access Control
- Multi-factor authentication required
- Principle of least privilege
- Regular access reviews
- Audit logging

## Responsible Disclosure

We kindly ask that you:
- Give us reasonable time to fix the issue before public disclosure
- Avoid accessing or modifying user data
- Don't perform actions that could harm our users or services
- Don't access or download data that doesn't belong to you

## Recognition

We appreciate security researchers who report vulnerabilities responsibly. With your permission, we'll acknowledge your contribution in our security updates.

## Contact

- Security Team: security@example.com
- General Questions: security-questions@example.com
- PGP Key: [Download](https://example.com/pgp-key.txt)`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Complete GitHub Repository Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide with templates, examples, and best practices for professional repository management
          </p>
        </div>

        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="workflow">Git Workflow</TabsTrigger>
            <TabsTrigger value="cicd">CI/CD</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    README.md Template
                  </CardTitle>
                  <CardDescription>
                    Professional README template with badges, features, and documentation links
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <CodeBlock code={readmeTemplate} language="markdown" id="readme" />
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    CONTRIBUTING.md Template
                  </CardTitle>
                  <CardDescription>
                    Comprehensive contributing guide with development setup and standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <CodeBlock code={contributingTemplate} language="markdown" id="contributing" />
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workflow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  Git Workflow & Branch Management
                </CardTitle>
                <CardDescription>
                  Complete guide for Git workflows, branching strategies, and commit conventions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <CodeBlock code={gitworkflowTemplate} language="markdown" id="workflow" />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cicd" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  GitHub Actions CI/CD Pipeline
                </CardTitle>
                <CardDescription>
                  Enterprise-grade CI/CD pipeline with testing, security scanning, and deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <CodeBlock code={cicdTemplate} language="yaml" id="cicd" />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Policy Template
                </CardTitle>
                <CardDescription>
                  Comprehensive security policy with vulnerability reporting and response procedures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <CodeBlock code={securityTemplate} language="markdown" id="security" />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="structure" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monorepo vs Multi-repo</CardTitle>
                  <CardDescription>
                    Comparison and recommendations for repository organization strategies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Monorepo Benefits</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Unified versioning and releases</li>
                      <li>• Shared code and dependencies</li>
                      <li>• Atomic cross-project changes</li>
                      <li>• Simplified dependency management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Multi-repo Benefits</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Independent deployment cycles</li>
                      <li>• Team autonomy and ownership</li>
                      <li>• Reduced build complexity</li>
                      <li>• Granular access control</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Type Considerations</CardTitle>
                  <CardDescription>
                    Structure recommendations for different project types
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">Web Applications</Badge>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Separate client/server directories</li>
                      <li>• Shared types and utilities</li>
                      <li>• Environment-specific configs</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Mobile Apps</Badge>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Platform-specific folders</li>
                      <li>• Shared business logic</li>
                      <li>• Asset organization</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Libraries</Badge>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Clear API documentation</li>
                      <li>• Examples and demos</li>
                      <li>• TypeScript definitions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-indigo-600" />
              Quick Setup Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Essential Files</h4>
                <div className="space-y-2">
                  {[
                    'README.md',
                    'LICENSE',
                    'CONTRIBUTING.md',
                    'SECURITY.md',
                    '.gitignore',
                    '.github/workflows/ci.yml'
                  ].map((file, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <File className="h-3 w-3 text-gray-500" />
                      <code className="bg-gray-100 px-1 rounded">{file}</code>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Repository Settings</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Enable branch protection</li>
                  <li>• Configure merge settings</li>
                  <li>• Set up issue templates</li>
                  <li>• Enable security alerts</li>
                  <li>• Configure webhooks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Team Setup</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Define roles and permissions</li>
                  <li>• Set up code review process</li>
                  <li>• Configure notifications</li>
                  <li>• Establish coding standards</li>
                  <li>• Plan release strategy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RepositoryGuide;
