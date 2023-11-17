import { GrowthBook } from '@growthbook/growthbook-react';
import { useEffect } from 'react';
import { GrowthBookProvider } from '@growthbook/growthbook-react';

const growthbook = new GrowthBook({
  apiHost: 'https://cdn.growthbook.io',
  clientKey: 'sdk-vyWlAE3aZ024MFs',
  enableDevMode: true,
  subscribeToChanges: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log('Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);

  // Replace with real targetting feature flags
  growthbook.setAttributes({
    id: 'foo',
    deviceId: 'foo',
    company: 'foo',
    loggedIn: true,
    employee: true,
    country: 'foo',
    browser: 'foo',
    url: 'foo',
  });

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <Component {...pageProps} />
    </GrowthBookProvider>
  );
};

export default App;
