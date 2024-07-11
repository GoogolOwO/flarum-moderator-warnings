# Flarum Warnings

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/googolowo/flarum-warnings.svg)](https://packagist.org/packages/googolowo/flarum-warnings)

A [Flarum](http://flarum.org) extension. This allows moderators to warn users. Warnings can be applied from a post or from the user's profile. Each warning contains a number of strikes, a message visible to the user, and a message visible only to other moderators. Users will recieve notifications for warnings they recieve.

Because of that Moderator Warnings plugin is abandoned, so we created a **fork version**.

### TODO

- Suspend integration (automatically suspend if users reach more than X warnings, with X configurable in settings)
- Assume not malice warning.

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require googolowo/flarum-warnings
```

### Updating

```sh
composer update googolowo/flarum-warnings
```

### Feedback and Bugs

Please feel free to report any feedback/bugs/feature ideas on the discuss thread, or as an issue on the github!

### Credit

The base UI for this extension is based on, and reuses some code from, Friends of Flarum's Moderator Notes extension. Thank you to Ian Morland and all the folks at GiffGaff for their hard work on this!

### Links

- [Packagist](https://packagist.org/packages/googolowo/flarum-warnings)
- [Github](https://github.com/GoogolOwO/flarum-warnings)
- [Discuss](https://discuss.flarum.org/d/34837-warnings-the-fork-version-of-moderator-warnings)
