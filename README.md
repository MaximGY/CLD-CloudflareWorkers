# TODOAPP - CloudflareWorkers


Ce repository contient un exemple d'une application de TODO app utilisant les Cloudflare Workers.

Un exemple de l'application en ligne peut être trouvé [ici](https://todolist.maximgy.workers.dev/)

Les tâches sont communes à tous les utilisateurs.

## Installation

### Pré-requis

* Node.js

Pour installer l'utilitaire Cloudflare sur votre machine, il suffit de lancer la commande suivante:

```
npm i -g wrangler
```

### Déploiement

Pour déployer l'application, il vous suffit d'entrer vos identifiants Cloudflare dans le fichier `wrangler.toml`, comme expliqué dans celui-ci.

Par la suite, vous pouvez déployer l'app via les commandes suivantes:

Déploiement en local:
```
wrangler dev
```

Déploiement en production:
```
wrangler publish
```
