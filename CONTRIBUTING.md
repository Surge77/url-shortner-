# Contributing to URL Shortener

First off, thanks for taking the time to contribute! 🎉

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots, etc.)
- **Describe the behavior you observed and what you expected**
- **Include your environment details** (OS, Node version, browser, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List some examples** of how it would be used

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes** - write clean, readable code
3. **Test your changes** - make sure everything works
4. **Update documentation** if needed
5. **Write a clear commit message**
6. **Submit that PR!**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/url-shortner.git
cd url-shortner

# Install dependencies
cd server-app && npm install
cd ../client-app/url-shortner-app && npm install

# Create a new branch
git checkout -b feature/my-awesome-feature
```

## Code Style

- Use **TypeScript** for type safety
- Follow the existing code style
- Use **meaningful variable names**
- Add comments for complex logic
- Keep functions small and focused

## Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests liberally

Examples:
```
Add custom short code feature
Fix redirect bug for expired URLs
Update README with new API endpoints
```

## Questions?

Feel free to open an issue with the `question` label or reach out directly!

---

**Thanks for contributing! 🚀**
