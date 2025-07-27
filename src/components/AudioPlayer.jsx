import React, { useRef, useState } from "react";

const STREAM_URL = "https://your-stream-url/stream.mp3"; // Replace with your stream URL

const AudioPlayer = ({ nowPlaying }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [error, setError] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      setError(false);
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setError(true));
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex items-center gap-3">
        <button
          onClick={handlePlayPause}
          aria-label={playing ? "Pause" : "Play"}
          className="p-2 rounded-full bg-primary text-white"
        >
          {playing ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 3v18l15-9L5 3z" /></svg>
          )}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={e => {
            setVolume(e.target.value);
            if (audioRef.current) audioRef.current.volume = e.target.value;
          }}
          aria-label="Volume"
          className="w-24"
        />
        <span className="ml-2 text-xs font-semibold text-green-600" aria-live="polite">
          ● LIVE
        </span>
      </div>
      <div className="mt-2 text-sm text-gray-700 dark:text-gray-200">
        {buffering && <span>Buffering...</span>}
        {error && <span className="text-red-500">Stream unavailable</span>}
        {!buffering && !error && (
          <span>
            Now Playing: <strong>{nowPlaying?.title || "Unknown"}</strong>
            {nowPlaying?.host && <> &mdash; {nowPlaying.host}</>}
          </span>
        )}
      </div>
      <audio
        ref={audioRef}
        src={STREAM_URL}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onWaiting={() => setBuffering(true)}
        onPlaying={() => setBuffering(false)}
        onError={() => setError(true)}
        aria-label="Live radio stream"
        className="hidden"
      />
      <noscript>
        <div className="text-red-600 mt-2">Audio streaming requires JavaScript.</div>
      </noscript>
    </div>
  );
};

export default AudioPlayer;
