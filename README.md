# IHG Hotels & Resorts

https://www.ihg.com/hotels/us/en/reservation

## Environments
- Preview: https://main--ihg--adobedevxsc.hlx.page/
- Live: https://main--ihg--adobedevxsc.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

<!-- TODO: update with verbiage specific to door-opener template -->
1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `ihg` directory in your favorite IDE and start coding :)
