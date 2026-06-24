import { RouterProvider } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import { router } from './routes';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  return (
    <>
      <AudioPlayer />
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}
