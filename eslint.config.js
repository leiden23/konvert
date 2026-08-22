import prettierConfig from 'eslint-config-prettier';
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            'import-x': importPlugin,
        },
        rules: {
            'import-x/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc' },
                },
            ],
            'import-x/no-duplicates': 'error',
            'no-console': 'warn',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                2,
                { argsIgnorePattern: '^_' },
            ],
            'no-undef': 'off',
            'no-duplicate-imports': 2,
            eqeqeq: [2, 'always'],
            'prefer-const': 2,
            'no-return-await': 2,
            semi: [2, 'always'],
            'no-empty': 1,
        },
    },
    {
        files: [
            'vite.config.ts',
            'eslint.config.js',
            '**/*.config.{js,ts}',
            '.storybook/**/*.{js,ts}',
        ],
        languageOptions: {
            globals: globals.node,
        },
    },
    ...storybook.configs['flat/recommended'],
    prettierConfig,
]);
