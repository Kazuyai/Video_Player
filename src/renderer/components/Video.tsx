import React, { useEffect } from 'react'

export const Video = (
    { videoSrc } : { videoSrc: string }
) => {
  return (
    <section className='video'>
        <video src={videoSrc} controls autoPlay />
        <input type="file" name="" id="input" />
        <button onClick={() => {
            const video = document.querySelector('video') as HTMLVideoElement;
            const input = document.getElementById('input') as HTMLInputElement;
            if (!input.files) return;
                
            const file = input.files[0];
        
            if (file === undefined || !video.canPlayType(file.type)) {
            return;
            }
        
            URL.revokeObjectURL(video.src);
            video.src = URL.createObjectURL(file);
            // playpause.classList.remove('paused');
        }}>aaaaaa</button>
    </section>
  )
}

export default Video