import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const CyberpunkPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#F0FFFF',
            100: '#D1FFFF',
            200: '#94FEFF',
            300: '#57FDFF',
            400: '#1AFBFF',
            500: '#00F0FF',
            600: '#00B8CC',
            700: '#008599',
            800: '#005766',
            900: '#002E33',
            950: '#00171A'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '#0A0A0F',
                    100: '#12121A',
                    200: '#1E1E2A',
                    300: '#2D2D3E',
                    400: '#3C3C52',
                    500: '#4B4B66',
                    600: '#5A5A7A',
                    700: '#69698E',
                    800: '#7878A2',
                    900: '#8787B6',
                    950: '#020617'
                }
            }
        }
    },
    components: {
        button: {
            colorScheme: {
                dark: {
                    root: {
                        primary: {
                            background: '{primary.500}',
                            border: {
                                color: '{primary.500}',
                                width: '1px'
                            },
                            hover: {
                                background: '{primary.400}',
                                border: {
                                    color: '{primary.400}'
                                }
                            },
                            active: {
                                background: '{primary.300}',
                                border: {
                                    color: '{primary.300}'
                                }
                            },
                            color: '#000000'
                        }
                    }
                }
            }
        }
    }
});

export default CyberpunkPreset;
