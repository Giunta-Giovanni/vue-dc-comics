**MILESTONES – Progetto Vue con Vite**

# Milestone 1 – Setup iniziale e struttura base √

- Creazione di un nuovo progetto Vue tramite **npm create vite@latest con template vue**.√
- Pulizia dei file base (App.vue, main.js, style.css).√
- Installazione dei pacchetti necessari: vue-router per la gestione delle rotte, bootstrap per lo styling di base.
- Configurazione iniziale del router:

1. Creazione di un file router/index.js.
2. Definizione di più rotte (/, /about).
3. Associazione dei componenti alle route (es. HomePage.vue, AboutPage.vue).
4. Creazione del layout generale (DefaultLayout.vue) con slot o struttura base.

# Milestone 2 – Layout dinamico e gestione centralizzata dei dati √

- Creazione del componente Header.vue e Footer.vue, separando il layout principale.√
- Utilizzo di una cartella data contenente tutti i dati di pagina. √
- Passaggio dei dati dal router al layout e dal layout all’header e footer tramite props.√
- Gestione dinamica del menu nell’Header.vue con **v-for** e props.√
- Uso di **defineProps** per gestire i dati ricevuti dai componenti genitori.
- Debug di props nested (es. array di array) e gestione strutturata dei dati passati.

# Milestone 3 – Componenti riutilizzabili e comunicazione tra pagine √

- Creazione di un componente Card.vue riutilizzabile per visualizzare i fumetti. √
- Creazione di una HomePage.vue che genera le istanze di Card tramite v-for.√
- Passaggio dei dati dal componente pagina (HomePage) al componente figlio (Card) tramite props.√
- Verifica dell’integrazione tra struttura dati (array di oggetti) e componenti dinamici.√
- Refinamento dello stile con classi CSS e/o Bootstrap.√

# Milestone 4 – Routing avanzato e organizzazione delle pagine √

- Creazione di due pagine principali:

1. HomePage.vue
2. AboutPage.vue

- Verifica e test del funzionamento del router:

1. Navigazione tra le pagine con <router-link>.
2. Controllo del rendering corretto nei <router-view>.
3. Analisi delle differenze rispetto al routing React (SPA con <Router>, <Routes>, <Link>).

# Extra – Debugging e riflessioni

- Debug strutturale: props annidate, strutture di array complesse, oggetti passati come array di array.
- Analisi e comprensione dei pattern di comunicazione tra componenti Vue (parent → child con props, gestione centralizzata dei dati).
- Prime considerazioni sulle differenze di approccio tra React e Vue:
- JSX vs Template syntax
- Routing con react-router-dom vs vue-router
