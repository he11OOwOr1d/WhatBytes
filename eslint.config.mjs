export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Define the files/extensions explicitly
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },]
  },
}
];
