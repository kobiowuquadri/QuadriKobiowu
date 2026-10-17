import { useEffect, useState } from 'react';
import { getNasheed } from './sounds';

const EVENTS = ['play', 'pause', 'ended', 'timeupdate', 'loadedmetadata', 'volumechange'];

// Follows the nasheed's playback so the player UI stays in sync.
const useNasheed = () => {
  const [state, setState] = useState({ playing: false, progress: 0 });

  useEffect(() => {
    const audio = getNasheed();
    const update = () =>
      setState({
        // A muted play is only the mobile unlock in primeNasheed, not real playback.
        playing: !audio.paused && !audio.ended && !audio.muted,
        progress: audio.duration ? audio.currentTime / audio.duration : 0,
      });

    EVENTS.forEach((event) => audio.addEventListener(event, update));
    update();
    return () => EVENTS.forEach((event) => audio.removeEventListener(event, update));
  }, []);

  return state;
};

export default useNasheed;
