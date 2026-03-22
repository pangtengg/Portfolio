import { RouterProvider } from 'react-router';
import { router } from './routes';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  return (
    <>
      <AudioPlayer />
      <RouterProvider router={router} />
    </>
  );
}
