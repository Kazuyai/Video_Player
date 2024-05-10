import React from 'react'

export const Settings = (
    { setVideoSrc } : { setVideoSrc: (src: string) => void }
) => {

    const openFile = () => {
        const input = document.getElementById('input') as HTMLInputElement;
        const file = input.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setVideoSrc(url);
        }
    }

  return (
    <section className='settings'>
        <input type="file" name="" id="input" />
        <button onClick={() => openFile()}>開く</button>
    </section>
  )
}

export default Settings