// vite.config.js
import liveReload from 'vite-plugin-live-reload';

export default {
    // config options
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: 'main.js',
            name: 'CasaRaices',
            // the proper extensions will be added
            fileName: 'casa-raices',
        },
        outDir: "../css/",
        rollupOptions: {
            input: './main.js'
        }
    }
}
